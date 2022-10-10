import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Quiz = () => {
  const topic = useLoaderData();
  console.log(topic.data)
  return (
    <div>Quiz</div>
  )
}

export default Quiz