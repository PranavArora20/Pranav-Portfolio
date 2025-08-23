import React from "react";
import { SkillsInfo } from "../../constants";
import TiltEffect from "../TiltEffect/TiltEffect";

const Skills = () => (
  <section
    id="skills"
    className="pt-20 md:pt-24 lg:pt-28 pb-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans bg-skills-gradient"
    style={{ scrollMarginTop: '100px' }}
  >
    {/* Section Title */}
    <div className="text-center mb-8">
      <h2 className="text-3xl sm:text-4xl font-bold text-white">SKILLS</h2>
      <div className="w-24 h-1 bg-[#8245ec] mx-auto mt-2"></div>
      <p className="text-gray-400 mt-4 text-lg font-semibold">
        A collection of my technical skills and expertise honed through various projects and experiences
      </p>
    </div>

    {/* Skill Categories */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 py-8 pb-8">
      {SkillsInfo.map((category) => (
        <div
          key={category.title}
          className="bg-gray-900 backdrop-blur-md px-6 sm:px-10 py-8 rounded-2xl border border-white 
          shadow-[0_0_20px_1px_rgba(130,69,236,0.3)]"
        >
          <h3 className="text-2xl sm:text-3xl font-semibold text-gray-400 mb-4 text-center">
            {category.title}
          </h3>

          {/* Skill Items - 3 per row on larger screens */}
          <TiltEffect
            key={category.title}
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            scale={1.05}
          >
                         <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 w-full">
               {category.skills.map((skill) => (
                 <div
                   key={skill.name}
                   className="flex items-center justify-center space-x-2 bg-transparent border-2 border-gray-700 rounded-3xl py-3 px-3 text-center hover:border-[#8245ec] transition-colors duration-300"
                 >
                  <img
                    src={skill.logo}
                    alt={`${skill.name} logo`}
                    className="w-6 h-6 sm:w-8 sm:h-8"
                  />
                  <span className="text-xs sm:text-sm text-gray-300">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </TiltEffect>
        </div>
      ))}
    </div>
  </section>
);

export default Skills;
