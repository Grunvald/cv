import type { Resume } from "../types/resume";

const photoUrl = new URL("../assets/images/profile.jpg", import.meta.url).href;

export const resume_english: Resume = {
  header: {
    name: "VASILI SHOLUKH",
    title: "Senior Frontend Developer",
    photo: photoUrl,
    contacts: [
      { type: "phone", label: "+34 620 590507", href: "tel:+34620590507" },
      { type: "email", label: "grunvald@gmail.com", href: "mailto:grunvald@gmail.com" },
    ],
  },
  summary:
    "Senior Frontend Developer with 11+ years of experience in complex web products: healthcare AI, GPS tracking, fintech, and government data-heavy systems. Currently working on BHG Copilot, a platform for physicians in the US Value-Based Care model: AI transcription of visits, clinical documentation generation, HEDIS/workflows for Medicare Advantage. I specialize in high-performance Vue/TypeScript applications, frontend monorepo architecture, LLM service integration, and reusable UI libraries. I act as a tech lead: coordinate a subteam of up to 3 developers, conduct code reviews, decompose requirements with the business, and deliver features to production.",
  skills:
    "JavaScript, TypeScript, HTML5, CSS3, SQL, Vue.js, React, jQuery, Node.js, Express.js, PostgreSQL, MongoDB, Solidity, Web3.js, Git, Webpack, Docker, CI/CD, Vuetify, Material-UI, Bootstrap, Jest, Grafana, WordPress, MODX, RESTful API, GraphQL, WebSocket, SVG, Responsive Design, Cross-browser Compatibility, Performance Optimization, SEO, Agile, Scrum, gulp, vuex, mobx, quasar, leaflet, elements-ui, vite",
  experiences: [
    {
      company: "SXOPE (Better Health Group)",
      period: "October 2024 - Present (1 year 7 months)",
      role: "Senior Frontend Developer",
      description:
        "Company description: SXOPE is the technology core of Better Health Group, a US healthcare holding company. It develops a B2B Value-Based Care platform for clinics and partners: medical data aggregation, Care Gap detection, AI-assisted clinical decisions, and automation of physician documentation.",
      projects: [
        {
          name: "BHG Copilot / platform ownership",
          sections: [
            {
              title: "Tasks and Technologies",
              items: [
                "Goal: Develop BHG Copilot, a platform for physicians in the Medicare Advantage model: clinical workflows, Care Gaps, HEDIS, integrations with EMR and internal medical-data services.",
                "Technologies: Vue 3, TypeScript, Vite, pnpm/Turborepo monorepo, Vuex, vue-router, Pusher / Laravel Echo, Dexie, OIDC.",
              ],
            },
            {
              title: "Role and Responsibilities",
              items: [
                "Act as a tech lead: coordinate a subteam of up to 3 developers, conduct code reviews, decompose requirements with the business, distribute tasks, and present results to stakeholders.",
                "Lead the adoption of coding agents in the engineering workflow: prepare agent-ready documentation, skills, subagents, and runbooks for the monorepo, and train the team in effective and safe AI-agent practices.",
                "Own the HEDIS area end-to-end: from clarifying business requirements and finding data sources to production delivery.",
                "Optimize performance and frontend monorepo architecture, including structural splitting into feature chunks and dependency management for internal packages.",
              ],
            },
            {
              title: "Results and Achievements",
              items: [
                "Reduced bundle size from 18 MB to 13 MB (-28%), improved First Contentful Paint from 4s to 2s (-50%), and Time to Interaction from 9s to 6s (-33%).",
                "Initiated and completed the migration of 9 internal packages to peerDependencies, eliminating version conflicts, duplicate Vue instances, and extra weight in consuming applications.",
                "Lead the HEDIS product area from business requirements to production with a team of up to 3 engineers.",
              ],
            },
          ],
        },
        {
          name: "AI clinical documentation",
          description:
            "Project: Copilot AI functionality for automating clinical documentation: Voice Note / AI Scribe and Progress Note Generator.",
          sections: [
            {
              title: "Tasks and Technologies",
              items: [
                "Goal: Reduce physicians' documentation burden through real-time visit transcription, clinical suggestion generation, and Progress Note preparation.",
                "Technologies: Vue 3, TypeScript, WebRTC / MediaRecorder, WebSocket, ONNX Runtime Web, Gemini API, ElevenLabs API, Chrome Extension messaging, LLM integration, pdfmake.",
              ],
            },
            {
              title: "Role and Responsibilities",
              items: [
                "Developed Voice Note / AI Scribe: audio stream processing from a Chrome extension, integration with AI/STT providers, and generation of clinical suggestions based on patient history.",
                "Conducted technical discovery of the STT pipeline: ONNX Runtime Web on-device inference -> Gemini streaming -> production solution on ElevenLabs, considering real clinical environment constraints.",
                "Developed Progress Note Generator: patient data aggregation, prompt composition, structured AI JSON retrieval, and text-based PDF generation via pdfmake.",
              ],
            },
            {
              title: "Results and Achievements",
              items: [
                "Delivered several AI features for clinical documentation to production and integrated them into the Copilot clinical workflow.",
                "Implemented text-based PDF output for Progress Note: search and copy work natively, and the document can be edited, printed, emailed, and saved to the patient chart.",
              ],
            },
          ],
        },
        {
          name: "@sxope/text-editor - rich-text library for clinical notes",
          description:
            "Project: Internal Vue 3 / TipTap library for rich-text clinical notes, used by several SXOPE products.",
          sections: [
            {
              title: "Tasks and Technologies",
              items: [
                "Goal: Provide a unified editor with AI integration, support for the company's historical JSON format, and extensibility for product teams.",
                "Technologies: Vue 3, TypeScript, TipTap, ProseMirror, Markdown, Storybook.",
              ],
            },
            {
              title: "Role and Responsibilities",
              items: [
                "Independently developed the package: architecture, public API, documentation, releases, and backward compatibility support.",
                "Implemented conversion between Markdown, TipTap JSON, and the company's historical JSON format, an extensible architecture for custom blocks, and AI editor tools.",
                "Designed a WS-over-REST pattern for AI streams in a REST-oriented application; the solution was reused in several Copilot AI features.",
              ],
            },
            {
              title: "Results and Achievements",
              items: [
                "The package was adopted as the unified rich-text standard across several SXOPE products.",
                "Established a stable public API, versioning, and deprecation policy for safe use of the library by product teams.",
              ],
            },
          ],
        },
      ],
    },
    {
      company: "FTrack",
      period: "December 2020 - September 2024 (3 years 10 months)",
      role: "Senior Frontend Developer",
      description:
        "Company description: FTrack is a provider of GPS tracking and fleet-management solutions for ~1000 businesses in Estonia, Latvia, Sweden, and Finland.",
      projects: [
        {
          name: "GPS tracking and fleet management",
          sections: [
            {
              title: "Tasks and Technologies",
              items: [
                "Goal: Develop a web application for GPS tracking, fleet management, logistics, and client reporting.",
                "Technologies: Vue 2/3, Quasar, TypeScript, Node.js, Express.js, GraphQL, Docker, Jest, Leaflet, Capacitor.",
              ],
            },
            {
              title: "Role and Responsibilities",
              items: [
                "Developed the main client application: map, real-time GPS tracking, fleet management, reporting, and cross-platform scenarios.",
                "Led the frontend migration from Vue 2 to Vue 3, reducing technical debt and improving product maintainability.",
                "Designed a PDF/XLS report generation microservice on Node.js + TypeScript and configured CI/CD processes.",
              ],
            },
            {
              title: "Results and Achievements",
              items: [
                "Optimized geospatial data processing, reducing the volume of transmitted information by 70%.",
                "Reduced report generation time by 30%.",
                "Eliminated UI freezes during PDF/XLS document preparation.",
                "Implemented a cross-platform solution for web, Android, and iOS via Capacitor.",
              ],
            },
          ],
        },
      ],
    },
    {
      company: "VironIT",
      period: "April 2019 - December 2020 (1 year 10 months)",
      role: "Senior Frontend Developer",
      description:
        "Company description: VironIT is an international software development company with projects in fintech, healthcare, e-commerce, and enterprise.",
      projects: [
        {
          name: "Client web products",
          sections: [
            {
              title: "Tasks and Technologies",
              items: [
                "Goal: Develop client web products for fintech, enterprise analytics, and customer services.",
                "Technologies: Vue.js, React, TypeScript, Node.js, Express.js, MongoDB, Web3.js, WebSocket, Solidity, Grafana, Vuetify.",
              ],
            },
            {
              title: "Role and Responsibilities",
              items: [
                "Developed frontend and backend for a decentralized cryptocurrency exchange: user flows, WebSocket updates, smart contract integration, and Metamask integration.",
                "Worked on a data-heavy application for analysts within the Unified Federal Register of the Population: complex UI, drag-and-drop, and visualization of large data volumes.",
                "Led the frontend area on a client project for a utility company: team of 3 frontend developers, task distribution, code review, and delivery.",
              ],
            },
            {
              title: "Results and Achievements",
              items: [
                "Implemented a secure cryptocurrency transaction flow through Solidity smart contracts and Metamask.",
                "Participated in the migration of an enterprise application from Vue.js to React, improving architecture flexibility and development speed.",
                "Reduced the Time to Interact of a corporate website from more than 4 seconds to 1.2 seconds by optimizing the critical rendering path.",
              ],
            },
          ],
        },
      ],
    },
    {
      company: "Soft4Brokers Ltd",
      period: "November 2017 - March 2019 (1 year 5 months)",
      role: "Frontend Developer",
      description:
        "Company description: Soft4Brokers Ltd is a fintech company developing products for forex and financial trading.",
      projects: [
        {
          name: "Information portal and trader account",
          description:
            "Project: Development of an information portal, personal account, and interactive widgets for a forex platform.",
          sections: [
            {
              title: "Tasks and Technologies",
              items: [
                "Goal: Provide traders with access to market information, investment tools, profiles, and trading statistics.",
                "Technologies: jQuery, Razor, Handlebars, SVG, Vue.js, ASP.NET, SQL Server.",
              ],
            },
            {
              title: "Role and Responsibilities",
              items: [
                "Developed the portal and trader account: interactive components, profiles, trading statistics, and data visualization.",
                "Created SVG widgets for third-party websites: real-time quotes, profitability, and trading metrics.",
                "Optimized the portal frontend, improving load speed and interface responsiveness.",
              ],
            },
            {
              title: "Results and Achievements",
              items: [
                "Introduced interactive SVG widgets, expanding external integration capabilities for the forex platform.",
                "Developed a trader profile management service with trading statistics visualization.",
                "Improved performance and maintainability of the information portal frontend code.",
              ],
            },
          ],
        },
      ],
    },
    {
      company: "Freelance",
      period: "April 2015 - November 2017 (2 years 7 months)",
      role: "Frontend Developer",
      description:
        "Description: Web development for small and medium-sized businesses: websites, personal accounts, admin panels, and booking services.",
      projects: [
        {
          name: "Web applications and admin panels",
          sections: [
            {
              title: "Tasks and Technologies",
              items: [
                "Goal: Develop client interfaces, CMS integrations, and administrative tools for local businesses.",
                "Technologies: HTML, CSS, JavaScript, jQuery, MODX, SVG, PostgreSQL.",
              ],
            },
            {
              title: "Role and Responsibilities",
              items: [
                "Developed websites, personal accounts, and admin panels with responsive layouts and CMS integration.",
                "Implemented an interactive SVG map of a shopping center with search and object navigation.",
                "Created a tennis court booking system with a client interface, admin panel, and PostgreSQL.",
              ],
            },
            {
              title: "Results and Achievements",
              items: [
                "Built basic full-stack experience: frontend, CMS, PostgreSQL, admin panels, and user scenarios.",
                "Implemented functionality for two audiences: service customers and business owners.",
              ],
            },
          ],
        },
      ],
    },
  ],
  languages: [
    { name: "Russian", level: "native" },
    { name: "Belarusian", level: "B2" },
    { name: "Ukrainian", level: "B2" },
    { name: "English", level: "B1" },
  ],
};
