import React from 'react';

const Experience = () => {
  return (
    <section id="experience" className="py-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans">
      <div className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-bold text-white">EXPERIENCE</h2>
        <div className="w-24 h-1 bg-[#8245ec] mx-auto mt-2"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          My professional journey and work experience
        </p>
      </div>
      
      <div className="space-y-8">
        {/* Experience Item */}
        <div className="bg-gray-900 backdrop-blur-md p-8 rounded-2xl border border-gray-700 shadow-[0_0_20px_1px_rgba(130,69,236,0.3)]">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
            <h3 className="text-2xl font-bold text-white">Full Stack Developer</h3>
            <span className="text-[#8245ec] font-semibold">2022 - Present</span>
          </div>
          <h4 className="text-xl text-gray-300 mb-2">Company Name</h4>
          <p className="text-gray-400 leading-relaxed">
            Developed and maintained full-stack web applications using modern technologies.
            Collaborated with cross-functional teams to deliver high-quality software solutions.
          </p>
        </div>

        {/* Add more experience items here */}
        <div className="text-center text-gray-400">
          More experience details coming soon...
        </div>
      </div>
    </section>
  );
};

export default Experience;
