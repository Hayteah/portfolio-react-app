import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen  bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-left pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-red-800">
              About
            </p>
          </div>
          <div></div>
        </div>

        <div className="max-w-[1000px] w-full  grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p className="text-left md:text-left">Hi, welcome to my portfolio. Please take a look around</p>
          </div>
          <div>
            <p>
              I am a highly motivated and skilled software developer with a
              strong background in full-stack web development. I am passionate
              about creating robust and scalable applications that solve
              real-world problems. With a focus on clean code and user-centered
              design, I strive to deliver high-quality software solutions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
