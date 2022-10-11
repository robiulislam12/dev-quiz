import React from 'react';
import { useLoaderData } from 'react-router-dom';
import HeroSection from '../components/HeroSection';
import Topic from '../components/Topic';

const Home = () => {
  const {data: topics} = useLoaderData();
  return (
    <section className='container home-container lg:py-12 mx-auto padding'>
      <HeroSection/>
      <h3 className="text-3xl mb-6  mt-3">Here all our <span className='text-green-500 font-medium underline'>Quiz Topic</span></h3>
      <section className='grid gap-4 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1'> 
        {
          topics.map(topic => <Topic key={topic.id} topic={topic}/> )
        }
      </section>
    </section>
  )
}

export default Home