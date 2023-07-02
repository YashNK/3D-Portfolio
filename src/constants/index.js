
import {
    instagram,
    xplrpage,
    google,
    yklogo,
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    xplrlogo,
    canva,
    davinci,
    blender,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "project",
      title: "Projects",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Developer",
      icon: mobile,
    },
    {
      title: "2D/3D Animator",
      icon: backend,
    },
    {
      title: "Content Creator",
      icon: creator,
    },
    {
      title: "Game Developer",
      icon: web,
    },
  ];
  
  const technologies = [
    {
      name: "Blender",
      icon: blender,
    },
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
      name: "MongoDB",
      icon: mongodb,
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
      name: "Figma",
      icon: figma,
    },
    {
      name: "Canva",
      icon: canva,
    },
    {
      name: "Davinci Resolve",
      icon: davinci,
    },
   
  ];
  
  const experiences = [
    {
      title: "Graphics Designer",
      company_name: "Freelance",
      icon: yklogo,
      iconBg: "#383E56",
      date: "June 2017 - Present",
      points: [
        "Over the years, I have had the privilege of collaborating with various companies, creating stunning visual posters that not only capture attention but also deliver the intended message effectively.","Through the use of my proficient skills in software such as Photoshop, Canva, Figma, and Krita, I have been able to consistently produce exceptional designs that leave a lasting impact.",
      ],
    },
    {
      title: "3D Animator",
      company_name: "Own Project | Sci-fi Logs",
      icon: yklogo,
      iconBg: "#383E56",
      date: "Nov 2020 - Aug 2022",
      points: [
        "Worked as a 3D Animator in my very own project Sci-fi Logs. A series that i created using Blender over the course of 2 years.",
        "I handled every aspect of the project, including animation, direction, video editing, sound design, and promotion, showcasing my diverse skill set and dedication to bringing my vision to life.",
        "Used Blender, a 3D animation software, I meticulously crafted detailed character models, animated scenes frame by frame, and created a visually stunning and lifelike experience for the audience."
      ],
    },
    {
      title: "Design lead",
      company_name: "GDSC MEC",
      icon: google,
      iconBg: "#383E56",
      date: "Nov 2021 - Aug 2023",
      points: [
        "Worked as the Design Lead of my college's Google Developer Student Clubs. ",
        "Created multiple posters for our GDSC Events. Also lead our GDSC Design Team towards creating Astonishing Posters.",
        "Conducted Events hosted by our Google Developer Students Club as a Core Member.",
      ],
    },
    
    {
      title: "Front-end Developer",
      company_name: "Xplr",
      icon: xplrlogo,
      iconBg: "#383E56",
      date: "Jan 2023 - Present",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Worked as a Front-End Developer for a project called XPLR.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [

    {
      name: "XPLR",
      description:
        "Web application that enables users to go on self-guided trips. Allows tourists to travel with a safer experience and avoid any mishaps during their journey. Also gives recommendations to the user on which places in trivandrum and worth visiting and places which are close to the users current location. ",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "Mongodb",
          color: "blue-text-gradient",
        },
        {
          name: "tailwind",
          color: "blue-text-gradient",
        },
      ],
      image: xplrpage,
      source_code_link: "https://github.com/Shaky-Sahil/Miniproject",
      xplr_page_link: "https://my-first-app-ys7z.onrender.com/",
    },
  ]

  const PageLinks = [
    {
    image: instagram,
    instalink: "https://www.instagram.com/_chanandler.b.o.n.g_/",
    }
  ]
  
  export { services, technologies, experiences, testimonials, projects, PageLinks };