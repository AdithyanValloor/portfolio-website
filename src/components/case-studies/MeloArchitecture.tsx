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
    "fontSize": "14px",
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
    "nodeSpacing": 45,
    "rankSpacing": 60,
    "padding": 16,
    "htmlLabels": true
  }
}}%%

flowchart TB

    %% External actors
    User(["User / Browser"])

    %% Production environment
    subgraph Cloud["GOOGLE CLOUD PLATFORM · PRODUCTION VM"]
        direction TB

        subgraph Edge["01 · PUBLIC ENTRY"]
            direction TB
            Nginx["Nginx Reverse Proxy<br/><small>HTTPS · Request Routing</small>"]
        end

        subgraph App["02 · APPLICATION SERVICES"]
            direction LR
            Frontend["Next.js<br/>Frontend"]
            Backend["Backend API<br/><small>Node.js · Express · Socket.IO</small>"]
            Auth["Auth<br/>Service"]
            Message["Message<br/>Service"]
        end

        subgraph Infra["03 · COORDINATION"]
            direction LR
            Redis[("Redis<br/><small>Cache · Presence · OTP</small>")]
            Rabbit["RabbitMQ<br/><small>Events · Retries · DLQ</small>"]
        end

        subgraph Data["04 · PERSISTENCE"]
            direction LR
            Postgres[("PostgreSQL<br/><small>Auth Service</small>")]
            MongoApp[("MongoDB<br/><small>Backend API</small>")]
            MongoMsg[("MongoDB<br/><small>Message Service</small>")]
        end
    end

    %% Deployment pipeline - separate from user traffic
    CI(["GitHub Actions<br/>CI/CD"])

    %% User request path
    User -->|"HTTPS / WSS"| Nginx
    Nginx --> Frontend
    Nginx --> Backend
    Frontend -->|"REST · Socket.IO"| Backend

    %% Internal service communication
    Backend <-->|"gRPC"| Auth
    Backend <-->|"gRPC"| Message

    %% Coordination
    Backend <--> Redis
    Backend <--> Rabbit

    %% Database ownership
    Auth <--> Postgres
    Backend <--> MongoApp
    Message <--> MongoMsg

    %% Deployment path
    CI -.->|"Build & Deploy"| Cloud

    %% Node styles
    classDef entry fill:#21190F,stroke:#F59E0B,stroke-width:2.5px,color:#FDE68A
    classDef service fill:#181B22,stroke:#626B7A,stroke-width:1.5px,color:#F4F4F5
    classDef infra fill:#211B12,stroke:#B88938,stroke-width:1.5px,color:#FDE3A7
    classDef data fill:#131923,stroke:#64748B,stroke-width:1.5px,color:#E2E8F0
    classDef actor fill:#111114,stroke:#52525B,stroke-width:1.5px,stroke-dasharray:4 3,color:#D4D4D8

    class Nginx entry
    class Frontend,Backend,Auth,Message service
    class Redis,Rabbit infra
    class Postgres,MongoApp,MongoMsg data
    class User,CI actor

    %% Group backgrounds and boundaries
    style Cloud fill:#0D0F14,stroke:#52525B,stroke-width:2px,color:#E4E4E7
    style Edge fill:#15130F,stroke:#B88938,stroke-width:1.5px,color:#FBBF24
    style App fill:#111319,stroke:#454955,stroke-width:1.5px,color:#D4D4D8
    style Infra fill:#14130F,stroke:#80652E,stroke-width:1.5px,color:#E9C778
    style Data fill:#10141C,stroke:#475569,stroke-width:1.5px,color:#CBD5E1

    %% Primary entry path
    linkStyle 0,1,2 stroke:#F59E0B,stroke-width:2px

    %% Internal communication
    linkStyle 3,4,5,6,7,8,9,10 stroke:#858B98,stroke-width:1.5px

    %% CI/CD deployment
    linkStyle 11 stroke:#64748B,stroke-width:1.5px,stroke-dasharray:5 4

`;

export default function MeloArchitecture({ className = "" }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const reactId = useId();

  useEffect(() => {
    let cancelled = false;

    async function renderDiagram() {
      if (!containerRef.current) return;

      mermaid.initialize({
        startOnLoad: false,
        securityLevel: "loose",
        theme: "base",
      });

      try {
        const id = `melo-architecture-${reactId.replace(
          /[^a-zA-Z0-9_-]/g,
          "",
        )}`;

        const { svg } = await mermaid.render(id, diagram);

        if (cancelled || !containerRef.current) return;

        containerRef.current.innerHTML = svg;

        const svgElement = containerRef.current.querySelector("svg");

        if (svgElement) {
          svgElement.style.width = "100%";
          svgElement.style.height = "auto";
          svgElement.style.maxWidth = "100%";
          svgElement.setAttribute("preserveAspectRatio", "xMidYMid meet");
        }
      } catch (error) {
        console.error("Failed to render Melo architecture:", error);

        if (!cancelled && containerRef.current) {
          containerRef.current.textContent =
            "Architecture diagram could not be rendered.";
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
      className={`w-full overflow-x-auto rounded-2xl border border-zinc-800 bg-[#09090b] p-3 sm:p-6 ${className}`}
    >
      <div ref={containerRef} className="mx-auto w-full [&_svg]:mx-auto" />
    </div>
  );
}
