import type { Resume } from "../types/resume";

const photoUrl = new URL("../assets/images/profile.jpg", import.meta.url).href;

export const resume_spanish: Resume = {
  header: {
    name: "VASILI SHOLUKH",
    title: "Desarrollador Frontend Senior",
    photo: photoUrl,
    contacts: [
      { type: "phone", label: "+34 620 590507", href: "tel:+34620590507" },
      { type: "email", label: "grunvald@gmail.com", href: "mailto:grunvald@gmail.com" },
    ],
  },
  summary:
    "Desarrollador Frontend Senior con más de 11 años de experiencia en productos web complejos: healthcare AI, rastreo GPS, fintech y sistemas gubernamentales con alto volumen de datos. Actualmente trabajo en BHG Copilot, una plataforma para médicos dentro del modelo estadounidense Value-Based Care: transcripción de consultas con IA, generación de documentación clínica y workflows HEDIS para Medicare Advantage. Me especializo en aplicaciones Vue/TypeScript de alto rendimiento, arquitectura de monorepos frontend, integración de servicios LLM y bibliotecas UI reutilizables. Cumplo funciones de tech lead: coordino un subequipo de hasta 3 desarrolladores, realizo code review, descompongo requisitos con el negocio y llevo funcionalidades a producción.",
  skills:
    "JavaScript, TypeScript, HTML5, CSS3, SQL, Vue.js, React, jQuery, Node.js, Express.js, PostgreSQL, MongoDB, Solidity, Web3.js, Git, Webpack, Docker, CI/CD, Vuetify, Material-UI, Bootstrap, Jest, Grafana, WordPress, MODX, RESTful API, GraphQL, WebSocket, SVG, Diseño responsive, Compatibilidad cross-browser, Optimización de rendimiento, SEO, Agile, Scrum, gulp, vuex, mobx, quasar, leaflet, elements-ui, vite",
  experiences: [
    {
      company: "SXOPE (Better Health Group)",
      period: "Octubre 2024 - Presente (1 año 7 meses)",
      role: "Desarrollador Frontend Senior",
      description:
        "Descripción de la empresa: SXOPE es el núcleo tecnológico del holding estadounidense de healthcare Better Health Group. Desarrolla una plataforma B2B de Value-Based Care para clínicas y socios: agregación de datos médicos, detección de Care Gaps, asistencia con IA para decisiones clínicas y automatización de la documentación médica.",
      projects: [
        {
          name: "BHG Copilot / platform ownership",
          sections: [
            {
              title: "Tareas y Tecnologías",
              items: [
                "Objetivo: Desarrollo de BHG Copilot, una plataforma para médicos en el modelo Medicare Advantage: workflows clínicos, Care Gaps, HEDIS, integraciones con EMR y servicios internos de datos médicos.",
                "Tecnologías: Vue 3, TypeScript, Vite, pnpm/Turborepo monorepo, Vuex, vue-router, Pusher / Laravel Echo, Dexie, OIDC.",
              ],
            },
            {
              title: "Rol y Responsabilidades",
              items: [
                "Cumplo funciones de tech lead: coordino un subequipo de hasta 3 desarrolladores, realizo code review, descompongo requisitos con el negocio, distribuyo tareas y presento resultados a stakeholders.",
                "Lidero la adopción de coding agents en el workflow de ingeniería: preparo documentación agent-ready, skills, subagents y runbooks para el monorepo, y formo al equipo en prácticas efectivas y seguras con agentes de IA.",
                "Lidero el área HEDIS end-to-end: desde la aclaración de requisitos de negocio y búsqueda de fuentes de datos hasta la entrega en producción.",
                "Optimizo el rendimiento y la arquitectura del monorepo frontend, incluyendo la división estructural en feature chunks y la gestión de dependencias de paquetes internos.",
              ],
            },
            {
              title: "Resultados y Logros",
              items: [
                "Reduje el bundle de 18 MB a 13 MB (-28%), mejoré First Contentful Paint de 4 s a 2 s (-50%) y Time to Interaction de 9 s a 6 s (-33%).",
                "Inicié y completé la migración de 9 paquetes internos a peerDependencies, eliminando conflictos de versiones, instancias duplicadas de Vue y peso innecesario en las aplicaciones consumidoras.",
                "Lidero el área HEDIS del producto desde los requisitos de negocio hasta producción con un equipo de hasta 3 ingenieros.",
              ],
            },
          ],
        },
        {
          name: "Documentación clínica con IA",
          description:
            "Proyecto: Funcionalidad de IA de Copilot para automatizar documentación clínica: Voice Note / AI Scribe y Progress Note Generator.",
          sections: [
            {
              title: "Tareas y Tecnologías",
              items: [
                "Objetivo: Reducir la carga documental de los médicos mediante transcripción de consultas en tiempo real, generación de sugerencias clínicas y preparación de Progress Notes.",
                "Tecnologías: Vue 3, TypeScript, WebRTC / MediaRecorder, WebSocket, ONNX Runtime Web, Gemini API, ElevenLabs API, Chrome Extension messaging, integración LLM, pdfmake.",
              ],
            },
            {
              title: "Rol y Responsabilidades",
              items: [
                "Desarrollé Voice Note / AI Scribe: procesamiento del flujo de audio desde una Chrome extension, integración con proveedores AI/STT y generación de sugerencias clínicas basadas en el historial del paciente.",
                "Realicé technical discovery del pipeline STT: ONNX Runtime Web on-device inference -> Gemini streaming -> solución de producción en ElevenLabs, teniendo en cuenta las restricciones del entorno clínico real.",
                "Desarrollé Progress Note Generator: agregación de datos del paciente, prompt composition, obtención de AI JSON estructurado y generación de PDF textual mediante pdfmake.",
              ],
            },
            {
              title: "Resultados y Logros",
              items: [
                "Llevé a producción varias funcionalidades de IA para documentación clínica y las integré en el workflow clínico de Copilot.",
                "Implementé salida PDF textual para Progress Note: la búsqueda y copia funcionan de forma nativa, y el documento se puede editar, imprimir, enviar por email y guardar en la historia clínica del paciente.",
              ],
            },
          ],
        },
        {
          name: "@sxope/text-editor - biblioteca rich-text para notas clínicas",
          description:
            "Proyecto: Biblioteca interna Vue 3 / TipTap para notas clínicas rich-text, utilizada por varios productos de SXOPE.",
          sections: [
            {
              title: "Tareas y Tecnologías",
              items: [
                "Objetivo: Editor unificado con integración de IA, soporte del formato JSON histórico de la empresa y extensibilidad para equipos de producto.",
                "Tecnologías: Vue 3, TypeScript, TipTap, ProseMirror, Markdown, Storybook.",
              ],
            },
            {
              title: "Rol y Responsabilidades",
              items: [
                "Desarrollé el paquete de forma independiente: arquitectura, API pública, documentación, releases y soporte de compatibilidad hacia atrás.",
                "Implementé conversión entre Markdown, TipTap JSON y el formato JSON histórico de la empresa, arquitectura extensible para bloques personalizados y herramientas de IA del editor.",
                "Diseñé un patrón WS-over-REST para streams de IA en una aplicación orientada a REST; la solución fue reutilizada en varias funcionalidades de IA de Copilot.",
              ],
            },
            {
              title: "Resultados y Logros",
              items: [
                "El paquete fue adoptado como estándar unificado de rich-text en varios productos de SXOPE.",
                "Se establecieron una API pública estable, versionado y deprecation policy para el uso seguro de la biblioteca por equipos de producto.",
              ],
            },
          ],
        },
      ],
    },
    {
      company: "FTrack",
      period: "Diciembre 2020 - Septiembre 2024 (3 años 10 meses)",
      role: "Desarrollador Frontend Senior",
      description:
        "Descripción de la empresa: FTrack es un proveedor de soluciones de rastreo GPS y gestión de flotas para ~1000 empresas en Estonia, Letonia, Suecia y Finlandia.",
      projects: [
        {
          name: "Rastreo GPS y gestión de flotas",
          sections: [
            {
              title: "Tareas y Tecnologías",
              items: [
                "Objetivo: Desarrollo de una aplicación web para rastreo GPS, gestión de flotas, logística y reportes para clientes.",
                "Tecnologías: Vue 2/3, Quasar, TypeScript, Node.js, Express.js, GraphQL, Docker, Jest, Leaflet, Capacitor.",
              ],
            },
            {
              title: "Rol y Responsabilidades",
              items: [
                "Desarrollé la aplicación cliente principal: mapa, rastreo GPS en tiempo real, gestión de flotas, reportes y escenarios multiplataforma.",
                "Lideré la migración del frontend de Vue 2 a Vue 3, reduciendo deuda técnica y mejorando la mantenibilidad del producto.",
                "Diseñé un microservicio de generación de reportes PDF/XLS en Node.js + TypeScript y configuré procesos CI/CD.",
              ],
            },
            {
              title: "Resultados y Logros",
              items: [
                "Optimicé el procesamiento de datos geoespaciales, reduciendo el volumen de información transmitida en un 70%.",
                "Reduje el tiempo de generación de reportes en un 30% y eliminé bloqueos de UI durante la preparación de documentos PDF/XLS.",
                "Implementé una solución multiplataforma para web, Android e iOS mediante Capacitor.",
              ],
            },
          ],
        },
      ],
    },
    {
      company: "VironIT",
      period: "Abril 2019 - Diciembre 2020 (1 año 10 meses)",
      role: "Desarrollador Frontend Senior",
      description:
        "Descripción de la empresa: VironIT es una empresa internacional de desarrollo de software con proyectos en fintech, healthcare, e-commerce y enterprise.",
      projects: [
        {
          name: "Productos web para clientes",
          sections: [
            {
              title: "Tareas y Tecnologías",
              items: [
                "Objetivo: Desarrollo de productos web para clientes en fintech, analítica enterprise y servicios al cliente.",
                "Tecnologías: Vue.js, React, TypeScript, Node.js, Express.js, MongoDB, Web3.js, WebSocket, Solidity, Grafana, Vuetify.",
              ],
            },
            {
              title: "Rol y Responsabilidades",
              items: [
                "Desarrollé frontend y backend para un exchange descentralizado de criptomonedas: flujos de usuario, actualizaciones por WebSocket, integración con smart contracts y Metamask.",
                "Trabajé en una aplicación data-heavy para analistas dentro del Registro Federal Unificado de la Población: UI compleja, drag-and-drop y visualización de grandes volúmenes de datos.",
                "Lideré el área frontend en un proyecto cliente para una empresa de servicios públicos: equipo de 3 desarrolladores frontend, distribución de tareas, code review y delivery.",
              ],
            },
            {
              title: "Resultados y Logros",
              items: [
                "Implementé un flujo seguro de transacciones de criptomonedas mediante smart contracts en Solidity y Metamask.",
                "Participé en la migración de una aplicación enterprise de Vue.js a React, mejorando la flexibilidad de la arquitectura y la velocidad de desarrollo.",
                "Reduje el Time to Interact del sitio corporativo de más de 4 segundos a 1,2 segundos mediante optimización del critical rendering path.",
              ],
            },
          ],
        },
      ],
    },
    {
      company: "Soft4Brokers Ltd",
      period: "Noviembre 2017 - Marzo 2019 (1 año 5 meses)",
      role: "Desarrollador Frontend",
      description:
        "Descripción de la empresa: Soft4Brokers Ltd es una empresa fintech que desarrolla productos para forex y trading financiero.",
      projects: [
        {
          name: "Portal de información y cuenta personal de trader",
          description:
            "Proyecto: Desarrollo de un portal de información, cuenta personal y widgets interactivos para una plataforma forex.",
          sections: [
            {
              title: "Tareas y Tecnologías",
              items: [
                "Objetivo: Proporcionar a los traders acceso a información de mercado, herramientas de inversión, perfiles y estadísticas de trading.",
                "Tecnologías: jQuery, Razor, Handlebars, SVG, Vue.js, ASP.NET, SQL Server.",
              ],
            },
            {
              title: "Rol y Responsabilidades",
              items: [
                "Desarrollé el portal y la cuenta personal de trader: componentes interactivos, perfiles, estadísticas de trading y visualización de datos.",
                "Creé widgets SVG para sitios de terceros: cotizaciones, rentabilidad e indicadores de trading en tiempo real.",
                "Optimicé el frontend del portal, mejorando la velocidad de carga y la capacidad de respuesta de la interfaz.",
              ],
            },
            {
              title: "Resultados y Logros",
              items: [
                "Implementé widgets SVG interactivos, ampliando las capacidades de integración externa de la plataforma forex.",
                "Desarrollé un servicio de gestión de perfiles de traders con visualización de estadísticas de trading.",
                "Mejoré el rendimiento y la mantenibilidad del código frontend del portal de información.",
              ],
            },
          ],
        },
      ],
    },
    {
      company: "Freelance",
      period: "Abril 2015 - Noviembre 2017 (2 años 7 meses)",
      role: "Desarrollador Frontend",
      description:
        "Descripción: Desarrollo web para pequeñas y medianas empresas: sitios web, cuentas personales, paneles administrativos y servicios de reserva.",
      projects: [
        {
          name: "Aplicaciones web y paneles administrativos",
          sections: [
            {
              title: "Tareas y Tecnologías",
              items: [
                "Objetivo: Desarrollo de interfaces cliente, integraciones CMS y herramientas administrativas para negocios locales.",
                "Tecnologías: HTML, CSS, JavaScript, jQuery, MODX, SVG, PostgreSQL.",
              ],
            },
            {
              title: "Rol y Responsabilidades",
              items: [
                "Desarrollé sitios web, cuentas personales y paneles administrativos con maquetación responsive e integración CMS.",
                "Implementé un mapa SVG interactivo de un centro comercial, con búsqueda y navegación por objetos.",
                "Creé un sistema de reserva de canchas de tenis con interfaz cliente, panel administrativo y PostgreSQL.",
              ],
            },
            {
              title: "Resultados y Logros",
              items: [
                "Construí experiencia full-stack básica: frontend, CMS, PostgreSQL, paneles administrativos y escenarios de usuario.",
                "Implementé funcionalidad para dos audiencias: clientes de servicios y propietarios de negocios.",
              ],
            },
          ],
        },
      ],
    },
  ],
  languages: [
    { name: "Ruso", level: "nativo" },
    { name: "Bielorruso", level: "B2" },
    { name: "Ucraniano", level: "B1" },
    { name: "Inglés", level: "B1" },
  ],
};