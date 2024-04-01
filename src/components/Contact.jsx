import React from "react";

const contact = () => {
  return (
    <div
      name="contact"
      className="w-full md:h-screen text-gray-300 bg-black p-4"
    >
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <form
          method="POST"
          action="https://getform.io/f/c4356419-1486-449c-92c0-b445244f64ad"
          className="flex flex-col max-w-[600px] w-full"
        >
          <div className="pb-8">
            <p className="text-4xl font-bold inline border-b-4 border-blue-800 text-gray-300">
              Contact
            </p>
            <p className="text-gray-300 py-4">
              Submit the form below or send me a email - babatea4real@yahoo.com
            </p>
          </div>
          <input
            required
            className=" p-2 bg-[#ccd6f6] text-black"
            type="text"
            placeholder="Name"
            name="name"
          />
          <input
            required
            className="my-4 p-2 bg-[#ccd6f6]  text-black"
            type="email"
            placeholder="Email"
            name="email"
          />
          <textarea
            required
            className="bg-[#ccd6f6] p-2  text-black"
            name="message"
            placeholder="Message"
            rows="10"
          ></textarea>
          <button className="text-white border-2 hover:bg-red-blue hover:border-blue-800 px-4 py-3 my-8 mx-auto flex items-center">
            Let's Connect
          </button>
        </form>
      </div>
    </div>
  );
};

export default contact;
