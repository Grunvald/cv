import type { Resume } from "../../types/resume";

export const resume: Resume = {
  header: {
    name: "MAKSIM BOGDANOV",
    title: "Operations Director / Head of Foreign Trade and B2B Projects",
    contacts: [
      { type: "phone", label: "+375 29 104-40-01", href: "tel:+375291044001" },
      { type: "email", label: "maksimbogdanov1975@gmail.com", href: "mailto:maksimbogdanov1975@gmail.com" },
    ],
  },
  summary: [
    "Operations and project leader with 25+ years of experience in import trade, foreign trade, and turnkey B2B projects.",
    "Grew from warehouse logistics to Deputy Director for Operations and Director of a flagship company within the holding.",
    "Core expertise: launching trading companies and business lines, building processes, international procurement, customs, certification, P&L, and project team management.",
    "From 2014 to 2025 launched 7 trading companies with teams of 20-30 people and monthly turnover from €100k; at Interlamp, drove annual turnover growth from €1.5M to €5M.",
    "Managed imports from the EU and US at up to ~5 containers per month and €500k+ in monthly purchases; implemented customs value adjustment processes generating €50k+/month in savings.",
  ].join(" "),
  skills: [
    "Operations management: launching companies and business lines from scratch, hiring teams of 20-30 people, building finance, procurement, sales, warehouse, logistics, and certification processes.",
    "Foreign trade and international logistics: procurement from the EU and US (~5 containers/month, €500k+/month, ~€6M/year), customs clearance, customs value adjustments, certification, cargo insurance.",
    "Turnkey B2B projects: equipment selection, import, certification, installation, commissioning, and handover to the client; 10+ major projects handled in parallel per year.",
    "Team management and P&L: teams of up to 35 in-house employees, contractor teams of up to 100 people at project peak, budgeting, hiring, deadlines, margins.",
    "Exhibition activity: stand organisation, technical documentation, stand builder coordination, installation supervision, and stand acceptance.",
  ].join("\n"),
  experiences: [
    {
      company: "Interlamp",
      period: "2018 — 2025 (7 years)",
      role: "Director",
      description:
        "Minsk, Belarus. Flagship lighting company within the holding, launched with my involvement and later led by me as Director. Wholesale and retail trade in European lighting brands and delivery of large turnkey B2B interior lighting projects. Team of 35 employees, contractor teams of up to 100 people at project peak. Annual turnover grew from €1.5M to €5M over 7 years (3.3x).",
      projects: [
        {
          name: "Large turnkey B2B projects",
          sections: [
            {
              title: "Scope and tools",
              items: [
                "Supply and installation of lighting for head offices, sports facilities, and government sites: A1, Belaruskali, Dinamo Stadium, a major state museum, and others.",
              ],
            },
            {
              title: "Responsibilities",
              items: [
                "Direct client communication: requirements, budget, timeline alignment, and solution presentations to senior decision-makers.",
                "Equipment selection from European brands, import organisation, customs clearance, and certification for each project.",
                "Formation of contractor teams of up to 100 people, control of deadlines, quality, P&L, and contract work.",
              ],
            },
            {
              title: "Results and achievements",
              items: [
                "Delivered more than 10 major projects per year over 7 years; built key client relationships from first contact to repeat orders.",
                "Built a stable operating model of 35 in-house employees plus up to 100 project contractors, enabling several major projects to run simultaneously.",
              ],
            },
          ],
        },
        {
          name: "Import and category management",
          sections: [
            {
              title: "Scope and tools",
              items: [
                "Work with European lighting manufacturers and assortment development for B2B projects and retail.",
              ],
            },
            {
              title: "Responsibilities",
              items: [
                "Supplier search, negotiations, contract signing, and alignment of new product lines and delivery terms.",
                "Full import cycle and local market preparation: logistics, customs, and certification.",
              ],
            },
            {
              title: "Results and achievements",
              items: [
                "Built a portfolio of European brands that became a competitive advantage in the B2B segment.",
                "Developed long-term manufacturer relationships enabling special terms and production priority for major projects.",
              ],
            },
          ],
        },
      ],
    },
    {
      company: "Orion Holding",
      period: "2014 — 2025 (11 years)",
      role: "Launch and Development of Trading Companies",
      description:
        "Minsk, Belarus. Strategic holding-level function: launching new trading companies and business lines in specialised categories including lighting, acoustics, premium goods, mono-brands, and selected product groups.",
      projects: [
        {
          name: "Turnkey launch of holding companies",
          sections: [
            {
              title: "Responsibilities",
              items: [
                "Company registration, recruitment of key employees, and launch of operating processes: finance, procurement, sales, warehouse, logistics, certification.",
                "First year of management as Director: reaching stable revenue, stabilising the contract base, and handing over operations to an Executive Director.",
              ],
            },
            {
              title: "Results and achievements",
              items: [
                "From 2014 to 2025 launched and handed over 7 trading companies; each reached a team of 20-30 people and monthly turnover from €100k+.",
                "Created a repeatable launch scenario: registration → team → processes → first year of director-level management → handover to an Executive Director.",
                "Two of these companies, Interlamp and SotbisArt, are listed separately as standalone career stages.",
              ],
            },
          ],
        },
      ],
    },
    {
      company: "SotbisArt",
      period: "2018 — 2020 (2 years)",
      role: "Deputy Director",
      description:
        "Minsk, Belarus. Subsidiary of the same holding as Interlamp, launched with my involvement as the holding's premium segment. Import and sale of premium tableware and textiles. The role was combined with the Director position at Interlamp within the holding structure.",
      projects: [
        {
          name: "Operations management and foreign trade",
          sections: [
            {
              title: "Responsibilities",
              items: [
                "Finance accounting, operating cost control, logistics, warehouse, customs clearance, and certification of imported EU products.",
                "Organisation of advertising and marketing activities and synchronisation of processes with other holding companies.",
              ],
            },
            {
              title: "Results and achievements",
              items: [
                "Built an end-to-end operating flow for a premium product category: procurement → customs → warehouse → sales.",
                "Synchronised work with Interlamp within the holding, including shared logistics and certification processes.",
              ],
            },
          ],
        },
      ],
    },
    {
      company: "Orion",
      period: "2000 — 2018 (18 years)",
      role: "Deputy Director for Operations",
      description:
        "Minsk, Belarus. Parent company of the holding, specialising in wholesale trade of lighting and acoustic equipment: household, industrial, stage, and studio equipment for theatres, studios, concert halls, and stadiums. Direct imports from the EU and US. Career path within the company: 2000 — warehouse worker → 2002 — warehouse manager → 2007 — head of facilities → 2008 — head of supply and customs → 2010 — deputy director for finance → 2014 — deputy director for operations.",
      projects: [
        {
          name: "Foreign trade, supply, and customs clearance",
          description:
            "Active responsibility period: 2008 — 2018, starting from Head of Supply and Customs and continuing in later roles.",
          sections: [
            {
              title: "Scope and tools",
              items: [
                "Stable imports of lighting and sound equipment from the EU and US for the wholesale business.",
                "Direct manufacturer contracts, sea and road logistics, customs clearance in Belarus, БелГИС / БелГИМ / ГОСТ / EAC certification.",
              ],
            },
            {
              title: "Responsibilities",
              items: [
                "Search and onboarding of foreign suppliers, negotiations, and contracting.",
                "Management of import flow: ~5 containers per month, average procurement volume of ~€500k/month, annual imports of ~€6M.",
                "Customs clearance, broker coordination, customs value adjustment control, cargo insurance, and assortment certification.",
                "Management of the supply and customs team: 2 to 7 direct reports.",
              ],
            },
            {
              title: "Results and achievements",
              items: [
                "Developed and implemented a sustainable customs value adjustment refund process, generating €50k+ in monthly savings and still operating today.",
                "Built direct cooperation with leading European and British companies, resulting in assortment expansion and turnover growth for the business line.",
                "Created a repeatable certification procedure for three product categories: lighting, acoustics, and furniture.",
              ],
            },
          ],
        },
        {
          name: "Financial and operations management",
          description:
            "Active responsibility period: 2010 — 2018, from Deputy Director for Finance and, from 2014, Deputy Director for Operations.",
          sections: [
            {
              title: "Responsibilities",
              items: [
                "Management accounting, budgeting, and P&L control by business line.",
                "Banking relationships, currency operations, and payment control for import contracts.",
                "From 2014, company-wide operations management: HR, procurement, sales, warehouse, customs, certification.",
              ],
            },
          ],
        },
        {
          name: "B2B projects and exhibition activity",
          sections: [
            {
              title: "Responsibilities",
              items: [
                "Supply and installation of professional lighting and acoustics for sports facilities, concert and theatre venues, and corporate interiors in Belarus and Ukraine.",
                "Organisation of industry exhibitions: technical documentation, stand builder coordination, exhibition cargo logistics, installation supervision, and stand acceptance.",
              ],
            },
            {
              title: "Results and achievements",
              items: [
                "Lviv Football Stadium (2011): supply and installation of lighting for all interior areas of the stadium.",
                "ProLight + Sound, Frankfurt (Messe Frankfurt), 2006: own 30 m² stand with a budget of ~€100k; full organisation cycle delivered without delays or incidents.",
                "Regular participation in local and regional industry exhibitions as an exhibitor.",
              ],
            },
          ],
        },
      ],
    },
  ],
  languages: [
    { name: "Russian", level: "native" },
    { name: "Belarusian", level: "native" },
    { name: "English", level: "basic (A1-A2)" },
  ],
};
