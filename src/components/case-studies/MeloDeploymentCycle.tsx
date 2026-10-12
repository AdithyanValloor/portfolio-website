"use client";

import { useEffect, useId, useRef } from "react";
import mermaid from "mermaid";

type Props = {
  className?: string;
};

const diagram = String.raw`
%%{init: {
  "theme": "base",
  "themeVariables": {
    "background": "#09090B",
    "fontFamily": "JetBrains Mono, ui-monospace, SFMono-Regular, Menlo, monospace",
    "fontSize": "13px",
    "primaryColor": "#18181B",
    "primaryTextColor": "#F4F4F5",
    "primaryBorderColor": "#52525B",
    "lineColor": "#858B98",
    "secondaryColor": "#141419",
    "tertiaryColor": "#10141C",
    "clusterBkg": "#101116",
    "clusterBorder": "#3F3F46",
    "edgeLabelBackground": "#101116",
    "titleColor": "#D4D4D8"
  },
  "flowchart": {
    "curve": "basis",
    "nodeSpacing": 24,
    "rankSpacing": 32,
    "padding": 10,
    "htmlLabels": true,
    "useMaxWidth": false,
    "wrappingWidth": 150
  }
}}%%

flowchart TB

    subgraph Source["00 · SOURCE"]
        direction LR
        Developer(["Developer"])
        GitHub["GitHub Repository<br/><small>Source Code · main</small>"]
        Developer --> GitHub
    end

    subgraph Pipeline["01 · CONTINUOUS INTEGRATION"]
        direction LR
        Trigger["GitHub Actions<br/><small>Workflow Trigger</small>"]
        Checks["Run Checks<br/><small>Tests · Lint · Build</small>"]
        CIResult{"Passed?"}
        CIFail["CI Failed<br/><small>Inspect logs · Fix code</small>"]
        Trigger --> Checks --> CIResult
        CIResult -->|No| CIFail
    end

    subgraph Deployment["02 · CONTINUOUS DEPLOYMENT"]
        direction LR
        SSH["Secure SSH<br/><small>GitHub Actions → GCP VM</small>"]
        Revision["Retrieve Revision<br/><small>Git Fetch · Checkout</small>"]
        Compose["Update Application<br/><small>Docker Compose Build / Up</small>"]
        Containers["App Containers<br/><small>Frontend · Backend · Auth · Message</small>"]
        SSH --> Revision --> Compose --> Containers
    end

    subgraph Verification["03 · PRODUCTION VERIFICATION"]
        direction LR
        Health["Smoke Tests & Health Checks<br/><small>HTTP Endpoints · Availability</small>"]
        Healthy{"Healthy?"}
        Success(["Deployment Verified"])
        Recover["Deployment Failure<br/><small>Inspect logs · Roll Back</small>"]
        Health --> Healthy
        Healthy -->|Yes| Success
        Healthy -->|No| Recover
    end

    %% Stage-to-stage flow (subgraph level keeps inner direction intact)
    Source -->|push| Pipeline
    Pipeline -->|checks pass| Deployment
    Deployment -->|deployed| Verification

    classDef source fill:#18181B,stroke:#71717A,stroke-width:1.5px,color:#F4F4F5
    classDef entry fill:#21190F,stroke:#F59E0B,stroke-width:2px,color:#FDE68A
    classDef process fill:#181B22,stroke:#626B7A,stroke-width:1.5px,color:#F4F4F5
    classDef decision fill:#211B12,stroke:#B88938,stroke-width:1.5px,color:#FDE3A7
    classDef success fill:#14251B,stroke:#4D9970,stroke-width:2px,color:#BBF7D0
    classDef failure fill:#291517,stroke:#B45353,stroke-width:1.5px,color:#FECACA

    class Developer,GitHub source
    class Trigger,SSH entry
    class Checks,Revision,Compose,Containers,Health process
    class CIResult,Healthy decision
    class Success success
    class CIFail,Recover failure

    style Source fill:#101014,stroke:#3F3F46,stroke-width:1.5px,color:#D4D4D8
    style Pipeline fill:#111319,stroke:#454955,stroke-width:1.5px,color:#D4D4D8
    style Deployment fill:#15130F,stroke:#80652E,stroke-width:1.5px,color:#E9C778
    style Verification fill:#10141C,stroke:#475569,stroke-width:1.5px,color:#CBD5E1

    %% Edge order: 0 Dev>GH | 1-3 CI | 4-6 CD | 7-9 Verify | 10-12 stage links
    linkStyle 0,1,2,4,5,6,7 stroke:#858B98,stroke-width:1.5px
    linkStyle 3,9 stroke:#F87171,stroke-width:1.5px
    linkStyle 8 stroke:#4ADE80,stroke-width:1.5px
    linkStyle 10,11,12 stroke:#F59E0B,stroke-width:2px
`;

export default function MeloDeploymentCycle({ className = "" }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const reactId = useId();

  useEffect(() => {
    let cancelled = false;

    async function renderDiagram() {
      if (!containerRef.current) return;

      mermaid.initialize({
        startOnLoad: false,
        securityLevel: "strict",
        theme: "base",
      });

      try {
        const id = `melo-deployment-${reactId.replace(/[^a-zA-Z0-9_-]/g, "")}`;

        const { svg } = await mermaid.render(id, diagram);

        if (cancelled || !containerRef.current) return;

        containerRef.current.innerHTML = svg;

        const svgElement = containerRef.current.querySelector("svg");

        if (svgElement) {
          const viewBox = svgElement.viewBox.baseVal;
          const naturalWidth = viewBox && viewBox.width ? viewBox.width : 760;

          svgElement.removeAttribute("height");
          svgElement.style.width = "100%";
          svgElement.style.height = "auto";
          svgElement.style.minWidth = `${Math.round(naturalWidth * 0.85)}px`;
          svgElement.style.maxWidth = `${Math.round(naturalWidth)}px`;
          svgElement.style.display = "block";
          svgElement.style.margin = "0 auto";

          svgElement.setAttribute("preserveAspectRatio", "xMidYMid meet");
        }
      } catch (error) {
        console.error("Failed to render Melo deployment cycle:", error);

        if (!cancelled && containerRef.current) {
          containerRef.current.textContent =
            "Deployment cycle diagram could not be rendered.";
        }
      }
    }

    renderDiagram();

    return () => {
      cancelled = true;
    };
  }, [reactId]);

  return (
    <div
      className={`w-full overflow-x-auto rounded-2xl border border-zinc-800 bg-[#09090b] p-3 sm:p-5 ${className}`}
    >
      <div ref={containerRef} className="mx-auto w-full" />
    </div>
  );
}