import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-2.png";
import project3 from "../assets/projects/project-3.png";

export const HERO_CONTENT = `I am a first year Computer Science student based in London, United Kingdom.  I have a strong foundation in programming and a passion for technology, constantly exploring the fascinating world of digital security and its diverse applications.`;

export const ABOUT_TEXT = "I’m Atharva, and I am currently pursuing a bachelor’s degree in computer science at Brunel University in the city of London. My academic journey is driven by a passion for digital security, and I’m continuously exploring the ever-evolving landscape of this critical field. Though I’m still exploring the various specializations within computer science, my enthusiasm keeps me engaged with the latest trends and breakthroughs in technology. Outside of my studies, I enjoy a well-rounded lifestyle. Video games offer me not just entertainment but also a sense of challenge and accomplishment. Additionally, my love for sports finds me eagerly following football and basketball, where the excitement of the games is always captivating.";

export const EXPERIENCES = [
  {
    year: "July 2024 - Present",
    role: "Software Engineering Fellow",
    company: "Headstarter AI | New York, USA",
    description: `Built 5 AI apps and APIs using NextJS, OpenAI, Pinecone and StripeAPI.\n Coached by Amazon, Bloomberg and Capital One engineers on Aglie, CI/CD, Git and microservice patterns.\n Participated in 3 global hackathons, leading a team of 4 engineering fellows.`,
    technologies: ["OpenAI", "NextJS", "Pinecone", "StripeAPI"],
  }
];

export const PROJECTS = [
  {
    title: "Swiftbot: raspberry Pi based robot game",
    image: project1,
    link: "https://github.com/athxrva07/Draw-Shapes",
    description:
      "Developed a game using Swiftbot, a Raspberry Pi robot with wheels, a camera, and lights • Utilized an API provided by the university for integration and functionality enhancement • Implemented functionality to scan and decode QR codes on instruction • Programmed the robot to move and draw either a square or a triangle based on decoded text • Generated a text file containing detailed information about all the shapes drawn",
    technologies: ["Java", "Raspberry Pi", "Motion Control", "File Handling", "API Integration"],
  },
  {
    title: "Currency Converter",
    image: project2,
    link: "https://athxrva07.github.io/Currency-Converter/",
    description:
      "Developed a Currency Converter Website that allows users to convert amounts from one currency to another using real-time exchange rates • Integrated real-time exchange rates API for accurate and up-to-date currency conversions • Designed a simple and user-friendly interface for seamless user experience • Enabled users to convert amounts between different currencies efficiently",
    technologies: ["HTML", "CSS", "JavaScript", "API Integration"],
  },
  {
    title: "Regal Residences Website",
    image: project3,
    link: "https://athxrva07.github.io/Regal-Residences/",
    description:
      "A personal portfolio website showcasing projects, skills, and contact information • Did this as a part of a Hackathon",
    technologies: ["HTML", "CSS", "JavaScript", "Frontend Design"],
  },
];

export const CONTACT = {
  address: "London, United Kingdom ",
  email: "atharvavc04@gmail.com",
};
