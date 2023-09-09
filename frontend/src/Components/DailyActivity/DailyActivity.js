import React from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import './DailyActivity.css';


function DailyActivity({ userDaily }) {
    if (userDaily) {

        userDaily.forEach((element, index) => {
            element.jour = index + 1
        });
        return (
            <div className="Daily">
                <p className='activityaverage'>Activité quotidienne</p>
                <ResponsiveContainer width="92%" height={280}>
                    <BarChart
                        width="92%"
                        height={300}
                        data={userDaily}
                        margin={{ left: 15 }}
                    >
                        <CartesianGrid strokeDasharray="2 2" vertical={false} />

                        <XAxis dataKey='jour' />

                        <YAxis
                            yAxisId={"kilogram"}
                            dataKey="kilogram"
                            domain={["dataMin - 1", "dataMax + 2"]}
                            tick={{ fontWeight: "500", fontSize: "14px" }}
                            tickMargin={40}
                            tickLine={false}
                            orientation="right"
                            axisLine={false}
                        />
                        <YAxis
                            yAxisId={"calories"}
                            hide={true}
                            domain={["dataMin - 100", "dataMax "]}
                        />


                        <Tooltip content={<CustomTooltip />} />
                        <Legend iconType='circle' />
                        <Bar
                            yAxisId={"kilogram"}
                            dataKey="kilogram"
                            fill="#282D30"
                            name=' Poids (kg)'
                            radius={[50, 50, 0, 0]}
                            barSize={6}
                        />
                        <Bar
                            yAxisId={"calories"}
                            dataKey="calories"
                            fill="#E60000"
                            name='Calories brûlées (kCal)'
                            radius={[50, 50, 0, 0]}
                            barSize={6}
                        />
                    </BarChart>
                </ResponsiveContainer>
            </div>

        );


    }
}
const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
        return (
            <div className="custom-tooltip-daily">
                <p> {`${payload[0].value} kg`}</p>
                <p> {`${payload[1].value} Kcal`}</p>
            </div>
        );
    }

    return null;
};
export default DailyActivity
