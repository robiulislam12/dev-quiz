import React from "react";
import { useLoaderData } from "react-router-dom";
import {
  Area,
  Bar,
  CartesianGrid,
  ComposedChart,
  Legend,
  Line,
  Tooltip,
  XAxis,
  YAxis
} from "recharts";

const Statistics = () => {
  const { data } = useLoaderData();

  // console.log(topics)
  return (
    <section className="statistics_section lg:py-12 md:py-8">
      <div className="container mx-auto padding">
        <h2 className="text-3xl text-center">See Our Quizs Total</h2>
        {/* It's for desktop */}
        <ComposedChart
          width={850} 
          height={450} 
          data={data}
          className="container mx-auto padding mt-6 responsive"
          >
          <XAxis dataKey="name" />
          <YAxis dataKey="total" />
          <Tooltip />
          <Legend />
          <CartesianGrid stroke="#9AA2AF" strokeDasharray="3 3" />
          <Area type="monotone" dataKey="total" fill="#8884d8" stroke="#8884d8" />
          <Bar dataKey="total" barSize={30} fill="#413ea0" />
          <Line type="monotone" dataKey="total" stroke="#38BCF8" strokeWidth={3} />
        </ComposedChart>

        {/* it's fot mobile */}
        <ComposedChart
          width={250} 
          height={200} 
          data={data}
          className="padding mt-6 lg:hidden"
          >
          <XAxis dataKey="name" />
          <YAxis dataKey="total" />
          <Tooltip />
          <Legend />
          <CartesianGrid stroke="#9AA2AF" strokeDasharray="3 3" />
          <Area type="monotone" dataKey="total" fill="#8884d8" stroke="#8884d8" />
          <Bar dataKey="total" barSize={10} fill="#413ea0" />
          <Line type="monotone" dataKey="total" stroke="#38BCF8" strokeWidth={2} />
        </ComposedChart>
      </div>
    </section>
  );
};

export default Statistics;
