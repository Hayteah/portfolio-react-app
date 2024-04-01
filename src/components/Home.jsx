import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-black">
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-blue-800 font-800 text-xl">Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
          MONSURU BABATUNDE
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">
          I am a  Software Developer
        </h2>
        <p className=" text-[#8892b0] py-4 max-w-[700px] text-xl">
          I am a driven software developer seeking a challenging role to
          apply my expertise in front-end and back-end technologies.I excel in
          creating efficient, user-friendly applications. With a strong
          problem-solving mindset and a passion for innovation, I am dedicated
          to contributing creative solutions to software development projects.
        </p>
        <div>
          <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-blue-800 hover:border-blue-800">
            <Link to="projects" smooth={true} duration={500}>
              View Projects
            </Link>
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-3 " />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
