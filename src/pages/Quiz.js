import React from "react";
import { useLoaderData } from "react-router-dom";
import QuizComponent from "../components/Quiz";

const Quiz = () => {
  const topic = useLoaderData();
  const { name, questions } = topic.data;
  return (
    <div className="md:container md:mx-auto lg:py-12">
      <h2 className="text-4xl text-center">
        Quiz of <span className="text-green-600 font-semibold ">{name}</span>
      </h2>

      <div className="w-6/12 mx-auto">
        {questions.map((question) => (
          <QuizComponent key={question.id} question={question} />
        ))}
      </div>
    </div>
  );
};

export default Quiz;
