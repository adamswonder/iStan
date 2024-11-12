import React from "react";
import "./index.css";
import logo1 from "./assets/Artboard 28 copy 12.png";
import logo2 from "./assets/Artboard 28 copy 5.png";
import titleImage from "./assets/Artboard 28.png";
import deetsImage from "./assets/Artboard 28 copy 12.png";
import ctaImage from "./assets/Artboard 28 copy 5.png";
import saveImage from "./assets/Artboard 28.png";
import mainLogo from "./assets/Logo.png"
import planningPng from "./assets/livingjoyfully.png"
// import backgroundImage from "./assets/Stanbic Card.png";
import qrImage from "./assets/URL.png";

const App: React.FC = () => {
  const handleClick = () => {
    window.open("https://adbud.tech", "_blank");
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gradient-to-b from-blue-50 to-gray-100">
      <div className="ad-container shadow-2xl rounded-lg bg-white" onClick={handleClick}>
        <div className="logo-1 hover:scale-105 transition-transform">
          <img src={logo1} alt="Logo 1" className="filter drop-shadow-md" />
        </div>
        <div className="logo-2 hover:scale-105 transition-transform">
          <img src={logo2} alt="Logo 2" className="filter drop-shadow-md" />
        </div>
        <div className="title hover:scale-105 transition-transform">
          <img src={titleImage} alt="Title" className="filter drop-shadow-lg" />
        </div>
        <div className="deets hover:scale-105 transition-transform">
          <img src={deetsImage} alt="Details" className="filter drop-shadow-md" />
        </div>
        <div className="cta hover:scale-110 transition-transform">
          <img src={ctaImage} alt="Call to Action" className="filter drop-shadow-xl" />
        </div>
        <div className="save hover:scale-105 transition-transform">
          <img src={saveImage} alt="Save the Date" className="filter drop-shadow-md" />
        </div>
        <div className="qr hover:brightness-110 transition-all">
          <img src={qrImage} alt="QR Code" className="filter drop-shadow-lg" />
        </div>
      </div>

      <section className="skeleton flex-1 p-4 space-y-6">
        <div className="flex items-center space-x-6 bg-blue-300 rounded-lg">
          <img src={mainLogo} alt="Logo" className="ml-10 w-32 object-contain" />
          <h3 className="text-blue-900 font-bold tracking-tight text-xl md:text-2xl">EXPLORE SECURE BANKING SOLUTIONS</h3>
        </div>
        
        <div className="hero rounded-xl shadow-lg hover:shadow-xl transition-shadow h-80 md:h-96 overflow-hidden">
          <img src={planningPng} alt="Hero" className="max-w-full h-full object-cover" />
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="content rounded-lg shadow-md hover:shadow-lg transition-shadow">
            {/* <img src={deetsImage} alt="Feature 1" className="w-full h-full object-contain mb-4 rounded-lg" /> */}
          </div>
          <div className="content rounded-lg shadow-md hover:shadow-lg transition-shadow bg-white/80 p-4">
            {/* <img src={backgroundImage} alt="Feature 2" className="w-1/2 object-cover mb-4" /> */}
          </div>
          <div className="content rounded-lg shadow-md hover:shadow-lg transition-shadow bg-white/80 p-4">
            {/* <img src={saveImage} alt="Feature 3" className="w-full h-32 object-cover mb-4" /> */}
          </div>
        </div>
        
        <footer className="bg-blue-900 rounded-b-lg shadow-inner p-6 mt-8">
          <div className="flex items-center justify-between top-10">
            <img src={mainLogo} alt="QR Code" className="w-30 h-10" />
            <img src={qrImage} alt="QR Code" className="w-30 h-10" />
          </div>
        </footer>
      </section>
    </div>
  );
};

export default App;