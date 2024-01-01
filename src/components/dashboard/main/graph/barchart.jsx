import React from 'react'
import { 
    BarChart,
    Bar,
    CartesianGrid,
    XAxis,
    YAxis,
    Tooltip,
    Legend,
} from 'recharts';
import {data} from './data'




export default function BarGraph({h, w}) {
        // const screenWidth = window.screen.width
      return (
        // <LineChart width={screenWidth<730?350:730} height={250} data={data}
        // margin={{ top: 25, right: 30, left: 0, bottom: 5 }}>
        //     <CartesianGrid strokeDasharray="3 3" />
        //     <XAxis dataKey="name" />
        //     <YAxis  />
        //     <Tooltip />
        //     <Legend />
        //     <Line strokeWidth='3' type="monotone" dataKey="pv" stroke="#0075FF" />
        //     <Line strokeWidth='3' type="monotone" dataKey="uv" stroke="#26D49B" />
        // </LineChart>
        <BarChart width={w} height={h || 250} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="pv" fill="#8884d8" />
        <Bar dataKey="uv" fill="#82ca9d" />
      </BarChart>
      )
}
