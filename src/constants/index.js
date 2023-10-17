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
    nextjs,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    cpp,
    dashboard,
    clime,
    summarizer,
    threejs,
    rectify,
    hoobank,
    zenboard,
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
      id: "contact",
      title: "Contact",
    },
    // {
    //   id: "resume",
    //   title: "Resume",
    // },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Js Developer",
      icon: mobile,
    },
    {
      title: "Frontend Developer",
      icon: backend,
    },
    {
      title: "Backend Developer",
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
      name: "nextjs",
      icon: nextjs,
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
      name: "figma",
      icon: figma,
    },
    {
      name: "cpp",
      icon: cpp,
    },
  ];
  
  const projects = [
    {
      name: "Dashboard",
      description:
        "A user-friendly admin dashboard providing comprehensive control, analytics, and management tools for seamless website or application administration.",
        
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "chartjs",
          color: "green-text-gradient",
        },
        {
          name: "tailwindcss",
          color: "pink-text-gradient",
        },
      ],
      image: dashboard,
      source_code_link: "https://github.com/SH3R1FF/dashboard-sh",
      link:"https://dashboard-sh.netlify.app",
    },
    {
      name: "Clime",
      description:
        "Web Application which provides weather conditions for any city, enabling users to search for current weather information in any geographical location.",
      tags: [
        {
          name: "reactjs",
          color: "blue-text-gradient",
        },
        {
          name: "weatherapi",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: clime,
      source_code_link: "https://github.com/SH3R1FF/clime",
      link:"https://clime-app.netlify.app",
    },
    {
      name: "Sumz Summarizer",
      description:
        "AI based Web application that condenses articles into concise summaries which saves time, enhance comprehension, and personalizes user reading experience ",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "redux",
          color: "green-text-gradient",
        },
        {
          name: "tailwindcss",
          color: "pink-text-gradient",
        },
      ],
      image: summarizer,
      source_code_link: "https://github.com/SH3R1FF/sumz-ai-summarizer",
      link:"https://sumz-summarizer.netlify.app/",
    },
    {
      name: "Zenboard",
      description:
        " Efficient Kanban board website streamlining project management, showcasing intuitive design and organization tools for enhanced productivity and collaboration.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "zustand",
          color: "green-text-gradient",
        },
        // {
        //   name: "tailwindcss",
        //   color: "pink-text-gradient",
        // },
        {
          name: "reactdnd",
          color: "pink-text-gradient",
        },
      ],
      image: zenboard,
      source_code_link: "https://github.com/SH3R1FF/sumz-ai-summarizer",
      link:"https://zenboard-sh.netlify.app",
    },
    {
      name: "Hoobank",
      description:
        "A robust banking website, highlighting expertise in creating secure, user-friendly financial platforms for seamless transactions and account management ",
      tags: [
        {
          name: "reactjs",
          color: "blue-text-gradient",
        },
        // {
        //   name: "redux",
        //   color: "green-text-gradient",
        // },
        {
          name: "tailwindcss",
          color: "pink-text-gradient",
        },
      ],
      image: hoobank,
      source_code_link: "https://github.com/SH3R1FF/sumz-ai-summarizer",
      link:"https://hoobank.netlify.app",
    },
    {
      name: "Rectify",
      description:
        " A feature-rich text editing website, showcasing expertise in user-friendly platforms for efficient text editing. Harness the power of words with ease. ",
      tags: [
        {
          name: "reactjs",
          color: "blue-text-gradient",
        },
        // {
        //   name: "redux",
        //   color: "green-text-gradient",
        // },
        {
          name: "tailwindcss",
          color: "pink-text-gradient",
        },
      ],
      image: rectify,
      source_code_link: "https://github.com/SH3R1FF/sumz-ai-summarizer",
      link:"https://rectify-app.netlify.app/",
    },

  ];
  
  export { services, technologies,projects };
  