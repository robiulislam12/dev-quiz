import React from "react";

const Quiz = ({ question }) => {
  const { options, question: qtion } = question;
  return (
    <div className="bg-white p-4 shadow rounded my-4">
      <div className="">
        <h3 className="text-2xl text-center">{qtion}</h3>
        <div className="my-2 grid gap-3 lg:grid-cols-2 md:grid-cols-1 ">
          {options.map((option, index) => (
            <button
              className="border rounded p-4 hover:bg-green-400 w-full duration-200"
              key={index}
            >
              {option}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Quiz;
