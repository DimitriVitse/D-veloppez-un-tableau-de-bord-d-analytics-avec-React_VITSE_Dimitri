import React, { useEffect, useState } from 'react';
import { getUserData } from '@/_services/axios.service.ts';
import MockButton from '@/Components/ButtonMock/ButtonMock.js';
import { userDataModel, activityDataModel, averageDataModel, performanceDataModel } from "@/Models/models.js";
import { Stats, Chart, DurationActivity, DailyActivity, Score } from '@/Components/DashboardComponent.js'

import "./Dashboard.css";


const Dashboard = () => {
    const [userId, setUserId] = useState(12); // Default user ID is 12
    const [userData, setUserData] = useState(null);
    const [paramsmock, setparamsmock] = useState(true); // Default to use mock data
    const [formattedUserData, setformattedUserData] = useState(null);
    const [formattedUserPerformance, setformattedUserPerformance] = useState(null);
    const [formattedUserActivity, setformattedUserActivity] = useState(null);
    const [formattedUserAverage, setformattedUserAverage] = useState(null);

    const [error, setError] = useState(null);

    useEffect(() => {
        // Assuming userId and paramsmock are defined
        getUserData(userId, paramsmock)
            .then((data) => {
                if ('error' in data) {
                    setError(data.error);
                } else {
                    setUserData(data);
                }
            })
            .catch((error) => {
                console.error('Error:', error);
                setError('An error occurred while fetching data.');
            });

    }, [userId, paramsmock]);

    // Function to update the paramsmock state
    const toggleParamsmock = () => {
        setparamsmock(prevParamsmock => !prevParamsmock);
    };

    // Function to update the userId state
    const changeUserId = () => {
        // Toggle between 12 and 18
        setUserId(prevUserId => (prevUserId === 12 ? 18 : 12));
    };

    useEffect(() => {
        // Set formattedUserData when userData is not null
        if (userData) {
            setformattedUserData(userDataModel(userData[0].data));
            setformattedUserActivity(activityDataModel(userData[3].data))
            setformattedUserPerformance(performanceDataModel(userData[2].data))
            setformattedUserAverage(averageDataModel(userData[1].data))
        }
    }, [userData]);
    if (error) {
        return <div>Error: {error}</div>;
    }
    return (
        <div className='Analytics'>
            <div className='User'>
                <h1>Bonjour <span>{formattedUserData?.firstName}</span></h1>
                <h2>Félicitation ! Vous avez explosé vos objectifs hier 👏</h2>
            </div>
            <div className='Dashboards'>
                <div className='Activity'>
                    <DailyActivity
                        userDaily={formattedUserActivity?.sessions} />
                    <DurationActivity
                        userDuration={formattedUserAverage?.sessions} />
                    <Chart
                        userPerformance={formattedUserPerformance?.sessions} />
                    <Score
                        userScore={formattedUserData?.todayScore} />
                </div>
                <Stats
                    userStats={formattedUserData?.keyData} />
            </div>
            <MockButton
                buttonparamsmock={paramsmock}
                toggleParamsmock={toggleParamsmock}
                changeUserId={changeUserId}
            />

        </div>
    );
};

export default Dashboard;
