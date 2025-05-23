
import profile from './profile.png';
import { faAppStore, faGithub, faGooglePlay } from '@fortawesome/free-brands-svg-icons';
import { } from '@fortawesome/free-solid-svg-icons';
import { faLink, faFilePdf } from '@fortawesome/free-solid-svg-icons';

export const navigation = {
  name: "Martin",
  links: [
    {
      title: "About",
      link: "#about",
    },
    {
      title: "Projects",
      link: "#projects",
    },
    // {
    //   title: "Skills",
    // },
    {
      title: "Contact",
      link: "#contact",
    },
    {
      title: "Links",
      link: "/links",
    },
    {
      title: "Blog",
      link: "https://www.latelecture.dk/shortreads",
    }
  ],
}
export const intro = {
  title: "Hi, I'm Martin",
  description: "Soon to be applied mathematics civil-engineer with a main focus on statistics, machine learning and deep learning.",
  image: profile.src,
  buttons: [
    {
      title: "Contact Me",
      link: "#contact",
      isPrimary: true,
    },
    {
      title: "Resume (DA)",
      link: "https://drive.google.com/file/d/1mp-0F3I4UvL0TgVqcJ98IC9VOwFc2wi6/view?usp=sharing",
      isPrimary: false,
    },
    {
      title: "Resume (EN)",
      link: "https://drive.google.com/file/d/1kvvTmhBNUTZNcafE0lfQ1NTgz0LQph_t/view?usp=sharing",
      isPrimary: false,
    },
  ],
}

export const about = {
  title: "Who I am",
  description: [
    "Currently, I'm pursuing a Master's in Mathematical Modeling and Computation at DTU, which I will finish this summer (July 2025). I hold a Bachelor's degree in Earth and Space Physics Engineering from the Technical University of Denmark (DTU), completed in 2022. My academic journey has been shaped by a deep interest in data-driven approaches and a passion for applied mathematics.",
    "I'm especially drawn to the theoretical underpinnings of modern machine learning, with a particular curiosity for Computer Vision and Signal Processing. I'm very keen to work more on the MLOps side of things in the future. While I stay up to date with the latest AI advancements, I find greater satisfaction in applying well-established modeling techniques to new, creative problems. I also enjoy demystifying AI trends and helping others understand the real implications behind the headlines.",
    "In my free time, I continuously work on improving my skills in programming, mathematics, and economics. Beyond the academic and professional world, I have a love for hand-brewed coffee (yes, I do weigh my beans), electronic music production, drawing, and running.",
  ],
}

export const work = {
  title: "What I do",
  cards: [
    {
      title: "Machine Learning",
      description: "Most of my advanced courses are with a focus on Machine Learning, in parts focusing on signal processing and computationally intensive statistics.",
      icons: null,
    },
    {
      title: "Computer Vision and Image Processing",
      description: "Ranging from deformable models and Markov Random Fields to GenAI and Neural Radiance Fields",
      icons: null,
    },
    {
      title: "Deep Learning",
      description: "With experience applying modern methods such as DDPMs, ViTs and GCNs back to old-school conv-nets, LSTMs and MLPs.",
      icons: null,
    },
    {
      title: "Statistical Modeling",
      description: "Experience with unsupervised and supervised methods, time series analysis, stochastic processes, simulations and Bayesian inference.",
      icons: null,
    }
  ],
}

export const projects = {
  title: "Projects",
  cards: [
      {
        title: "Cleaninbox",
        description: "TinyBERT finetuned to the banking77 dataset using Huggingface. Deployed in a docker container with GitHub Actions. Lives in Google Cloud Run using FastAPI, Torch and Streamlit.",
        icons: 
        [
          {
            icon: faLink,
            link: "https://email-api-frontend-170780472924.europe-west1.run.app/",
          }        
        ]
      },

    {
      title: "NMTMNet",
      description: "A end-to-end deep learning pipeline for transmembrane protein prediction and classification based on AlphaFold and SchNet using PyTorch Geometric, Lightning and vanilla PyTorch.",
      icons: [
        {
          icon: faGithub,
          link: "https://github.com/martinaegidius/NMTMNet",
        },
        {
          icon: faFilePdf,
          link: "https://drive.google.com/file/d/1ww0gJAENDyMlEZ-rPshm8UeKxXozjHhz/view",
        }
      ]
    },
    {
      title: "EyeFormer",
      description: "A novel end-to-end vision transformer based solution for generating bounding-box labels using eye-tracking data using PyTorch.",
      icons: [
        {
          icon: faGithub,
          link: "https://github.com/martinaegidius/BA-EyeFormer",
        },
        {
          icon: faFilePdf,
          link: "https://drive.google.com/file/d/1ELQ5I8kC-3-vv8oJUed94MVdNTVyc3LV/view?usp=sharing",
        }
      ]
    },
    {
      title: "LateLecture - co-founder",
      description: "A student organization made for inspiring and motivating STEM-students with large ambitions.",
      icons: [
        {
          icon: faLink,
          link: "https://www.latelecture.dk",
        },
      ]
    },
  ],
}

// const skills = {
//   show: true,
//   heading: "Skills",
//   hardSkills: [
//     { name: "Python", value: 90 },
//     { name: "SQL", value: 75 },
//     { name: "Data Structures", value: 85 },
//     { name: "C/C++", value: 65 },
//     { name: "JavaScript", value: 90 },
//     { name: "React", value: 65 },
//     { name: "HTML/CSS", value: 55 },
//     { name: "C#", value: 80 },
//   ],
//   softSkills: [
//     { name: "Goal-Oriented", value: 80 },
//     { name: "Collaboration", value: 90 },
//     { name: "Positivity", value: 75 },
//     { name: "Adaptability", value: 85 },
//     { name: "Problem Solving", value: 75 },
//     { name: "Empathy", value: 90 },
//     { name: "Organization", value: 70 },
//     { name: "Creativity", value: 90 },
//   ],
// };



export const contact = {
  title: "Get in touch",
  description: "Let's have a chat! Please do not hesitate to reach out directly by email at martinmaegidius@gmail.com.",
  buttons: [
    {
      title: "Email Me",
      link: "mailto:martinmaegidius@gmail.com",
      isPrimary: true,
    },
    // {
    //   title: "Schedule Meeting",
    //   link: "https://topmate.io/hashirshoaeb",
    //   isPrimary: false,
    // },
  ]
}

// SEARCH ENGINE 
export const SEO = {
  // 50 - 60 char  
  title: "Martin Aegidius | Data Science Engineer | Machine Learning | Deep Learning Developer",
  description: "I create ML and Neural Networks. I graduate from Technical University of Denmark (DTU) in 2025 with a degree in Mathematical Modeling and Computation.",
  image: profile.src,
}

export const links = {
  image: profile.src,
  title: "@martinaegidius",
  description: "Data Science | Machine Learning | Deep Learning",
  cards: [
    // {
    //   title: "My website",
    //   link: "https://hashirshoaeb.com/",
    // },
    {
      title: "My GitHub",
      link: "https://github.com/martinaegidius",
    },
    {
      title: "My LinkedIn",
      link: "https://www.linkedin.com/in/martin-%C3%A6gidius-42829122b/",
    },
  ]
}
