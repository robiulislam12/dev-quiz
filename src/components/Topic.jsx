import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { Link } from "react-router-dom";

const Topic = ({ topic }) => {
  return (
    <div className="bg-white p-3 shadow rounded-lg">
      <div className="bg-slate-200 rounded-lg">
        <img src={topic.logo} alt={topic.name} />
      </div>
      <div className="mt-2">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl">{topic.name}</h2>
          <h3 className="text-base">Quizs: {topic.total}</h3>
        </div>
        <Link to={`/topics/${topic.id}`}>
          <button className="flex items-center bg-blue-500 py-2 px-4 rounded-lg text-white font-medium hover:bg-blue-700 mt-3">
            Start Practice <AiOutlineArrowRight />{" "}
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Topic;
