import React from "react";
import { toast, ToastContainer } from "react-toastify";

const Quiz = ({ question }) => {
  const { options, question: qtion, correctAnswer } = question;

  const answerCheckHandler = (choiceAnswer) => {
    if (choiceAnswer === correctAnswer) {
      toast.success("Correct Answer!", { autoClose: 300 });
    } else {
      toast.error("Wrong Answer!", { autoClose: 300 });
    }
  };

  return (
    <div className="bg-white p-4 shadow rounded my-4">
      <div className="">
        <h3 className="text-2xl text-center">{qtion}</h3>
        <div className="my-2 grid gap-3 lg:grid-cols-2 md:grid-cols-1 ">
          {options.map((option, index) => (
            <button
              className="border rounded p-4 hover:bg-green-400 w-full duration-200"
              key={index}
              onClick={() => answerCheckHandler(option)}
            >
              {option}
            </button>
          ))}
        </div>
      </div>
      <ToastContainer autoClose={3000} />
    </div>
  );
};

export default Quiz;
