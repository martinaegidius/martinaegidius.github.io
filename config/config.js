
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
  description: "Civil-engineer in applied mathematics. My main focus is on machine learning/deep learning, image analysis, statistical modelling and scientific computing.",
  image: profile.src,
  buttons: [
    {
      title: "Contact Me",
      link: "#contact",
      isPrimary: true,
    },
    {
      title: "Resume (DA)",
      link: "https://drive.google.com/file/d/1RCc9sMhHj4J-mGFiefIqv7dCIf0ipby6/view?usp=sharing",
      isPrimary: false,
    },
    {
      title: "Resume (EN)",
      link: "https://drive.google.com/file/d/13mvcJYhYzPsM35rOpGPJLCCGOBkQV2Io/view?usp=sharing",
      isPrimary: false,
    },
  ],
}

export const about = {
  title: "Who I am",
  description: [
    "I completed the MSc. Mathematical Modeling and Computation at DTU in summer 2025 and BSc. Earth and Space Physics Engineering from the Technical University of Denmark (DTU) in 2022. My academic journey has been shaped by a deep interest in data-driven approaches and a passion for applied mathematics.",
    "I'm especially drawn to the theoretical underpinnings of modern machine learning, with a particular curiosity for Computer Vision, Signal Processing and MLOps. While I stay up to date with the latest AI advancements, I also find great satisfaction in applying well-established modeling techniques to new, creative problems. I also enjoy demystifying AI trends and helping others understand the real implications behind the headlines.",
    "In my free time, I continuously work on improving my skills in kendama and synthesizer sound design while enjoying craft coffee. When the weather is nice, I like to go mountain hiking. ",
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
      title: "Computer Vision and Image Analysis",
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
      title: "Orthocount",
      description: "Building object counting pipelines for Roskilde festival.",
      icons:
        [
          {
            icon: faGithub,
            link: "https://github.com/martinaegidius/orthocount",
          }
        ]
    },
    {
      title: "CoursePuppeteer",
      description: "A code-base for automatic course content delivery using CI/CD pipelines. Developed together with Ludvík Petersen for the Technical University of Denmark. Need help adapting your course for the structure? Feel free to write.",
      icons:
        [
          {
            icon: faGithub,
            link: "https://github.com/martinaegidius/CoursePuppeteer",
          }
        ]
    },
    {
      title: "OctDiff",
      description: "3D diffusion based methods for cardiovascular data analysis and synthesis. Thesis project made together with Ludvík Petersen. Allows highly realistic 3D cardiovascular organ mesh synthesis in 2.5 seconds using class-conditional dual octree based LDMs.",
      icons:
        [
          {
            icon: faFilePdf,
            link: "https://drive.google.com/file/d/1Ob6EIdva9SmKDv4Ov4XzE24bhWFE8I8A/view?usp=sharing",
          }
        ]
    },

    {
      title: "Cleaninbox",
      description: "TinyBERT finetuned to the banking77 dataset using Huggingface. Deployed in a docker container with GitHub Actions. Lives in Google Cloud Run using FastAPI, Torch and Streamlit.",
      icons:
        [
          {
            icon: faGithub,
            link: "https://github.com/dtumlops-group98-org/Group98_MLOps?tab=readme-ov-file",
          },
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
  description: "I create machine learning algorithms and neural networks. I graduated from the Technical University of Denmark (DTU) in 2025 with a degree in Mathematical Modeling and Computation.",
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
