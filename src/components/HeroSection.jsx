import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import HeroImg from "../assets/hero-img.png";

const HeroSection = () => {
  return (
    <section className="hero-section py-4 bg-white lg:p-6 rounded mt-4">
      <div className="container mx-auto padding">
        <div className="flex justify-between items-center content">
          <div>
            <h1 className="text-5xl text-green-500 font-bold">
              Test Your Knowledge
            </h1>
            <p className="text-base my-2 lg:w-1/2 md:w-1/2 sm:w-full">
              This is developer quiz apps, for any kind of developer. You will
              learn more and more this practice quiz. Here I added interview
              question, so definitely you will try this
            </p>
            <button className="flex items-center bg-green-500 py-2 px-4 rounded-lg text-white font-medium hover:bg-green-700 mt-3">
              Start Practice <AiOutlineArrowRight />
            </button>
          </div>
          <div>
            <img src={HeroImg} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
