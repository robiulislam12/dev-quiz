import React from "react";
import { BsFillEyeFill } from "react-icons/bs";
import { toast, ToastContainer } from "react-toastify";

const Quiz = ({ question }) => {
  const { options, question: qtion, correctAnswer } = question;

  const answerCheckHandler = (choiceAnswer) => {
    if (choiceAnswer === correctAnswer) {
      toast.success("Correct Answer!");
    } else {
      toast.error("Wrong Answer!");
    }
  };

  const handleShowCorrectAnswer = (answer) => {
    const rightAnswer = `${options.indexOf(answer) + 1}. ${answer}`;
    toast.success(rightAnswer);
  };

  return (
    <div className="bg-white p-4 shadow rounded my-4">
      <div className="">
        <div className="flex justify-between">
          <h3 className="text-lg text-center pr-4">{qtion}</h3>
          <button onClick={() => handleShowCorrectAnswer(correctAnswer)}>
            <BsFillEyeFill className="text-3xl cursor-pointer " />
          </button>
        </div>
        <div className="my-2 grid gap-3 lg:grid-cols-2 md:grid-cols-1 ">
          {options.map((option, index) => (
            <button
              className="border rounded p-4 hover:bg-green-400 w-full duration-200"
              key={index}
              onClick={() => answerCheckHandler(option)}
            >
              {options.indexOf(option) + 1}. {option}
            </button>
          ))}
        </div>
      </div>
      <ToastContainer autoClose={2000} />
    </div>
  );
};

export default Quiz;
