import React from 'react';
import { LineChart, Line, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { renameAverage } from "@/Models/models.js";
import './DurationActivity.css'



const DurationActivity = ({ userDuration }) => {
    return (

        <div className="DurationContainer">
            <p className='textaverage'>Durée moyenne des sessions</p>
            <ResponsiveContainer width="100%" height="100%" className="duration">
                <LineChart
                    data={userDuration}
                    margin={{ top: 0, right: 0, left: 5, bottom: 0 }}
                    onMouseMove={(e) => {
                        if (e.isTooltipActive === true) {
                            let div = document.querySelector('.duration');
                            let windowWidth = div.clientWidth;
                            let mouseXpercentage = Math.round(
                                (e.activeCoordinate.x / windowWidth) * 100
                            );
                            div.style.background = `linear-gradient(90deg, rgba(255,0,0,1) ${mouseXpercentage}%, rgba(175,0,0,1.5) ${mouseXpercentage}%, rgba(175,0,0,1.5) 100%)`;
                        }
                    }}
                >
                    <Tooltip content={<CustomTooltip />} />
                    <XAxis
                        dataKey="day"
                        stroke="#ffffff"
                        axisLine={false}
                        tickLine={false}
                        tickFormatter={renameAverage()}
                    />
                    <YAxis
                        dataKey="sessionLength"
                        hide={true}
                        type="number"
                        domain={['dataMin -15', 'dataMax + 45']}
                    />
                    <Line type="natural" dataKey="sessionLength" name="Durée (min)" stroke="white" dot={false} strokeWidth={2} />
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}






const CustomTooltip = ({ active, payload }) => {

    return (
        active && (
            <div className="CustomTooltip">

                <p> {`${payload[0].value} min`}</p>
            </div>
        )
    );
}

export default DurationActivity

