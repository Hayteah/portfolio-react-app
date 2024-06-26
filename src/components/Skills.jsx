import React from "react";
import mongoDB from '../assets/mongodb (1).png'
import reactImg from '../assets/react.png'
import nodeJSImg from '../assets/nodejs.png'
import HTMLImg from "../assets/html5.png";
import expressJS from '../assets/express-js.png'
import javaScript from '../assets/js.png'
import nextJs from '../assets/nextjs_logo.png'
import Tailwind from '../assets/tailwind.png'

const Skills = () => {
  return (
    <div name="skills" className="w-full h-screen bg-black text-gray-300">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-blue-800">
            Skills
          </p>
          <p className="py-4">These are my Tech Stacks</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={reactImg} alt="reactJS icon" />
            <p className="my-4">REACT JS</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={nextJs} alt="GIT icon" />
            <p className="my-4">Next JS</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={nodeJSImg} alt="nodeJs icon" />
            <p className="my-4">NODE JS</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={expressJS} alt="EXPRESSJS icon" />
            <p className="my-4">EXPRESS JS</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={mongoDB} alt="mongoDB icon" />
            <p className="my-4">MONGO DB</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={javaScript} alt="JS icon" />
            <p className="my-4">JAVASCRIPT(ES6)</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Tailwind} alt="CSS3 icon" />
            <p className="my-4">Tailwind CSS</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={HTMLImg} alt="HTML5 icon" />
            <p className="my-4">HTML5</p>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Skills;
