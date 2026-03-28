export const siteConfig = {
  name: "Darien Sweitzer",
  title: "IT Infrastructure Specialist in Healthcare | Full Stack Developer in the Making",
  description: "Portfolio website of Darien Sweitzer",
  accentColor: "#7520ff",
  social: {
    email: "sweitzerdarien@gmail.com",
    github: "https://github.com/darien-sweitzer",
  },
  aboutMe: [
    "I am a 3+ year Senior IT Specialist Technician at the 2nd largest hospital in Pittsburgh, Allegheny General Hospital. With a background in Software Engineering, I bring a strong foundation in troubleshooting, systems thinking, and technical problem-solving. I am a hands-on technical problem solver with strong debugging skills from a CS background, and I enjoy working directly with systems, users, and real-world challenges.",
    "I am very excited to continue building my career with a company that makes a meaningful impact. I am a strong team player who is willing to make sacrifices for the greater good of my peers while also remaining self-sufficient in my responsibilities. Goal-oriented, self-driven, and highly focused on continuous growth, I am confident I can bring value to any team and contribute positively to its culture.",
  ],
  skills: ["Java", "Git", "SDLC", "Javascript", "React", "Node.js", "Python", "AWS"],
  projects: [
    {
      name: "URL Shortener Web App",
      description:
        "Full-stack web app that generates short links from long URLs with an optional custom alias.",
      link: "http://deelinks.xyz/app",
      skills: ["React", "Node.js", "Python", "Firebase", "Heroku"],
    },
    {
      name: "The Dungeon Game",
      description:
        "Interactive Game where players choose a hero & battle monsters, featuring a dynamic combat system with differing battle strategies. Originally designed as a Java text-based game, then redesigned and ported into a browser-based web app.",
      link: "https://the-dungeon-game.vercel.app/",
      skills: ["Vite", "React", "JavaScript", "CSS", "Vercel"],
    },
  ],
  experience: [
    {
      company: "Highmark",
      title: "IT Infrastructure Specialist",
      dateRange: "May 2023 - Present",
      bullets: [
        "Diagnosed and resolved hardware, software, and system issues in a high-volume hospital environment, ensuring minimal downtime for critical operations",
        "Managed Large Projects to deploy all new hardware and software in hospital departments from scratch, starting from phase 1 all the way to deployment; including planning, installation, configuration, and post-deployment support",
        "Collaborated with multiple separate teams at once to ensure seamless integration of new technologies, while proactively identifying risks and mitigating issues during implementation phases",
        "Used Communication skills to work with new users everyday to troubleshoot and resolve technical issues, while being able to explain technical aspects to non-technical users",
      ],
    },
    {
      company: "Posture Construction",
      title: "Construction Worker",
      dateRange: "Jan 2022",
      bullets: [
        "Learned the importance of hard work & dedication while working 50+ hour weeks in a physically demanding job",
        "Developed valuable skills in teamwork, communication, & problem-solving while working on a construction site",
        "Made sacrifices for the greater good of my team, even if it meant taking on extra work for myself",
      ],
    },
  ],
  education: [
    {
      school: "Community College of Allegheny County",
      degree: "Associate of Science in Computer Science | Software Engineering",
      dateRange: "2019 - 2021",
      achievements: [
        "A+'s in all programming courses",
        "Graduated with 3.5 GPA",
        "Tutor for advanced Java",
      ],
    },
    {
      school: "Free Code Camp .com",
      degree: "Full Stack Development Certificate",
      dateRange: "2026",
      achievements: [
        "Completed 600+ hours of coursework",
        "Built multiple full-stack web application projects — Utilizing React and Node.js",
        "Gained proficiency in JavaScript, HTML, CSS, and various web development technologies",
      ],
    },
  ],
};
