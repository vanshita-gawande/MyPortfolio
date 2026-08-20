import React from "react";
import {
  FaReact,
  FaNodeJs,
  FaJsSquare,
  FaHtml5,
  FaCss3,
  FaPython,
  FaGitAlt,
  FaDatabase,
} from "react-icons/fa";

import {
  SiMongodb,
  SiMysql,
  SiRedux,
  SiExpress,
  SiFirebase,
  SiTailwindcss,
  SiDocker,
  SiFastapi,
  SiPostgresql,
} from "react-icons/si";

import { TbBrain, TbRobot, TbVector, TbApi, TbCloud } from "react-icons/tb";

const Skills = () => {
  const skills = [
    // AI
    { name: "Generative AI", icon: <TbBrain />, color: "#8B5CF6" },
    { name: "LLMs", icon: <TbRobot />, color: "#F97316" },
    { name: "LangChain", icon: <TbVector />, color: "#16A34A" },
    { name: "RAG", icon: <TbBrain />, color: "#0EA5E9" },
    { name: "AI Agents", icon: <TbRobot />, color: "#EC4899" },
    { name: "Prompt Engineering", icon: <TbBrain />, color: "#FACC15" },
    { name: "Vector Databases", icon: <TbVector />, color: "#10B981" },
    { name: "ChromaDB", icon: <TbVector />, color: "#14B8A6" },
    { name: "Hugging Face", icon: <TbBrain />, color: "#FFD21E" },

    // Backend
    { name: "Python", icon: <FaPython />, color: "#3776AB" },
    { name: "FastAPI", icon: <SiFastapi />, color: "#009688" },
    { name: "Node.js", icon: <FaNodeJs />, color: "#3C873A" },
    { name: "Express.js", icon: <SiExpress />, color: "#FFFFFF" },
    { name: "REST APIs", icon: <TbApi />, color: "#22C55E" },

    // Databases
    { name: "MongoDB", icon: <SiMongodb />, color: "#4DB33D" },
    { name: "PostgreSQL", icon: <SiPostgresql />, color: "#336791" },
    { name: "MySQL", icon: <SiMysql />, color: "#00618A" },
    { name: "SQL", icon: <FaDatabase />, color: "#336791" },

    // Frontend
    { name: "React", icon: <FaReact />, color: "#61DBFB" },
    { name: "JavaScript", icon: <FaJsSquare />, color: "#F7DF1E" },
    { name: "Redux", icon: <SiRedux />, color: "#764ABC" },
    { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "#38BDF8" },
    { name: "HTML", icon: <FaHtml5 />, color: "#E44D26" },
    { name: "CSS", icon: <FaCss3 />, color: "#1572B6" },

    // Tools
    { name: "Git", icon: <FaGitAlt />, color: "#F1502F" },
    { name: "Docker", icon: <SiDocker />, color: "#2496ED" },
    { name: "Firebase", icon: <SiFirebase />, color: "#FFCB2B" },
    { name: "Cloud", icon: <TbCloud />, color: "#3B82F6" },
  ];

  return (
    <section id="skills" className="px-[10%] py-16 bg-[#1a1a1a] text-white">
      <h2 className="text-3xl font-bold mb-10 border-l-4 border-[#ed552f] pl-4">
        My <span className="text-[#ed552f]">Skills</span>
      </h2>

      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-7 gap-6">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center gap-2 animate-float hover:scale-110 transition duration-300"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <span style={{ color: skill.color }} className="text-4xl">
              {skill.icon}
            </span>

            <p className="text-sm text-gray-300 text-center">{skill.name}</p>
          </div>
        ))}
      </div>

      <style>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
          100% { transform: translateY(0px); }
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Skills;
