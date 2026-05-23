import React from "react";
import { FaFileAlt } from "react-icons/fa";
import { handleDownloadResume } from "../../utils/downloadResume";

const ResumeNavButton = ({ iconSize = 22, className = "" }) => (
  <button
    type="button"
    onClick={handleDownloadResume}
    aria-label="Download resume"
    className={`group flex items-center gap-0 text-gray-300 hover:text-[#8245ec] transition-all duration-300 cursor-pointer ${className}`}
  >
    <FaFileAlt size={iconSize} className="shrink-0" />
    <span className="max-w-0 overflow-hidden opacity-0 group-hover:max-w-[4.5rem] group-hover:opacity-100 group-hover:ml-2 text-sm font-medium whitespace-nowrap transition-all duration-300">
      Resume
    </span>
  </button>
);

export default ResumeNavButton;
