import React from "react";
import "./App.css";

import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
// import Experience from "./components/Experience/Experience";
import Work from "./components/Work/Work";
import GitHubStats from "./components/GitHubStats/GitHubStats";
import Education from "./components/Education/Education";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import BlurBlob from "./BlurBlob";

function App() {
  return (
    <>
      {/* <div className="text-6xl text-red-700">Hello From App</div> */}
      <div className="bg-[#050414]">
        <BlurBlob
          position={{ top: "35%", left: "20%" }}
          size={{ width: "30%", height: "40%" }}
        />

        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
        <div className="relative pt-20">
          <Navbar />
          {/* Landing Page Section */}
          <section id="home" className="min-h-screen flex items-center justify-center px-4 md:px-[7vw] lg:px-[20vw]">
            <div className="text-center">
              <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white mb-6 leading-tight">
                <span className="text-[#8245ec]">&lt;</span>
                <span className="text-white">Pranav</span>
                <span className="text-[#8245ec]">/</span>
                <span className="text-white">Arora</span>
                <span className="text-[#8245ec]">&gt;</span>
              </h1>
              <p className="text-xl sm:text-2xl md:text-3xl text-gray-400 mb-8 font-semibold">
                Full Stack Developer & UI/UX Designer
              </p>
              <p className="text-lg sm:text-xl text-gray-500 mb-12 max-w-3xl mx-auto leading-relaxed">
                Passionate about creating innovative web solutions and turning ideas into reality through code.
                Specialized in modern web technologies and user experience design.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}
                  className="px-8 py-4 bg-gradient-to-r from-[#8245ec] to-[#a855f7] text-white font-bold rounded-full hover:scale-105 transition-transform duration-300 shadow-[0_0_20px_1px_rgba(130,69,236,0.5)]"
                >
                  Get Started
                </button>
                <button 
                  onClick={() => document.getElementById('work').scrollIntoView({ behavior: 'smooth' })}
                  className="px-8 py-4 border-2 border-[#8245ec] text-[#8245ec] font-bold rounded-full hover:bg-[#8245ec] hover:text-white transition-all duration-300"
                >
                  View Projects
                </button>
              </div>
            </div>
          </section>
          <About />
          <Skills />
          {/* <Experience /> */}
          <Work />
          <GitHubStats />
          <Education />
          <Contact />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
