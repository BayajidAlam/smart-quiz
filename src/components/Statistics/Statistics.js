import React,{ PureComponent } from "react";
import { useLoaderData } from "react-router-dom";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const Statistics = () => {
  const datas = useLoaderData();
  console.log(datas.data);
  return (
    <div>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart width={150} height={40} data={datas.data}>
          <Bar dataKey="uv" fill="#ffffff" />
          <XAxis></XAxis>
          <YAxis></YAxis>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Statistics;
