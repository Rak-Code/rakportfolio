import React from 'react';

const AboutMe = () => {
  return (
    <div id="about" className="relative flex items-center justify-center h-80 bg-gradient-to-r from-teal-100 via-teal-200 to-teal-300" >
      <div className="flex items-center justify-between w-full max-w-4xl px-8">
        {/* About Me Text */}
        <div className="text-left max-w-lg" style={{ fontFamily: 'var(--font-2)' }}>
          <h2 className="text-3xl font-bold text-teal-900">About Me</h2>
          <p className="mt-4 text-xl text-gray-800">
            Hello! I'm Rakesh Gupta, a passionate and innovative software developer with a knack for turning ideas into reality through code.
          </p>
        </div>

        {/* CV Download Button */}
        <div>
          <a
            href="/RakeshGuptaCV.pdf" // Updated path to match the file in the public folder
            download="Rakesh_Gupta_CV.pdf" // Optional: customize the download file name
            className="inline-block px-8 py-4 text-lg font-semibold text-white bg-teal-600 rounded-lg shadow-lg hover:bg-teal-700 transition duration-300 transform hover:scale-105"
          >
            Download CV
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
