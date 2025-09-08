import React from "react";
import TypingEffect from "../TypingEffect/TypingEffect";
import TiltEffect from "../TiltEffect/TiltEffect";
import profileImage from "../../assets/Profile_Pic.png";

const About = () => {
  return (
    <section
      id="about"
      className="px-4 md:px-[7vw] lg:px-[20vw] font-sans pt-32 md:pt-36 lg:pt-40 pb-16"
      style={{ scrollMarginTop: "100px" }}
    >
      <div className="flex flex-col-reverse md:flex-row justify-between items-center mb-8">
        {/* Left Side */}
        <div className="md:w-1/2 text-center md:text-left mt-8 md:mt-0">
          {/* Greeting */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 leading-tight">
            Hi, I am
          </h1>
          {/* Name */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
            Pranav Arora
          </h2>
          {/* Skills Heading with Typing Effect */}
          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-[#8245ec] leading-tight">
            {/* <span className="text-white">I am a </span> */}
            <TypingEffect
              text={[
                "Full Stack Developer",
                "Frontend Developer",
                "Backend Developer",
                "UI/UX Designer",
                "Future Senior Developer",
                "Agentic AI Enthusiast",
              ]}
              speed={100}
              eraseSpeed={50}
              typingDelay={500}
              eraseDelay={2000}
            />
          </h3>
          {/* About Me Paragraph */}
          <p className="text-base sm:text-lg md:text-lg text-gray-400 mb-10 mt-8 leading-relaxed">
            I'm a detail-oriented Full Stack Web Developer with hands-on
            experience in building responsive and scalable applications. Skilled
            in React, Node.js, and MongoDB, I specialize in creating seamless
            user experiences and efficient backend systems. With a strong
            foundation in data structures, algorithms, and modern web
            technologies, I thrive on solving complex problems and optimizing
            performance.
          </p>
          {/* Resume Button */}
          <a
            href="https://drive.google.com/file/d/115jJMGwZF0KRhoClsZUMoT3jWB-Q0YOF/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-white py-3 px-8 rounded-full mt-5 text-lg font-bold transition duration-300 transform hover:scale-105"
            style={{
              background: "linear-gradient(90deg, #8245ec, #a855f7)",
              boxShadow: "0 0 2px #8245ec, 0 0 2px #8245ec, 0 0 40px #8245ec",
            }}
          >
            DOWNLOAD CV
          </a>
        </div>
        {/* Right Side */}
        <div className="md:w-1/2 flex justify-center md:justify-end">
          <TiltEffect
            className="w-48 h-48 sm:w-64 sm:h-64 md:w-[30rem] md:h-[30rem] border-4 border-purple-700 rounded-full"
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            scale={1.05}
          >
            <img
              src={profileImage}
              alt="Tarun Kaushik"
              className="w-full h-full rounded-full object-cover drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)]"
            />
          </TiltEffect>
        </div>
      </div>
    </section>
  );
};

export default About;
