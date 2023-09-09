import React from 'react';
import calories from '@/Assets/Images/calories-icon.svg';
import proteines from '@/Assets/Images/protein-icon.svg';
import glucides from '@/Assets/Images/carbs-icon.svg';
import lipides from '@/Assets/Images/fat-icon.svg';
import './Stats.css'


const Stats = ({ userStats }) => {
    return (
        <div className='StatsList'>
            <div className='Stat'>
                <img src={calories} alt='' />
                <div className='StatText'>
                    <h2>{userStats?.calorieCount}Kcal</h2>
                    <p>Calories</p>
                </div>
            </div>
            <div className='Stat'>
                <img src={proteines} alt='' />
                <div className='StatText'>
                    <h2>{userStats?.proteinCount}g</h2>
                    <p>Proteines</p>
                </div>
            </div>
            <div className='Stat'>
                <img src={glucides} alt='' />
                <div className='StatText'>
                    <h2>{userStats?.carbohydrateCount}g</h2>
                    <p>Glucides</p>
                </div>
            </div>
            <div className='Stat'>
                <img src={lipides} alt='' />
                <div className='StatText'>
                    <h2>{userStats?.lipidCount}g</h2>
                    <p>Lipides</p>
                </div>
            </div>
        </div>
    )
}
export default Stats