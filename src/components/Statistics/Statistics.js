import React from "react";
import { useLoaderData } from "react-router-dom";
import { ToolTips } from "rechart";
import { BarChart } from "recharts";
import { Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Statistics = () => {
  const datas = useLoaderData();
  const total = (datas.data)
  
  return (
    <div className="mx-auto container mt-40">
    <div style={{ width: '100%', height: 500}}>
    <ResponsiveContainer>
      <BarChart className="mx-auto mt-20" width={500} height={400} data={datas.data}>
          <Bar dataKey="total" fill="#8884d8" />
          <XAxis></XAxis>
          <YAxis></YAxis>
          <Tooltip></Tooltip>
        </BarChart>
      </ResponsiveContainer>
    </div>
    </div>
  );
};

export default Statistics;
