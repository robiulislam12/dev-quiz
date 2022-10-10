import React from "react";
import { useLoaderData } from "react-router-dom";
import QuizComponent from "../components/Quiz";

const Quiz = () => {
  const topic = useLoaderData();
  const { name, questions } = topic.data;
  return (
    <div className="container mx-auto lg:py-12 sm:py-8 padding">
      <h2 className="text-4xl text-center">
        Quiz of <span className="text-green-600 font-semibold ">{name}</span>
      </h2>

      <div className="lg:w-6/12 md:w-full sm:w-full mx-auto">
        {questions.map((question) => (
          <QuizComponent key={question.id} question={question} />
        ))}
      </div>
    </div>
  );
};

export default Quiz;
