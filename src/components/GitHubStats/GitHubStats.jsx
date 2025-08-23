import React from "react";

const GitHubStats = () => {
  return (
    <section
      id="github-stats"
      className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans relative"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">GITHUB STATISTICS</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          My coding journey and contributions on GitHub
        </p>
      </div>

      {/* GitHub Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {/* Total Repositories */}
        <div className="bg-gray-900 backdrop-blur-md rounded-2xl shadow-2xl border border-white p-6 text-center hover:shadow-purple-500/50 transition-all duration-300">
          <div className="text-4xl font-bold text-purple-500 mb-2">9+</div>
          <div className="text-gray-400 text-sm">Total Repositories</div>
        </div>

        {/* Total Commits */}
        <div className="bg-gray-900 backdrop-blur-md rounded-2xl shadow-2xl border border-white p-6 text-center hover:shadow-purple-500/50 transition-all duration-300">
          <div className="text-4xl font-bold text-purple-500 mb-2">500+</div>
          <div className="text-gray-400 text-sm">Total Commits</div>
        </div>

        {/* Languages Used */}
        <div className="bg-gray-900 backdrop-blur-md rounded-2xl shadow-2xl border border-white p-6 text-center hover:shadow-purple-500/50 transition-all duration-300">
          <div className="text-4xl font-bold text-purple-500 mb-2">8+</div>
          <div className="text-gray-400 text-sm">Languages Used</div>
        </div>

        {/* Stars Earned */}
        <div className="bg-gray-900 backdrop-blur-md rounded-2xl shadow-2xl border border-white p-6 text-center hover:shadow-purple-500/50 transition-all duration-300">
          <div className="text-4xl font-bold text-purple-500 mb-2">2+</div>
          <div className="text-gray-400 text-sm">Stars Earned</div>
        </div>
      </div>

      {/* Enhanced GitHub Contribution Calendar */}
      <div className="bg-gray-900 backdrop-blur-md rounded-2xl shadow-2xl border border-white p-8 mb-8">
        <h3 className="text-2xl font-bold text-white text-center mb-6">
          🗓️ Contribution Calendar
        </h3>
        
        {/* Custom Calendar Header */}
        <div className="flex justify-center items-center mb-6">
          <div className="bg-gradient-to-r from-purple-600 to-pink-500 text-white px-6 py-3 rounded-xl font-semibold shadow-lg">
            <span className="text-lg">📊 My GitHub Activity</span>
          </div>
        </div>

        {/* Enhanced Calendar with Custom Styling */}
        <div className="bg-[#0d1117] rounded-xl p-6 border border-gray-700 shadow-inner">
          <div className="flex justify-center mb-4">
            <img
              src="https://ghchart.rshah.org/8B5CF6/PranavArora20"
              alt="GitHub Contribution Calendar"
              className="w-full max-w-5xl rounded-lg shadow-2xl border border-gray-600"
            />
          </div>
          
          {/* Calendar Legend */}
          <div className="flex justify-center items-center space-x-4 mt-6 text-sm text-gray-400">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-[#0d1117] border border-gray-600 rounded-sm"></div>
              <span>Less</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-[#8B5CF6] rounded-sm"></div>
              <span>More</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-[#A855F7] rounded-sm"></div>
              <span>Most</span>
            </div>
          </div>
        </div>

        {/* Activity Summary */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
          <div className="bg-[#1a1a2e] rounded-lg p-4 text-center border border-gray-700">
            <div className="text-2xl font-bold text-purple-400">365</div>
            <div className="text-gray-400 text-sm">Days Active</div>
          </div>
          <div className="bg-[#1a1a2e] rounded-lg p-4 text-center border border-gray-700">
            <div className="text-2xl font-bold text-purple-400">12</div>
            <div className="text-gray-400 text-sm">Months Streak</div>
          </div>
          <div className="bg-[#1a1a2e] rounded-lg p-4 text-center border border-gray-700">
            <div className="text-2xl font-bold text-purple-400">24/7</div>
            <div className="text-gray-400 text-sm">Commitment</div>
          </div>
        </div>
      </div>

      {/* GitHub Stats Cards */}
      <div className="bg-gray-900 backdrop-blur-md rounded-2xl shadow-2xl border border-white p-8">
        <h3 className="text-2xl font-bold text-white text-center mb-6">
          📈 Detailed Statistics
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="text-center">
            <img
              src="https://github-readme-stats.vercel.app/api?username=PranavArora20&show_icons=true&theme=radical&hide_border=true&bg_color=0D1117&title_color=8B5CF6&text_color=9CA3AF&icon_color=8B5CF6"
              alt="GitHub Stats"
              className="w-full rounded-xl shadow-lg border border-gray-700"
            />
          </div>
          
          <div className="text-center">
            <img
              src="https://github-readme-stats.vercel.app/api/top-langs/?username=PranavArora20&layout=compact&theme=radical&hide_border=true&bg_color=0D1117&title_color=8B5CF6&text_color=9CA3AF"
              alt="Top Languages"
              className="w-full rounded-xl shadow-lg border border-gray-700"
            />
          </div>
        </div>

        {/* Additional GitHub Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <div className="text-center">
            <img
              src="https://github-readme-streak-stats.herokuapp.com/?user=PranavArora20&theme=radical&hide_border=true&background=0D1117&stroke=8B5CF6&ring=8B5CF6&fire=8B5CF6&currStreakNum=8B5CF6&currStreakLabel=8B5CF6&sideNums=8B5CF6&sideLabels=8B5CF6&dates=9CA3AF"
              alt="GitHub Streak"
              className="w-full rounded-xl shadow-lg border border-gray-700"
            />
          </div>
          
          <div className="text-center">
            <img
              src="https://github-readme-activity-graph.vercel.app/graph?username=PranavArora20&theme=radical&hide_border=true&bg_color=0D1117&color=8B5CF6&line=8B5CF6&point=8B5CF6&area_color=8B5CF6&area=true"
              alt="GitHub Activity Graph"
              className="w-full rounded-xl shadow-lg border border-gray-700"
            />
          </div>
        </div>

        {/* GitHub Profile Link */}
        <div className="text-center mt-8">
          <a
            href="https://github.com/PranavArora20"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 cursor-pointer shadow-lg hover:shadow-purple-500/25 transform hover:scale-105"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
            </svg>
            <span className="text-lg">View My GitHub Profile</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default GitHubStats;
