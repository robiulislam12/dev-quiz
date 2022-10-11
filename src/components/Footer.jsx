import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-white py-6">
      <div className="container mx-auto">
        <div className="flex justify-between items-center gap-5">
          <div className="logo">
            <Link to="/">
              <h1 className="text-3xl font-medium">
                Dev<span className="text-green-500">Quiz</span>
              </h1>
            </Link>
            <p>
              This app is a developer quiz app, so if you wanna be a good
              developer, your need to understand the question
            </p>
          </div>
          <div>
            <p>Love from heart for programming-hero team</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
