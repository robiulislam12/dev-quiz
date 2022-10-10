import React from 'react';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { Link, useLoaderData } from 'react-router-dom';
import HeroSection from '../components/HeroSection';

const Home = () => {
  const {data: topics} = useLoaderData();
  return (
    <section className='container home-container lg:py-12 mx-auto padding'>
      <HeroSection/>
      <h3 className="text-3xl mb-6 mt-3">Here all our <span className='text-green-500 font-medium underline'>Quiz Topic</span></h3>
      <section className='grid gap-4 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1'> 
        {
          topics.map(topic => <div key={topic.id} className='bg-white p-3 shadow rounded-lg'>
            <div className="bg-slate-200 rounded-lg">
              <img src={topic.logo} alt={topic.name} />
            </div>
            <div className='mt-2'>
              <div className='flex justify-between items-center'>
                <h2 className="text-2xl">{topic.name}</h2>
                <h3 className="text-base">Quizs: {topic.total}</h3>
              </div>
              <Link to={`/topics/${topic.id}`}>
                  <button className='flex items-center bg-blue-500 py-2 px-4 rounded-lg text-white font-medium hover:bg-blue-700 mt-3'>Start Practice <AiOutlineArrowRight/> </button>
              </Link>
            </div>
          </div>)
        }
      </section>
    </section>
  )
}

export default Home