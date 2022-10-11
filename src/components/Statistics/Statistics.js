import React from "react";
import { useLoaderData } from "react-router-dom";
import { ToolTips } from "rechart";
import { BarChart } from "recharts";
import { Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Statistics = () => {
  const datas = useLoaderData();
  const total = (datas.data)
  
  return (
    <div className="mx-auto">
      <h1>Chart</h1>
      <BarChart className="mx-auto mt-20" width={1000} height={700} data={datas.data}>
          <Bar dataKey="total" fill="#8884d8" />
          <XAxis></XAxis>
          <YAxis></YAxis>
          <ToolTips></ToolTips>
        </BarChart>
    </div>
  );
};

export default Statistics;
