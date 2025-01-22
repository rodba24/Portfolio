import thrivechat from "../assets/projects/thrivechat.png";
import project3 from "../assets/projects/project-3.png";
import { Player } from "@lottiefiles/react-lottie-player";
import movie from "../assets/projects/movie.png";
import thriveChatAnimation from "../assets/projects/thrivechatAnim.json"; // Path to your animation JSON file



export const ABOUT_TEXT = `Hi! I'm a student at Queens College, majoring in Computer Science and minoring in Mathematics. I'm fascinated about AI and machine learning and love diving into projects that challenge me to learn. Alongside my studies I work as a tutor, helping students prepare for the SAT and SHSAT exams. I also serve as a student ambassador at Queens College. In my free time, I enjoy crocheting, reading, and baking. I’m always excited to learn, grow, and take on new challenges, whether through school, personal projects, or exploring new interests.`;
export const EXPERIENCES = [
  {
    year: "July 2024 - August 2024",
    role: "Software Engineer Intern",
    company: "The Difference",
    description: `Collaborated with a team to integrate a Flutter front-end with a Laravel backend for a weight loss app, improving functionality and performance. Re-engineered Home, Profile, and Progress screens, boosting user engagement by 25%, and optimized data management.`,
    technologies: ["Flutter", "Dart", "Laravel"],
    
  },
  {
    year: "January 2023 - January 2023",
    role: "Data Analytics Intern",
    company: "Credit Suisse",
    description: `Worked with a team to develop a user-friendly Tableau dashboard for analyzing group performance and streamlining change requests in internal databases. Collaborated with stakeholders to gather requirements and incorporate feedback, enabling quick analysis of distinct groups and providing actionable insights to optimize team performance.`,
    technologies: ["SQL", "Tableau"],
  },
];

export const PROJECTS = [
  {
    title: "ThriveChat",
    image: thrivechat,
    description:
      "A Retrieval-Augmented Generation (RAG) chatbot providing concise responses and mental health resources.",
    technologies: ["Chroma", "LangChain", "HuggingFace Transformers", "Node.js", "MongoDB"],
    github: "https://github.com/rodba24/ThriveChat",
  },
  {
    title: "Movie Recommender",
    image: movie,
    description:
      "An application for managing tasks and projects, with features such as task creation, assignment, and progress tracking.",
    technologies: ["HTML", "CSS", "Angular", "Firebase"],
    github: "https://github.com/rodba24/movie-recommender",
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website built using React.js TailWindCSS.",
    technologies: [ "React.js", "TailwindCSS","HTML/CSS"],
    github: "https://github.com/rodba24/Portfolio",
  },
];

export const CONTACT = {
  email: "rodba24@gmail.com",
};
