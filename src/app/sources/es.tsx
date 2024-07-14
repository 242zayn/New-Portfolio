import {
  faCloud,
  faCreditCard,
  faGlobe,
  faMobile,
  faScrewdriverWrench,
  faStar,
  faTablet,
} from "@fortawesome/free-solid-svg-icons";
import tech from "./techStack";
import ProjectsEs from "./projects_es";

const es = {
  author: "Sarvesh Sharma",
  role: "Systems Engineering Student, Programmer and UI/UX Designer",
  email: "sarveshsharmanci@gmail.com",
  birthday: "12/05/2000",
  country: "India",
  hero: {
    name: "Sarvesh Sharma",
    downloadbtntext: "CV Download",
    words: [
      "MERN Developer",
      "Full Stack Developer",
      "Frontend Developer",
      "Backend Developer",
      "Web Developer",
    ],

    description:
      "You can reach out to me if you need any help in making a website or web application for you business ",

    button_aria: "Desplazar",
  },
  technologies: {
    title: "Technologies",
    action: {
      image: "/action-technologies/computer.png",
      title: "At the forefront of technology for your website",
      description:
        "Every project is an opportunity to leave a lasting impression and build meaningful connections between brands and their audience. Welcome to our digital world, we are excited to share our work with you",
    },
    tech: [
      tech.wordpress,
      tech.html,
      tech.css,
      tech.javascript,
      tech.php,
      tech.tailwind,
      tech.sass,
      tech.vuejs,
      tech.nuxtjs,
      tech.nextjs,
      tech.csharp,
    ],
    start: "Start now",
  },
  services: {
    title: "Services",
    items: [
      {
        title: "Personalized design",
        description: "Taking into account your requirements and preferences.",
        icons: [faGlobe],
        active: true,
      },
      {
        title: "Responsive Design",
        description: "Navegabilidad entre dispositivos garantizada",
        icons: [faMobile, faTablet],
        active: true,
      },
      {
        title: "E-Commerce",
        description: "Creation of pages dedicated to electronic commerce.",
        icons: [faCreditCard],
        active: false,
      },
      {
        title: "We create your brand",
        description:
          "If you do not have your own brand, we will take care of it ",
        icons: [faStar],
        active: true,
      },
      {
        title: "Maintenance",
        description: "Personalized support for your third-party pages.",
        icons: [faScrewdriverWrench],
        active: true,
      },
      {
        title: "Web hosting",
        description: "We make hosting your website or web project easy",
        icons: [faCloud],
        active: true,
      },
    ],
    action: {
      title: "Get your online presence off the ground today!",
      description:
        "From initial loading to user interaction, we guarantee an exceptional experience. Boost your online success with fast, efficient and responsive websites.",
    },
    start: "Empieza ahora",
  },
  projects: {
    title: "Proyectos",
    onlineText: "Watch online",
    sourceText: "View source code",
    moreText: "Know more",
    list: ProjectsEs,
  },
  contact: {
    title: "Contact",
    cta: "If you are looking for help with a project or need assistance, you can contact me!",
    direct_comm:
      "Do you want more direct communication? There is another way to contact me:",
    form: {
      names: "Name and surname",
      email: "Email",
      message: "Message",
      success:
        "Your email has been sent successfully! You will receive a response soon!",
      fail: "Something went wrong, try again later...",
      send: "Send Message",
    },
    visit: "Visit Portfolio",
  },
  detail_item: {
    open: "Open",
    emailText: "Email",
    birthdayText: "Birthdate",
    countryText: "Country",
    cvText: "CV",
  },
  navigation: {
    home: "Start",
    blog: "Blog",
    projects: "Projects",
    contact: "Contact",
  },
  footer: {
    credits: "©2024 Designed and Programmed by Sarvesh Sharma",
    source: "View source code",
  },
  home: {
    experience: {
      title: "Relevant experience",
      list: [
        {
          name: "Centroamerican University",
          position: "Project Manager",
          location: "Managua Nicaragua",
          time: "September 2022 - August 2022",
          tech: [
            tech.html,
            tech.css,
            tech.javascript,
            tech.dotnet,
            tech.sqlserver,
          ],
          description: `- Development of the 'Teaching File' web platform for the Department of Education of the confiscated Central American University.`,
        },
        {
          name: "OOQIA",
          position: "Web Development Intern",
          location: "Managua Nicaragua",
          time: "Septiembre 2023 - Presente",
          tech: [
            tech.wordpress,
            tech.html,
            tech.css,
            tech.javascript,
            tech.php,
            tech.tailwind,
            tech.sass,
            tech.vuejs,
            tech.nuxtjs,
            tech.mysql,
          ],
          description: `- WordPress theme development, improvements and support for OOQIA clients.
          - Building solid websites for effective SEO performance and smooth UI/UX.`,
        },
      ],
    },
    about_me: {
      title: "About me",
      description: `Hello! I am David Quintanilla Ruiz, a programmer who also ventures into the world of design. I consider myself a quick learner, easily adaptable to current needs. I have excellent communication skills and know how to lead teams effectively. My background is in creating and designing web pages, particularly focusing on user interface and user experience.
      I worked as a Project Manager for the development of the 'Teaching Record' platform at the Central American University of Nicaragua, I currently work as a Web Developer at OOQIA and I am not looking for new positions.
      My interests include playing video games, watching technology videos, and occasionally drawing.`,
    },
    personal_info: {
      title: "Personal information",
    },
  },
  blog: {
    title: "Blog",
  },
  post: {
    author: "Autor",
    share: "Share my post!",
  },
};

export default es;
