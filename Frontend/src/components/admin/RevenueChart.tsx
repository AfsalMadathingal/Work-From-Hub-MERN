import * as React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

export default function RevenueChart() {
  const data = [
    { name: 'Group A', value: 4 },
    { name: 'Group B', value: 3 },
    { name: 'Group C', value: 5 },
    { name: 'Group A', value: 4 },
    { name: 'Group B', value: 3 },
    { name: 'Group C', value: 5 },
  ];

  return (
    <div>
    <BarChart width={500} height={300} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="value" fill="#8884d8" />
    </BarChart>

    </div>

  );
}