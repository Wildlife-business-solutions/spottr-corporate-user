import React from 'react'
import { 
    Line,
    CartesianGrid,
    XAxis,
    YAxis,
    Tooltip,
    Legend,
} from 'recharts';
import {data} from './data'
import { ReLinecharts } from './style';




export default function Graph() {
        const screenWidth = window.screen.width
      return (
        <ReLinecharts width={screenWidth<730?350:730} height={250} data={data}
        margin={{ top: 25, right: 30, left: 0, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis  />
            <Tooltip />
            <Legend />
            <Line strokeWidth='3' type="monotone" dataKey="pv" stroke="#0075FF" />
            <Line strokeWidth='3' type="monotone" dataKey="uv" stroke="#26D49B" />
        </ReLinecharts>
      )
}
