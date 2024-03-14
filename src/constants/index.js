import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  git,
  carrent,
  jobit,
  tripguide,
  threejs,
  mongodb,
  ambb,
  docker,
  dmcolor,
  portfolio3d
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "Sobre Mi",
  },
  {
    id: "work",
    title: "Experiencia",
  },
  {
    id: "projects",
    title: "Proyectos",
  },
  {
    id: "contact",
    title: "Contacto",
  },
];

const services = [
  {
    title: "Analista de Sistemas",
    icon: web,
  },
  {
    title: "Desarrollador Web",
    icon: mobile,
  },
  {
    title: "Capacidad Analítica",
    icon: backend,
  },
  {
    title: "Conocimiento de algoritmos y estructuras de datos",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Solutiones IT & Mesa de Ayuda",
    company_name: "Asociación Médica Bahía Blanca",
    icon: ambb,
    iconBg: "#383E56",
    date: "Septiembre 2019 - Octubre 2021",
    points: [
      "Soporte de webapps destinadas a ABM de pacientes, turneras, historiales y facturación de los médicos de la ciudad y alrededores.",
      "Reporte de estadísticas mensuales y a pedido de las Base de Datos de la institución y hospitales de la ciudad.",
    ],
  },
  {
    title: "Web Developer FrontEnd",
    company_name: "DM Group",
    icon: dmcolor,
    iconBg: "#E6DEDD",
    date: "Noviembre 2021 - Actualidad",
    points: [
      "Desarrollo y mantenimiento de aplicaciones web utilizando JavaScript y tecnologías relacionadas.",
      "Colaboración con areas y equipos incluyendo diseñadores, product managers, clientes y otros desarrolladores para crear soluciones y productos de calidad.",
      "Implementación de diseño responsivo asegurando compatibilidad entre exploradores y dispositivos.",
      "Participación en SCRUMS semanales con feedbacks constantes en un equipo definido",
      "Capacitación a nuevos recruiters en herramientas, tecnologías y su modo de uso dentro del marco de la empresa"
    ],
  },
];

const testimonials = [
  {
  //   testimonial:
  //     "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
  //   name: "Sara Lee",
  //   designation: "CFO",
  //   company: "Acme Co",
  //   image: "https://randomuser.me/api/portraits/women/4.jpg",
  // },
  // {
  //   testimonial:
  //     "I've never met a web developer who truly cares about their clients' success like Rick does.",
  //   name: "Chris Brown",
  //   designation: "COO",
  //   company: "DEF Corp",
  //   image: "https://randomuser.me/api/portraits/men/5.jpg",
  // },
  // {
  //   testimonial:
  //     "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
  //   name: "Lisa Wang",
  //   designation: "CTO",
  //   company: "456 Enterprises",
  //   image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "CarHub",
    description:
      "Desarrollo web que simula alquiler y reservas de autos, permite buscar y filtrar autos por varios filtros.",
    tags: [
      {
        name: "nodeJS",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/mziliotto/CarHub/",
  },
  {
    name: "Diseño de remeras 3D",
    description:
      "Aplicación web que utiliza IA para importar imágenes, logos y patrones a un modelo de remera 3D y poder diseñarla a gusto del usuario. También incluye edición de colores y carga de archivos",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/mziliotto/IADiseno3D",
  },
  {
    name: "Portfolio 3D",
    description:
      "Portfolio interactivo con animaciones en 3D.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "ThreeJS",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: portfolio3d,
    source_code_link: "https://github.com/mziliotto/portfolio3D",
  },
];

export { services, technologies, experiences, testimonials, projects };
