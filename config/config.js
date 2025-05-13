
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
      title: "Resume",
      link: "https://drive.google.com/file/d/1o8gie_zK903fPEX7GzltUqD0ioHiu36a/view?usp=sharing",
      isPrimary: false,
    },
  ],
}

export const about = {
  title: "Who I am",
  description: [
    "I received my Bachelor's degree (Earth and Space Physics Engineering) from Technical University of Denmark in 2022, and have since decided to follow my passion and thus am currently studying a Master's in Mathematical Modeling and Computation on Technical University of Denmark (finished summer 2025). I love everything data-driven.",
    "With the recent AI-buzz I am very interested in realistic performance-guarantees (yay for asymptotes!). I deeply enjoy learning about the newest tech-trends and to educate those around me about how and why AI-headlines in general are heavily extrapolating. I love finding new applications of tried and tested modeling approaches rather than utilizing the newest LLMs in a transfer-setting.",
    "I thoroughly enjoy learning and spend large amounts of my free-time in gaining more profeciency in programming, mathematics and economics. When I'm not learning, I enjoy cultivating my hobbies, which in part include hand-brewed craft coffee (yes, I do indeed weigh my beans...), drawing, electronic music production and running.",
  ],
}

export const work = {
  title: "What I do",
  cards: [
    {
      title: "Machine Learning",
      description: "Most of my advanced courses are with a focus on Machine Learning, in parts for signal processing, semi-structured and structured data and images.",
      icons: null,
    },
    {
      title: "Computer Vision and Image Processing",
      description: "Ranging from deformable models and Markov Random Fields to Denoising Diffusion Probabilistic Models and Neural Radiance Fields",
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
      description: "TinyBERT finetuned to the banking77 dataset deployed with Google Cloud Run using FastAPI for back-end and streamlit for front-end."
      icons: [
      	{
      	  icon: faLink,
      	  link: "https://email-api-frontend-170780472924.europe-west1.run.app/"
      	}
      ]
    {
      title: "NMTMNet",
      description: "A end-to-end deep learning pipeline for transmembrane protein prediction and classification based on AlphaFold and SchNet.",
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
      description: "A novel vision transformer based solution for generating bounding-box labels using eye-tracking data.",
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
  description: "I create machine and deep learning models. I graduate from Technical University of Denmark (DTU) in 2025 with a degree in Mathematical Modeling and Computation.",
  image: profile.src,
}

export const links = {
  image: profile.src,
  title: "@martinaegidius",
  description: "Data Science Engineer | Machine Learning | Deep Learning Developer",
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
