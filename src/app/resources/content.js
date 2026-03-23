import { Logo } from "@/once-ui/components";

const person = {
  firstName: "Víctor",
  lastName: "Aguilar",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Diseñador UX/UI",
  avatar: "/images/perfil.jpeg",
  email: "vaguilar.ux@gmail.com",
  location: "America/Lima", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: [], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: true,
  title: <>Conversemos</>,
  description: (
    <>
      Ponte en contacto con nosotros y comencemos a trabajar juntos.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "Instagram",
    icon: "instagram",
    link: "https://www.instagram.com/rasgo.branding",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/victor-eleazar-aguilar-pinto-2b0195294/",
  },
  {
    name: "X",
    icon: "x",
    link: "",
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];

const home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Inicio",
  title: `Rasgo`,
  description: `Rasgo por ${person.role}`,
  headline: <>Más de ti</>,
  featured: {
    display: true,
    title: <>Último proyecto: <strong className="ml-4">Web Amanto</strong></>,
    href: "/work/building-once-ui-a-customizable-design-system",
  },
  subline: (
    <>
      Trascendemos la superficialidad de lo puramente llamativo.
      Rasgo se fundamenta en la concepción de identidades profundas, ricas en significado y capaces de resonar en la memoria a través de la evocación conceptual.
    </>
  ),
};

const about = {
  path: "/about",
  label: "Vctor",
  title: `Sobre – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com/victor-eleazar-aguilar-pinto-pyrvko",
  },
  intro: {
    display: true,
    title: "Introducción",
    description: (
      <>
        Bachiller en Ingeniería de Sistemas, Project manager agile, analista y emprendedor apasionado por el diseño y la tecnología.
        Especializado en Project Management y Diseño UX/UI.
        Comprometido con la colaboración el liderazgo y creación de soluciones innovadoras.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Experiencia",
    experiences: [
      {
        company: "Acide",
        timeframe: "2025-Actualidad",
        role: "Project Manager",
        achievements: [
          <>
            Project manager liderando equipo (10 personas) de desarrollo, con múltiples proyectos de software a medida y plataformas digitales.
          </>,
          <>
            Análisis y prototipado de sistemas web con metodologías ágiles, diseño de interfaces y experiencia de usuario, design thinking.
          </>,
          <>
            Diseño gráfico, community management y branding en el área de marketing.
          </>,
        ],
        images: [
        ],
      },
      {
        company: "Rasgo Branding",
        timeframe: "2020-Actualidad",
        role: "Director Creativo",
        achievements: [
          <>
            Gestión de proyectos de branding y diseño web.
          </>,
          <>
            Gestión de proyectos de desarrollo de software.
          </>,
          <>
            Gestión de proyectos de marketing digital.
          </>,
        ],
        images: [
        ],
      },
      {
        company: "UPT",
        timeframe: "2023-2024",
        role: "Soporte técnico",
        achievements: [
          <>
            Análisis de datos, generación de reportes dinámicos, soporte técnico informático en el vicerrectorado académico.
          </>,
          <>
            Creación de piezas gráficas y publicidad interna de la Universidad Privada de Tacna.
          </>,
          <>
            Soporte técnico de hardware y software.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Estudios",
    institutions: [
      {
        name: "Universidad Privada de Tacna",
        description: <>Ingeniería de sistemas.</>,
      },
      {
        name: "Instituto de Sistemas Cusco",
        description: <>Análisis de sistemas.</>,
      },
      {
        name: "Universidad Nacional San Antonio Abad del Cusco",
        description: <>Ciencias de la comunicación.</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Habilidades",
    skills: [
      {
        title: "Gestión de Proyectos",
        description: <>Metodologías Ágiles (Scrum/Kanban) | Liderazgo de equipos técnicos | Control de alcance y recursos</>,
        icon: "briefcase",
        images: [],
      },
      {
        title: "Software e Implementación",
        description: <>Ciclo de vida del software (SDLC) | Implementación de ERP/CRM (Odoo, Zoho) | Análisis de requerimientos</>,
        icon: "code",
        images: [],
      },
      {
        title: "Diseño UX/UI y Producto",
        description: <>Prototipado rápido y funcional | Investigación de usuario | Arquitectura de la información</>,
        icon: "penNib",
        images: [],
      },
      {
        title: "Branding e Identidad",
        description: <>Diseño web | Diseño gráfico corporativo | Creación de identidad visual y marca</>,
        icon: "star",
        images: [],
      },
      {
        title: "Herramientas Creativas",
        description: <>Creación de proyectos integrales dominando la suite de Adobe y herramientas de prototipado.</>,
        icon: "palette",
        images: [],
      },
    ],
  },
};

const blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  path: "/work",
  label: "Portafolio",
  title: `Proyectos – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  path: "/gallery",
  label: "Galería",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/projects/boveda.png",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/projects/dynamus.png",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/projects/invaser.png",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/projects/yelux.png",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/projects/bazar.png",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/projects/vegeta.png",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/projects/fym.png",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/projects/eternas.png",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
