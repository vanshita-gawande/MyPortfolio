import React from "react";
import { FaBriefcase } from "react-icons/fa";

function Experience() {
  return (
    <section id="experience" className="px-[10%] py-16 bg-[#1a1a1a] text-white">
      <h2 className="text-3xl font-bold mb-10 text-[#ed552f]">
        Work Experience
      </h2>

      <div className="relative border-l-2 border-[#ed552f] pl-6 space-y-10">
        <div className="relative">
          <span className="absolute -left-[10px] top-1 w-4 h-4 bg-[#ed552f] rounded-full"></span>
          <h3 className="text-xl font-semibold flex items-center gap-2">
            <FaBriefcase className="text-[#ed552f]" />
            Data & AI Apprentice Trainee – Fujitsu
          </h3>
          <p className="text-sm text-gray-400">
            Mar 2026 – Present | Pune / On-site
          </p>
          <ul className="text-gray-300 mt-2 space-y-1">
            <li>
              • Gained hands-on experience in <strong>Generative AI</strong>,{" "}
              <strong>LLMs</strong>,
              <strong> Retrieval-Augmented Generation (RAG)</strong>,{" "}
              <strong>LangChain</strong>,<strong> LangGraph</strong>,{" "}
              <strong>MCP</strong>, <strong>FastAPI</strong>,
              <strong> Python</strong>, <strong>SQL</strong>, and
              <strong> Vector Databases</strong> through structured training and
              real-world use cases.
            </li>
            <li>
              • Built AI-powered applications and agentic workflows using
              <strong> LangChain</strong>, <strong>LangGraph</strong>,
              <strong> FastAPI</strong>, and <strong>LLM APIs</strong>, focusing
              on RAG pipelines, prompt engineering, tool integration, and
              intelligent automation.
            </li>
            <li>
              • Developed scalable backend APIs and integrated vector search,
              semantic retrieval, and modern AI workflows for enterprise-focused
              applications.
            </li>
          </ul>
        </div>
        {/* Akhand Digi Solution */}
        <div className="relative">
          <span className="absolute -left-[10px] top-1 w-4 h-4 bg-[#ed552f] rounded-full"></span>
          <h3 className="text-xl font-semibold flex items-center gap-2">
            <FaBriefcase className="text-[#ed552f]" /> Developer Intern – Akhand
            Digi Solution LLP
          </h3>
          <p className="text-sm text-gray-400">
            Aug 2025 – Jan 2026 | Pune / Remote
          </p>
          <ul className="text-gray-300 mt-2 space-y-1">
            <li>• Developing sports booking MERN application</li>
            <li>• Authentication & secure admin dashboard modules</li>
            <li>• MongoDB schema design and REST API development</li>
          </ul>
        </div>

        {/* Makryto Internship */}
        <div className="relative">
          <span className="absolute -left-[10px] top-1 w-4 h-4 bg-[#ed552f] rounded-full"></span>
          <h3 className="text-xl font-semibold flex items-center gap-2">
            <FaBriefcase className="text-[#ed552f]" /> MERN Intern – Makryto
            Innovation Pvt. Ltd.
          </h3>
          <p className="text-sm text-gray-400">Jun 2023 – Sep 2023</p>
          <ul className="text-gray-300 mt-2 space-y-1">
            <li>• Built reusable React components</li>
            <li>• Integrated REST APIs into frontend</li>
            <li>• Improved web performance and responsiveness</li>
          </ul>
        </div>

        {/* ✅ CodeClause Experience Added */}
        <div className="relative">
          <span className="absolute -left-[10px] top-1 w-4 h-4 bg-[#ed552f] rounded-full"></span>
          <h3 className="text-xl font-semibold flex items-center gap-2">
            <FaBriefcase className="text-[#ed552f]" /> Web Development Intern –
            CodeClause
          </h3>
          <p className="text-sm text-gray-400">Dec 2023 – Jan 2024</p>
          <ul className="text-gray-300 mt-2 space-y-1">
            <li>• Developed web pages using HTML, CSS, JavaScript</li>
            <li>• Collaborated on front-end tasks with team members</li>
            <li>• Gained experience in real-world project workflow</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Experience;
