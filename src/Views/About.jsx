import React from 'react'
import Navbar from '../Components/Navbar.jsx'
import Footer from '../Components/Footer.jsx'


    


const About = () => {
  return (
    <>
      <Navbar />
      {/* Hero Section */}
      <div className="relative w-full h-[320px] flex items-center justify-center bg-gradient-to-r from-blue-600 via-blue-400 to-blue-300 shadow-lg mb-12 rounded-b-3xl overflow-hidden">
        <img src='../assets/train.png' alt="Train" className="absolute opacity-20 w-full h-full object-cover" />
        <div className="relative z-10 text-center">
          <h1 className="text-5xl font-extrabold text-white drop-shadow-lg mb-4 animate-fade-in">About <span className="text-yellow-300">RailEase</span></h1>
          <p className="text-xl text-blue-50 font-medium animate-fade-in">Your modern, hassle-free railway booking experience</p>
        </div>
      </div>

      {/* Main Content Card */}
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl p-8 -mt-[30px] mb-12 border border-blue-100 animate-fade-in">
        <div className="text-center">
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Welcome to <span className="font-semibold text-blue-600">RailEase</span> – your one-stop platform for a smooth and hassle-free railway booking experience. Inspired by IRCTC, RailEase is designed to provide a modern, user-friendly interface with fast navigation and simple tools for travelers.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-semibold text-blue-700 mb-3 flex items-center"><span className="mr-2">🎯</span>Our Vision</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              To make train travel smarter, simpler, and more accessible for everyone by combining technology with convenience. We aim to enhance your railway booking journey through speed, clarity, and modern design.
            </p>
            <h2 className="text-2xl font-semibold text-blue-700 mb-3 flex items-center"><span className="mr-2">✨</span>Why Choose RailEase?</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Unlike traditional booking systems, RailEase focuses on simplicity and modern design. Our platform ensures faster access to information and a smoother navigation experience – all with the goal of making your railway journey stress-free.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-blue-700 mb-3 flex items-center"><span className="mr-2">🚄</span>What We Offer</h2>
            <ul className="list-none text-gray-700 text-left mb-6 space-y-3">
              <li className="flex items-center"><span className="mr-2 text-blue-500">🔍</span>Quick train search with real-time availability</li>
              <li className="flex items-center"><span className="mr-2 text-green-500">📋</span>Easy PNR status checking</li>
              <li className="flex items-center"><span className="mr-2 text-purple-500">💻</span>Modern and responsive UI design</li>
              <li className="flex items-center"><span className="mr-2 text-pink-500">🔒</span>Secure and user-friendly booking flow</li>
              <li className="flex items-center"><span className="mr-2 text-yellow-500">📢</span>Informative pages for guidance and updates</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Developer Card */}
      <div className="max-w-2xl mx-auto bg-gradient-to-r from-blue-100 via-blue-50 to-blue-200 rounded-2xl shadow-lg p-8 mb-12 border border-blue-200 flex flex-col md:flex-row items-center animate-fade-in">
        <img src="https://avatars.githubusercontent.com/u/148010418?v=4" alt="Developer" className="w-24 h-24 rounded-full border-4 border-blue-400 shadow-md mb-4 md:mb-0 md:mr-8" />
        <div>
          <h2 className="text-2xl font-semibold text-blue-800 mb-2 flex items-center"><span className="mr-2">👩‍💻</span>Developer</h2>
          <p className="text-gray-700 leading-relaxed mb-2">
            Hi, I’m <strong>Gayatri</strong>, a BCA student and passionate full-stack web developer. I created <strong>RailEase</strong> as a practice project using <span className="font-medium">React.js</span>, focusing on modern UI/UX principles and real-world usability.
          </p>
          <p className="text-gray-700 leading-relaxed mb-2">
            My journey includes building projects like eCommerce websites, educational platforms, and interactive web apps using HTML, CSS, JavaScript, and React.
          </p>
          <div className="flex space-x-4 mt-2">
            <a href="https://www.linkedin.com/in/gayatri-patil-1908/" target="_blank" rel="noopener noreferrer" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg shadow transition-all flex items-center"><span className="mr-2">🔗</span>LinkedIn</a>
            <a href="https://github.com/Gayatripatil1908" target="_blank" rel="noopener noreferrer" className="bg-gray-800 hover:bg-gray-900 text-white px-4 py-2 rounded-lg shadow transition-all flex items-center"><span className="mr-2">🐙</span>GitHub</a>
          </div>
        </div>
      </div>

      {/* Contact / Credit Section */}
      <div className="max-w-xl mx-auto bg-blue-50 p-6 rounded-xl border border-blue-200 shadow-md text-center animate-fade-in">
        <h3 className="text-lg font-semibold text-blue-800 mb-2">📬 Connect with Me</h3>
        <p className="text-gray-700">
          If you liked RailEase or want to collaborate, feel free to connect with me on LinkedIn or GitHub.  
          <br />
          <span className="italic text-gray-600">
            (You can add your actual links here in future.)
          </span>
        </p>
      </div>
      <Footer />
    </>
  );
};

export default About;

