import React from "react";
import { FaGithub } from "react-icons/fa";

const Projects = () => {
const projectData = [
  {
    title: "Multi-Document RAG Chatbot",
    description:
      "An intelligent Retrieval-Augmented Generation (RAG) application that supports multiple document formats, processes them into embeddings, stores vectors in ChromaDB, and answers user queries with context-aware responses.",
    technologies: [
      "Python",
      "LangChain",
      "RAG",
      "ChromaDB",
      "Vector Database",
      "Hugging Face",
      "Streamlit",
      "Groq",
    ],
    github: "YOUR_GITHUB_LINK",
  },

  {
    title: "AI Research Assistant",
    description:
      "A research assistant powered by Retrieval-Augmented Generation that ingests research PDFs, performs semantic search using vector embeddings, and generates grounded answers using Groq LLMs with fallback reasoning.",
    technologies: [
      "Python",
      "Streamlit",
      "LangChain",
      "RAG",
      "ChromaDB",
      "Hugging Face",
      "Groq",
    ],
    github:
      "https://github.com/vanshita-gawande/GenAi_AgenticAi/tree/main/ai-research-assitant",
  },

  {
    title: "Sports Complex Booking",
    description:
      "Real-time sports ground booking platform with authentication, dashboards, booking management, and an admin panel.",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
    github: "https://github.com/vanshita-gawande/Akhand-Web-Frontend",
  },

  {
    title: "EcoTrace - Supply Chain Blockchain",
    description:
      "Blockchain-powered supply chain application for secure product verification with QR-based tracking and tamper-proof records.",
    technologies: [
      "React",
      "Node.js",
      "MongoDB",
      "Solidity",
      "Hardhat",
      "Ethers.js",
    ],
    github: "https://github.com/vanshita-gawande/EcoTrace",
  },

  {
    title: "SQL-Driven Hotel Booking System",
    description:
      "A hotel management system supporting room reservations, billing, customer management, and database-driven operations.",
    technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    github: "https://github.com/vanshita-gawande/New-Learning",
  },

  {
    title: "Movie Catalog",
    description:
      "A responsive movie discovery and review platform with Firebase authentication and a modern React interface.",
    technologies: ["React", "Firebase", "Node.js", "Tailwind CSS"],
    github: "https://github.com/vanshita-gawande/movie-catlog",
  },
];
  return (
    <section
      id="projects"
      className="relative px-[10%] py-16 bg-[#121212] text-white overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-[350px] h-[350px] bg-[#ff7e5f1c] rounded-full blur-[180px]"></div>
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-[#feb47b1f] rounded-full blur-[180px]"></div>

      <h2 className="text-3xl font-bold mb-3 relative z-10 border-l-4 border-[#ed552f] pl-4">
        My <span className="text-[#ed552f]">Projects</span>
      </h2>
      <p className="text-gray-400 mb-10 relative z-10">
        A collection of real-world applications I’ve built with passion.
      </p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
        {projectData.map((project, index) => (
          <div
            key={index}
            className="relative bg-[#1e1e1e] border border-gray-800 p-6 rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition duration-300 flex flex-col justify-between"
          >
            <div>
              <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-300 text-sm mb-4">
                {project.description}
              </p>
              <p className="text-sm mb-6">
                <span className="text-[#ed552f] font-semibold">
                  Tech Stack:
                </span>{" "}
                {project.technologies.join(", ")}
              </p>
            </div>

            {/* GitHub Icon Bottom Left */}
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#ed552f] hover:text-white hover:bg-[#ed552f] border border-[#ed552f] rounded-full w-10 h-10 flex items-center justify-center transition duration-300"
            >
              <FaGithub />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
