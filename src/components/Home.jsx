import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#0a192f]">
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-red-800 font-800 text-xl">Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
          MONSURU BABATUNDE
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">
          I am a Junior Software Developer
        </h2>
        <p className=" text-[#8892b0] py-4 max-w-[700px] text-xl">
          I am a driven junior software developer seeking a challenging role to
          apply my expertise in front-end and back-end technologies.I excel in
          creating efficient, user-friendly applications. With a strong
          problem-solving mindset and a passion for innovation, I am dedicated
          to contributing creative solutions to software development projects.
        </p>
        <div>
          <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-red-800 hover:border-red-800">
            View Work
            <span className="group-hover:rotate-90 duration-300">
              {" "}
              <HiArrowNarrowRight className="ml-3 " />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
