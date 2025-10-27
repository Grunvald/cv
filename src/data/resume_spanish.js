const photoUrl = new URL("../assets/images/profile.jpg", import.meta.url).href;

export const resume_spanish = {
  header: {
    name: "VASILI SHOLUKH",
    title: "Desarrollador Frontend Senior",
    photo: photoUrl,
    contacts: [
      { type: "phone", label: "+34 620 590507" },
      { type: "email", label: "grunvald@gmail.com" },
    ],
  },
  summary:
    "Desarrollador Frontend Senior con más de 9 años de experiencia en el desarrollo de aplicaciones web innovadoras, incluyendo experiencia full-stack y DevOps. Ha contribuido exitosamente a diversos proyectos: desde sistemas de rastreo GPS con más de 9,000 usuarios activos hasta exchanges descentralizados de criptomonedas y sistemas de información gubernamentales. Se especializa en crear soluciones de alto rendimiento utilizando tecnologías frontend y backend modernas. Experiencia en optimización de rendimiento, diseño UX de sistemas complejos y desarrollo de aplicaciones multiplataforma. Posee habilidades de liderazgo, ha dirigido con éxito equipos de desarrollo y optimizado procesos de desarrollo. Capaz de trabajar eficazmente tanto en equipo como liderando independientemente proyectos de gran escala.",
  skills:
    "JavaScript, TypeScript, HTML5, CSS3, SQL, Vue.js, React, jQuery, Node.js, Express.js, PostgreSQL, MongoDB, Solidity, Web3.js, Git, Webpack, Docker, CI/CD, Vuetify, Material-UI, Bootstrap, Jest, Grafana, WordPress, MODX, RESTful API, GraphQL, WebSocket, SVG, Diseño Responsive, Compatibilidad Cross-browser, Optimización de Rendimiento, SEO, Agile, Scrum, gulp, vuex, mobx, quasar, leaflet, elements-ui, vite",
  experiences: [
    {
      company: "FTrack",
      period: "Diciembre 2020 - Presente (3 años 9 meses)",
      role: "Desarrollador Frontend Senior",
      description:
        "Descripción de la empresa: FTrack es un proveedor de soluciones de rastreo GPS y gestión de flotas, sirviendo a ~1000 empresas en Estonia, Letonia, Suecia y Finlandia. La empresa se especializa en software innovador para rastreo de vehículos en tiempo real, optimización de rutas y gestión logística.",
      projects: [
        {
          name: "Aplicación web principal para gestión de flotas",
          sections: [
            {
              title: "Tareas y Tecnologías",
              items: [
                "Objetivo: Desarrollar y mantener una aplicación web de alto rendimiento para rastreo GPS y gestión de flotas.",
                "Tecnologías: Vue.js (Vue 2 & 3), Quasar, Node.js, Express.js, GraphQL, Docker, Jest, Leaflet, i18n.",
              ],
            },
            {
              title: "Rol y Responsabilidades",
              items: [
                "Desarrollo de ciclo completo de la aplicación del lado del cliente, incluyendo diseño de arquitectura, implementación y optimización.",
                "Liderando la migración de Vue 2 a Vue 3.",
                "Implementación de pruebas unitarias y procesos CI/CD.",
                "Desarrollo de soluciones multiplataforma utilizando Capacitor.",
              ],
            },
            {
              title: "Resultados y Logros",
              items: [
                "Migración exitosa de la aplicación de Vue 2 a Vue 3, mejorando el rendimiento y reduciendo la deuda técnica.",
                "Optimización del procesamiento de datos geoespaciales, reduciendo el volumen de información transmitida en un 70%.",
                "Implementación de una solución multiplataforma para web, Android e iOS, expandiendo la accesibilidad de la aplicación.",
                "Configuración de CI/CD en GitLab Actions, automatizando los procesos de pruebas y despliegue.",
              ],
            },
          ],
        },
        {
          name: "Microservicio de Generación de Informes",
          sections: [
            {
              title: "Tareas y Tecnologías",
              items: [
                "Objetivo: Crear un microservicio para la generación automatizada de informes en PDF y XLS.",
                "Tecnologías: Node.js, TypeScript, Express.js.",
              ],
            },
            {
              title: "Rol y Responsabilidades",
              items: [
                "Diseño e implementación de una arquitectura de microservicios.",
                "Desarrollo de funcionalidad de generación automatizada de informes.",
              ],
            },
            {
              title: "Resultados y Logros",
              items: [
                "Reducción del tiempo de generación de informes en un 30%.",
                "Eliminación de \"congelamientos\" de la UI, mejorando significativamente la experiencia del usuario.",
              ],
            },
          ],
        },
        {
          name: "Servicio Interactivo de Rastreo de Carga",
          sections: [
            {
              title: "Tareas y Tecnologías",
              items: [
                "Objetivo: Desarrollar un servicio de rastreo de carga en tiempo real para operaciones logísticas.",
                "Tecnologías: Vue.js, Leaflet, GraphQL.",
              ],
            },
            {
              title: "Rol y Responsabilidades",
              items: [
                "Diseño e implementación de una interfaz de rastreo en tiempo real.",
                "Integración con sistemas de rastreo GPS.",
              ],
            },
            {
              title: "Resultados y Logros",
              items: [
                "Creación de una interfaz amigable para el rastreo de carga en tiempo real.",
                "Aumento de la transparencia de las operaciones logísticas para los clientes.",
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
        "Descripción de la empresa: VironIT es una empresa internacional de desarrollo de software con oficinas en Bielorrusia y EE.UU. La empresa ofrece soluciones de software personalizadas para diversas industrias, incluyendo fintech, salud y comercio electrónico, sirviendo a clientes en Europa y América del Norte.",
      projects: [
        {
          name: "Exchange Descentralizado de Criptomonedas",
          sections: [
            {
              title: "Tareas y Tecnologías",
              items: [
                "Objetivo: Crear una plataforma para el intercambio de criptomonedas a través de contratos inteligentes y la capacidad de comprar/vender criptomonedas por dinero real.",
                "Tecnologías: Vue.js, Node.js, Express.js, MongoDB, Web3.js, WebSocket, Solidity.",
              ],
            },
            {
              title: "Rol y Responsabilidades",
              items: [
                "Desarrollo completo del proyecto desde cero, incluyendo arquitectura, frontend y backend.",
                "Escritura de contratos inteligentes en Solidity para el intercambio seguro de criptomonedas.",
                "Configuración de la integración con la billetera Metamask para transacciones de usuarios.",
              ],
            },
            {
              title: "Resultados y Logros",
              items: [
                "Desarrollo y lanzamiento exitoso de un exchange que soporta criptomonedas y fondos fiat, asegurando la seguridad de las transacciones a través de contratos inteligentes.",
                "Proporcionada la interacción con Metamask, permitiendo a los usuarios trabajar de forma segura y conveniente con criptomonedas.",
              ],
            },
          ],
        },
        {
          name: "EPH (Registro Federal Unificado de la Población de Rusia)",
          description:
            "Proyecto: Desarrollo y soporte de un servicio auxiliar para analistas dentro del Registro Federal Unificado de la Población de Rusia (EPH).",
          sections: [
            {
              title: "Tareas y Tecnologías",
              items: [
                "Objetivo: Crear una aplicación de página única (SPA) para analistas con la capacidad de crear informes complejos y visualizar grandes volúmenes de datos.",
                "Tecnologías: Vue.js, React, TypeScript, Grafana.",
              ],
            },
            {
              title: "Rol y Responsabilidades",
              items: [
                "Desarrollo de una interfaz de usuario compleja con gran cantidad de elementos interactivos y funcionalidad de arrastrar y soltar.",
                "Trabajo con grandes volúmenes de datos, incluyendo su procesamiento eficiente y visualización.",
                "Aseguramiento de alto rendimiento y capacidad de respuesta de la UI al trabajar con grandes conjuntos de datos.",
                "Conducción de una migración exitosa del proyecto de Vue.js a React.",
              ],
            },
            {
              title: "Resultados y Logros",
              items: [
                "Implementación de una UI compleja con múltiples componentes interactivos, mejorando significativamente la usabilidad de la aplicación.",
                "Aseguramiento del rendimiento estable de la aplicación al procesar grandes volúmenes de datos.",
                "Implementación de visualización gráfica de datos usando Grafana, mejorando las capacidades analíticas y la usabilidad del servicio.",
                "Migración exitosa del proyecto de Vue.js a React, mejorando la flexibilidad de la arquitectura y acelerando el proceso de desarrollo.",
              ],
            },
          ],
        },
        {
          name: "Aplicación Cliente para una Empresa de Servicios Públicos (Lanit)",
          description:
            "Proyecto: Desarrollo de una aplicación cliente para la empresa italiana de servicios públicos Lanit, que proporciona electricidad, internet y servicios de comunicación móvil.",
          sections: [
            {
              title: "Tareas y Tecnologías",
              items: [
                "Objetivo: Crear una aplicación que permita a los clientes de la empresa ver promociones actuales, una lista de servicios proporcionados con precios y pagar servicios en facturas emitidas.",
                "Tecnologías: Vue.js, Vuetify.",
              ],
            },
            {
              title: "Rol y Responsabilidades",
              items: [
                "Liderando el desarrollo frontend como team lead de un equipo de tres desarrolladores frontend.",
                "Organización y distribución de tareas dentro del equipo, control de calidad del código y cumplimiento de plazos.",
                "Desarrollo e implementación de interfaces con consideraciones UX, asegurando simplicidad y facilidad de uso.",
              ],
            },
            {
              title: "Resultados y Logros",
              items: [
                "Implementación exitosa de una aplicación cliente, proporcionando a los usuarios acceso conveniente a información de servicios y la capacidad de pagar facturas en línea.",
                "Liderazgo efectivo del equipo, permitiendo que el proyecto se completara a tiempo y con alta calidad.",
                "Optimización de la interfaz y rendimiento de la aplicación, mejorando la experiencia general del usuario.",
              ],
            },
          ],
        },
        {
          name: "Optimización del Sitio Web Corporativo",
          description:
            "Proyecto: Optimización del sitio web corporativo de la empresa para mejorar el Time to Interact y SEO.",
          sections: [
            {
              title: "Tareas y Tecnologías",
              items: [
                "Objetivo: Reducir el Time to Interact en las páginas principales y de destino de más de 4 segundos a menos de 2 segundos, así como mejorar la optimización para motores de búsqueda (SEO).",
                "Tecnologías: HTML, CSS, JavaScript, WordPress, Critical Path CSS, lazy loading.",
              ],
            },
            {
              title: "Rol y Responsabilidades",
              items: [
                "Refactorización completa de HTML y CSS para mejorar la estructura y reducir el peso de la página.",
                "Aplicación de Critical Path CSS para acelerar la renderización de contenido crítico y mejorar las métricas de PageSpeed.",
                "Optimización de la carga de contenido para elementos prioritarios y refactorización de JavaScript para reducir retrasos de renderización.",
                "Realización de optimización SEO, incluyendo mejora de estructura de encabezados, meta tags, optimización de imágenes e implementación de esquema de datos.",
              ],
            },
            {
              title: "Resultados y Logros",
              items: [
                "Reducción del Time to Interact de más de 4 segundos a 1.2 segundos.",
                "Mejora de la optimización SEO del sitio web, llevando a un mejor posicionamiento en motores de búsqueda y aumento del tráfico orgánico.",
                "Aseguramiento de operación estable y rápida del sitio web incluso bajo cargas altas, mejorando rendimiento y usabilidad.",
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
        "Descripción de la empresa: Soft4Brokers Ltd es una empresa fintech especializada en desarrollar soluciones de software para la industria de forex y trading financiero. Sus productos sirven tanto a traders individuales como a grandes instituciones financieras en el mercado global.",
      projects: [
        {
          name: "Portal de Información y Cuenta Personal",
          description:
            "Proyecto: Desarrollo y optimización de un portal de información y cuenta personal para un exchange de forex.",
          sections: [
            {
              title: "Tareas y Tecnologías",
              items: [
                "Objetivo: Proporcionar a traders e inversores información actualizada, materiales educativos y herramientas de inversión mientras se habilita la gestión de cuentas.",
                "Tecnologías: jQuery, Razor, Handlebars, SVG, Vue.js, ASP.NET, SQL Server.",
              ],
            },
            {
              title: "Rol y Responsabilidades",
              items: [
                "Trabajo en un equipo de desarrollo frontend, implementando componentes interactivos y optimizando el rendimiento.",
                "Desarrollo de un widget interactivo basado en SVG para sitios de terceros, permitiendo el rastreo en tiempo real de cotizaciones y rentabilidad.",
                "Optimización del layout del portal para mejorar el rendimiento y la usabilidad.",
                "Creación de un servicio de gestión de perfiles de traders con visualización de estadísticas de trading.",
              ],
            },
            {
              title: "Resultados y Logros",
              items: [
                "Implementación de widgets SVG interactivos, aumentando el engagement de usuarios y el tráfico del sitio web.",
                "Optimización del layout del portal de información, mejorando la velocidad de carga de páginas y el rendimiento general.",
                "Desarrollo de un portal de información para clientes de trading forex usando Razor, jQuery y ResX.",
                "Creación de un servicio de gestión de perfiles de traders con visualización de estadísticas de trading usando Vue.js e i18n.",
              ],
            },
          ],
        },
      ],
    },
    {
      company: "Freelance",
      period: "Abril 2015 - Noviembre 2017 (2 años 7 meses)",
      role: "Desarrollador Front End",
      description:
        "Proyecto: Desarrollo y optimización de un portal de información y cuenta personal para un centro comercial.",
      projects: [
        {
          name: "Sitio Web de Centro Comercial",
          sections: [
            {
              title: "Tareas y Tecnologías",
              items: [
                "Objetivo: Crear una aplicación web amigable para clientes del centro comercial y un panel de gestión funcional para propietarios de negocios.",
                "Tecnologías: HTML, CSS, jQuery, MODX, SVG.",
              ],
            },
            {
              title: "Rol y Responsabilidades",
              items: [
                "Desarrollo de todo el frontend con interfaces responsive para móvil, tablet y escritorio.",
                "Implementación de una interfaz orientada al cliente con búsqueda intuitiva y un mapa interactivo del centro comercial basado en SVG.",
                "Implementación de funcionalidad para propietarios de negocios para alquilar locales y gestionar promociones.",
              ],
            },
            {
              title: "Resultados y Logros",
              items: [
                "Entrega de funcionalidad para ambas audiencias objetivo (clientes y propietarios de negocios).",
                "Desarrollo de un mapa interactivo basado en SVG, mejorando la navegación y el engagement.",
                "Creación de un diseño responsive, asegurando una excelente experiencia de usuario en todos los dispositivos.",
                "Implementación de un sistema de gestión de contenido simplificando las actualizaciones sobre tiendas y promociones.",
              ],
            },
          ],
        },
        {
          name: "Sistema de Reserva de Canchas de Tenis",
          sections: [
            {
              title: "Tareas y Tecnologías",
              items: [
                "Objetivo: Crear un sistema conveniente que permita a los propietarios de canchas gestionar horarios y a los clientes reservar franjas horarias.",
                "Tecnologías: HTML, CSS, JavaScript, MODX, PostgreSQL.",
              ],
            },
            {
              title: "Rol y Responsabilidades",
              items: [
                "Realización de desarrollo de ciclo completo como desarrollador full-stack.",
                "Creación de una interfaz intuitiva para clientes con búsqueda y filtrado de canchas por servicios y precios.",
                "Desarrollo de un panel de control para propietarios de canchas con gestión de reservas en tiempo real.",
                "Integración de PostgreSQL para almacenar información sobre canchas, reservas y usuarios.",
                "Aseguramiento de la seguridad y rendimiento del sistema.",
              ],
            },
            {
              title: "Resultados y Logros",
              items: [
                "Desarrollo de una plataforma que conecta a propietarios de canchas y clientes en un sistema único.",
                "Implementación de búsqueda y filtrado flexible, permitiendo a los clientes encontrar rápidamente canchas adecuadas.",
                "Creación de un sistema efectivo de gestión de horarios, optimizando el proceso de reserva.",
                "Aseguramiento de alto rendimiento del sistema capaz de manejar múltiples solicitudes simultáneamente.",
                "Implementación de medidas de seguridad para proteger los datos de los usuarios.",
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
    { name: "Ucraniano", level: "B2" },
    { name: "Inglés", level: "B1" },
  ],
};