import React from "react";
import {
  FaPuzzlePiece,
  FaArrowsRotate,
  FaPeopleGroup,
  FaClock,
} from "react-icons/fa6";
import { SkillsInfo, SoftSkillsInfo } from "../../constants";
import TiltEffect from "../TiltEffect/TiltEffect";

const softSkillIcons = {
  puzzle: FaPuzzlePiece,
  adapt: FaArrowsRotate,
  collab: FaPeopleGroup,
  time: FaClock,
};

const Skills = () => (
  <section
    id="skills"
    className="pt-20 md:pt-24 lg:pt-28 pb-24 px-4 md:px-[7vw] lg:px-[20vw] font-sans bg-skills-gradient overflow-x-hidden"
    style={{ scrollMarginTop: "100px" }}
  >
    {/* Section Title */}
    <div className="text-center mb-8">
      <h2 className="text-3xl sm:text-4xl font-bold text-white">SKILLS</h2>
      <div className="w-24 h-1 bg-[#8245ec] mx-auto mt-2"></div>
      <p className="text-gray-400 mt-4 text-lg font-semibold max-w-2xl mx-auto">
        Technical expertise and interpersonal strengths built through projects,
        teamwork, and real-world experience
      </p>
    </div>

    {/* Technical Skill Categories */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-6 lg:gap-8 py-8">
      {SkillsInfo.map((category) => (
        <div
          key={category.title}
          className="bg-gray-900 backdrop-blur-md px-4 sm:px-8 py-6 sm:py-8 rounded-2xl border border-white overflow-hidden shadow-[0_0_20px_1px_rgba(130,69,236,0.3)]"
        >
          <h3 className="text-2xl sm:text-3xl font-semibold text-gray-400 mb-4 text-center">
            {category.title}
          </h3>

          <TiltEffect
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            scale={1.05}
          >
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-4 w-full min-w-0">
              {category.skills.map((skill) => (
                <div
                  key={skill.name}
                  className="flex items-center justify-center flex-wrap gap-1 sm:gap-2 bg-transparent border-2 border-gray-700 rounded-3xl py-2 sm:py-3 px-2 sm:px-3 text-center hover:border-[#8245ec] transition-colors duration-300 min-w-0 max-w-full"
                >
                  <img
                    src={skill.logo}
                    alt={`${skill.name} logo`}
                    className="w-5 h-5 sm:w-7 sm:h-7 flex-shrink-0"
                  />
                  <span className="text-[10px] sm:text-xs md:text-sm text-gray-300 break-words whitespace-normal leading-tight">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </TiltEffect>
        </div>
      ))}
    </div>

    {/* Soft Skills */}
    <div className="bg-gray-900 backdrop-blur-md px-4 sm:px-8 py-6 sm:py-8 rounded-2xl border border-white shadow-[0_0_20px_1px_rgba(130,69,236,0.3)]">
      <h3 className="text-2xl sm:text-3xl font-semibold text-gray-400 mb-2 text-center">
        Soft Skills
      </h3>
      <p className="text-gray-500 text-sm text-center mb-6">
        How I work with people, priorities, and challenges
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 max-w-4xl mx-auto">
        {SoftSkillsInfo.map((skill) => {
          const Icon = softSkillIcons[skill.icon];
          return (
            <div
              key={skill.name}
              className="group flex items-center gap-3 sm:gap-4 border-2 border-gray-700 rounded-2xl px-4 py-4 sm:py-5 hover:border-[#8245ec] hover:bg-[#8245ec]/5 transition-all duration-300"
            >
              <div className="flex-shrink-0 w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-[#8245ec]/15 flex items-center justify-center group-hover:bg-[#8245ec]/25 transition-colors duration-300">
                <Icon className="text-[#8245ec] text-lg sm:text-xl" />
              </div>
              <span className="text-sm sm:text-base text-gray-300 font-medium leading-snug">
                {skill.name}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  </section>
);

export default Skills;
