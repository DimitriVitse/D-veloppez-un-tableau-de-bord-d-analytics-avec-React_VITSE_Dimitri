import React from "react";
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts';
import { renameChart } from "@/Models/models.js";
import './Chart.css';



const Chart = ({ userPerformance }) => {
    return (
        <div className="graph">
            <ResponsiveContainer width="100%" height="100%">
                <RadarChart outerRadius={65} data={userPerformance}>
                    <Radar dataKey="value" fill="#FF0101B2" />
                    <PolarGrid radialLines={false} polarRadius={[5, 15, 35, 50, 65]} />
                    <PolarAngleAxis dataKey="kind" tickFormatter={renameChart()} tick={{ fill: 'white', fontSize: '11', dy: 0 }} />
                </RadarChart>
            </ResponsiveContainer>
        </div>)
};

export default Chart;
