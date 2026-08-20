import React from "react";
import { FaRobot, FaBrain, FaCode, FaRocket } from "react-icons/fa";

function About() {
  return (
    <section
      id="about"
      className="relative px-[10%] py-20 bg-[#1a1a1a] text-white overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-[350px] h-[350px] bg-[#ff7e5f1c] rounded-full blur-[180px]"></div>
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[#feb47b1f] rounded-full blur-[180px]"></div>

      {/* Heading */}
      <h2 className="text-3xl font-bold mb-6 border-l-4 border-[#ed552f] pl-4 relative z-10">
        About <span className="text-[#ed552f]">Me</span>
      </h2>

      <div className="flex flex-col lg:flex-row justify-between items-start gap-14 relative z-10">
        {/* Left Side */}
        <div className="max-w-[650px]">
          <p className="text-lg leading-relaxed text-gray-300 mb-5">
            I'm a passionate{" "}
            <span className="text-[#ed552f] font-semibold">
              Full Stack AI Application Developer
            </span>{" "}
            focused on building intelligent applications powered by{" "}
            <span className="text-[#ed552f] font-semibold">
              Large Language Models (LLMs)
            </span>
            , Retrieval-Augmented Generation (RAG) and AI agents.
          </p>

          <p className="text-lg leading-relaxed text-gray-300 mb-5">
            I develop end-to-end AI solutions using{" "}
            <span className="text-[#ed552f] font-semibold">
              Python, LangChain, LangGraph, FastAPI, ChromaDB, Hugging Face, and
              React
            </span>
            , combining scalable backend services with intuitive user
            interfaces.
          </p>

          <p className="text-lg leading-relaxed text-gray-300">
            My focus is on transforming AI capabilities into production-ready
            applications through agentic workflows, semantic search, vector
            databases, tool integrations, and modern full-stack development.
          </p>
        </div>

        {/* Right Side Cards */}
        <div className="grid grid-cols-2 gap-5 w-full lg:w-[40%]">
          {[
            {
              icon: <FaBrain />,
              title: "Generative AI",
              desc: "LLMs • RAG • Prompt Engineering",
            },
            {
              icon: <FaRobot />,
              title: "AI Agents",
              desc: "LangChain • LangGraph • Agentic • MCP",
            },
            {
              icon: <FaCode />,
              title: "Full Stack",
              desc: "Python • FastAPI • React",
            },
            {
              icon: <FaRocket />,
              title: "Deployment",
              desc: "Production-Ready AI Apps",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center text-center p-5 bg-[#242424] rounded-xl border border-gray-700 shadow-md hover:shadow-lg hover:-translate-y-1 transition duration-300"
            >
              <div className="text-[#ed552f] text-2xl mb-2">{item.icon}</div>

              <h4 className="text-lg font-semibold">{item.title}</h4>

              <p className="text-sm text-gray-400">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
