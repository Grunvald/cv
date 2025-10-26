const photoUrl = new URL("../assets/images/profile.jpg", import.meta.url).href;

export const resume = {
  header: {
    name: "VASILI SHOLUKH",
    title: "Senior Frontend Developer",
    photo: photoUrl,
    contacts: [
      { type: "phone", label: "+34 620 590507" },
      { type: "email", label: "grunvald@gmail.com" },
    ],
  },
  summary:
    "Senior Frontend Developer with over 9 years of experience in developing innovative web applications, including full-stack and DevOps expertise. Successfully contributed to diverse projects: from GPS tracking systems with over 9,000 active users to decentralized cryptocurrency exchanges and government information systems. Specializes in creating high-performance solutions using modern frontend and backend technologies. Experienced in performance optimization, UX design of complex systems, and cross-platform application development. Possesses leadership skills, successfully led development teams and optimized development processes. Capable of working effectively both in a team and independently leading large-scale projects.",
  skills:
    "JavaScript, TypeScript, HTML5, CSS3, SQL, Vue.js, React, jQuery, Node.js, Express.js, PostgreSQL, MongoDB, Solidity, Web3.js, Git, Webpack, Docker, CI/CD, Vuetify, Material-UI, Bootstrap, Jest, Grafana, WordPress, MODX, RESTful API, GraphQL, WebSocket, SVG, Responsive Design, Cross-browser Compatibility, Performance Optimization, SEO, Agile, Scrum, gulp, vuex, mobx, quasar, leaflet, elements-ui, vite",
  experiences: [
    {
      company: "FTrack",
      period: "December 2020 - Present (3 years 9 months)",
      role: "Senior Frontend Developer",
      description:
        "Company Description: FTrack is a provider of GPS tracking and fleet management solutions, serving ~1000 business in Estonia, Latvia, Sweden and Finland. The company specializes in innovative software for real-time vehicle tracking, route optimization, and logistics management.",
      projects: [
        {
          name: "Main web application for fleet management",
          sections: [
            {
              title: "Tasks and Technologies",
              items: [
                "Goal: Develop and maintain a high-performance web application for GPS tracking and fleet management.",
                "Technologies: Vue.js (Vue 2 & 3), Quasar, Node.js, Express.js, GraphQL, Docker, Jest, Leaflet, i18n.",
              ],
            },
            {
              title: "Role and Responsibilities",
              items: [
                "Full-cycle development of the client-side application, including architecture design, implementation, and optimization.",
                "Leading the migration from Vue 2 to Vue 3.",
                "Implementing unit testing and CI/CD processes.",
                "Developing cross-platform solutions using Capacitor.",
              ],
            },
            {
              title: "Results and Achievements",
              items: [
                "Successfully migrated the application from Vue 2 to Vue 3, improving performance and reducing technical debt.",
                "Optimized geospatial data processing, reducing the volume of transmitted information by 70%.",
                "Implemented a cross-platform solution for web, Android, and iOS, expanding application accessibility.",
                "Set up CI/CD on GitLab Actions, automating testing and deployment processes.",
              ],
            },
          ],
        },
        {
          name: "Report Generation Microservice",
          sections: [
            {
              title: "Tasks and Technologies",
              items: [
                "Goal: Create a microservice for automated generation of PDF and XLS reports.",
                "Technologies: Node.js, TypeScript, Express.js.",
              ],
            },
            {
              title: "Role and Responsibilities",
              items: [
                "Designing and implementing a microservice architecture.",
                "Developing automated report generation functionality.",
              ],
            },
            {
              title: "Results and Achievements",
              items: [
                "Reduced report generation time by 30%.",
                "Eliminated UI \"freezes\", significantly improving user experience.",
              ],
            },
          ],
        },
        {
          name: "Interactive Cargo Tracking Service",
          sections: [
            {
              title: "Tasks and Technologies",
              items: [
                "Goal: Develop a real-time cargo tracking service for logistics operations.",
                "Technologies: Vue.js, Leaflet, GraphQL.",
              ],
            },
            {
              title: "Role and Responsibilities",
              items: [
                "Designing and implementing a real-time tracking interface.",
                "Integrating with GPS tracking systems.",
              ],
            },
            {
              title: "Results and Achievements",
              items: [
                "Created a user-friendly interface for real-time cargo tracking.",
                "Increased transparency of logistics operations for clients.",
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
        "Company Description: VironIT is an international software development company with offices in Belarus and the USA. The company delivers custom software solutions for various industries, including fintech, healthcare, and e-commerce, serving clients across Europe and North America.",
      projects: [
        {
          name: "Decentralized Cryptocurrency Exchange",
          sections: [
            {
              title: "Tasks and Technologies",
              items: [
                "Goal: Creating a platform for cryptocurrency exchange through smart contracts and the ability to buy/sell cryptocurrency for real money.",
                "Technologies: Vue.js, Node.js, Express.js, MongoDB, Web3.js, WebSocket, Solidity.",
              ],
            },
            {
              title: "Role and Responsibilities",
              items: [
                "Full project development from scratch, including architecture, frontend, and backend.",
                "Writing smart contracts in Solidity for secure cryptocurrency exchange.",
                "Setting up integration with Metamask wallet for user transactions.",
              ],
            },
            {
              title: "Results and Achievements",
              items: [
                "Successfully developed and launched an exchange supporting cryptocurrencies and fiat funds, ensuring transaction security through smart contracts.",
                "Provided interaction with Metamask, allowing users to securely and conveniently work with cryptocurrencies.",
              ],
            },
          ],
        },
        {
          name: "EPH (Unified Federal Register of the Population of Russia)",
          description:
            "Project: Development and support of an auxiliary service for analysts within the Unified Federal Register of the Population of Russia (EPH).",
          sections: [
            {
              title: "Tasks and Technologies",
              items: [
                "Goal: Creating a single-page application (SPA) for analysts with the ability to create complex reports and visualize large volumes of data.",
                "Technologies: Vue.js, React, TypeScript, Grafana.",
              ],
            },
            {
              title: "Role and Responsibilities",
              items: [
                "Development of a complex user interface with a large number of interactive elements and drag-and-drop functionality.",
                "Working with large volumes of data, including their efficient processing and visualization.",
                "Ensuring high performance and responsiveness of the UI when working with large datasets.",
                "Conducting successful project migration from Vue.js to React.",
              ],
            },
            {
              title: "Results and Achievements",
              items: [
                "Implemented a complex UI with multiple interactive components, significantly improving application usability.",
                "Ensured stable application performance when processing large volumes of data.",
                "Implemented graphical data visualization using Grafana, improving analytical capabilities and service usability.",
                "Successfully migrated the project from Vue.js to React, improving architecture flexibility and accelerating the development process.",
              ],
            },
          ],
        },
        {
          name: "Client Application for a Utility Company (Lanit)",
          description:
            "Project: Development of a client application for the Italian utility company Lanit, providing electricity, internet, and mobile communication services.",
          sections: [
            {
              title: "Tasks and Technologies",
              items: [
                "Goal: Creating an application allowing company clients to view current promotions, a list of provided services with prices, and pay for services on issued bills.",
                "Technologies: Vue.js, Vuetify.",
              ],
            },
            {
              title: "Role and Responsibilities",
              items: [
                "Leading frontend development as a team lead for a team of three frontend developers.",
                "Organizing and distributing tasks within the team, controlling code quality and deadline compliance.",
                "Developing and implementing interfaces with UX considerations, ensuring simplicity and ease of use.",
              ],
            },
            {
              title: "Results and Achievements",
              items: [
                "Successfully implemented a client application, providing users with convenient access to service information and the ability to pay bills online.",
                "Effectively led the team, allowing the project to be completed on time and with high quality.",
                "Optimized interface and application performance, improving overall user experience.",
              ],
            },
          ],
        },
        {
          name: "Corporate Website Optimization",
          description:
            "Project: Optimization of the company's corporate website to improve Time to Interact and SEO.",
          sections: [
            {
              title: "Tasks and Technologies",
              items: [
                "Goal: Reducing Time to Interact on the main and landing pages from over 4 seconds to less than 2 seconds, as well as improving search engine optimization (SEO).",
                "Technologies: HTML, CSS, JavaScript, WordPress, Critical Path CSS, lazy loading.",
              ],
            },
            {
              title: "Role and Responsibilities",
              items: [
                "Complete refactoring of HTML and CSS to improve structure and reduce page weight.",
                "Application of Critical Path CSS to accelerate critical content rendering and improve PageSpeed metrics.",
                "Optimization of content loading for priority elements and refactoring of JavaScript to reduce rendering delays.",
                "Conducting SEO optimization, including improving header structure, meta tags, image optimization, and implementing data schema.",
              ],
            },
            {
              title: "Results and Achievements",
              items: [
                "Reduced Time to Interact from over 4 seconds to 1.2 seconds.",
                "Improved website SEO optimization, leading to better ranking in search engines and increased organic traffic.",
                "Ensured stable and fast website operation even under high loads, improving performance and usability.",
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
        "Company Description: Soft4Brokers Ltd is a fintech company specializing in developing software solutions for the forex and financial trading industry. Their products serve both individual traders and large financial institutions across the global market.",
      projects: [
        {
          name: "Information Portal and Personal Account",
          description:
            "Project: Development and optimization of an information portal and personal account for a forex exchange.",
          sections: [
            {
              title: "Tasks and Technologies",
              items: [
                "Goal: Providing traders and investors with up-to-date information, educational materials, and investment tools while enabling account management.",
                "Technologies: jQuery, Razor, Handlebars, SVG, Vue.js, ASP.NET, SQL Server.",
              ],
            },
            {
              title: "Role and Responsibilities",
              items: [
                "Working in a frontend development team, implementing interactive components and optimizing performance.",
                "Developing an interactive SVG-based widget for third-party sites, enabling real-time tracking of quotes and profitability.",
                "Optimizing portal layout to improve performance and usability.",
                "Creating a trader profile management service with trade statistics visualization.",
              ],
            },
            {
              title: "Results and Achievements",
              items: [
                "Implemented interactive SVG widgets, increasing user engagement and website traffic.",
                "Optimized the information portal layout, improving page load speed and overall performance.",
                "Developed an information portal for forex trading clients using Razor, jQuery, and ResX.",
                "Created a trader profile management service with trade statistics visualization using Vue.js and i18n.",
              ],
            },
          ],
        },
      ],
    },
    {
      company: "Freelance",
      period: "April 2015 - November 2017 (2 years 7 months)",
      role: "Front End Developer",
      description:
        "Project: Development and optimization of an information portal and personal account for a shopping center.",
      projects: [
        {
          name: "Shopping Center Website",
          sections: [
            {
              title: "Tasks and Technologies",
              items: [
                "Goal: Creating a user-friendly web application for shopping center clients and a functional management panel for business owners.",
                "Technologies: HTML, CSS, jQuery, MODX, SVG.",
              ],
            },
            {
              title: "Role and Responsibilities",
              items: [
                "Developed the entire frontend with responsive interfaces for mobile, tablet, and desktop.",
                "Implemented a client-facing interface with intuitive search and an interactive SVG-based shopping center map.",
                "Implemented business owner functionality for renting premises and managing promotions.",
              ],
            },
            {
              title: "Results and Achievements",
              items: [
                "Delivered functionality for both target audiences (clients and business owners).",
                "Developed an interactive SVG-based map, improving navigation and engagement.",
                "Created a responsive design, ensuring excellent user experience across devices.",
                "Implemented a content management system simplifying updates about stores and promotions.",
              ],
            },
          ],
        },
        {
          name: "Tennis Court Booking System",
          sections: [
            {
              title: "Tasks and Technologies",
              items: [
                "Goal: Creating a convenient system allowing court owners to manage schedules and clients to book time slots.",
                "Technologies: HTML, CSS, JavaScript, MODX, PostgreSQL.",
              ],
            },
            {
              title: "Role and Responsibilities",
              items: [
                "Performing full-cycle development as a full-stack developer.",
                "Creating an intuitive interface for clients with search and filtering for courts by services and prices.",
                "Developing a control panel for court owners with real-time booking management.",
                "Integrating PostgreSQL for storing information about courts, bookings, and users.",
                "Ensuring system security and performance.",
              ],
            },
            {
              title: "Results and Achievements",
              items: [
                "Developed a platform connecting court owners and clients in a single system.",
                "Implemented flexible search and filtering, enabling clients to quickly find suitable courts.",
                "Created an effective schedule management system, optimizing the booking process.",
                "Ensured high system performance capable of handling multiple requests simultaneously.",
                "Implemented security measures to protect user data.",
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
