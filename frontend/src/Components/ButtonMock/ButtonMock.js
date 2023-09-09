import React from 'react';
import './Buttonmock.css';


const MockButton = ({ buttonparamsmock, toggleParamsmock, changeUserId }) => {
    const handleToggleParamsmock = () => {
        toggleParamsmock();
    };

    const handleUserIdChange = event => {
        const newUserId = parseInt(event.target.value);
        changeUserId(newUserId);
    };
    console.log(buttonparamsmock)
    return (
        <div className="mock">
            <label>
                Select User ID:
                <select onChange={handleUserIdChange}>
                    <option value={12}>User ID 12</option>
                    <option value={18}>User ID 18</option>
                </select>
            </label>
            <label>
                Data Source:
                <select onChange={handleToggleParamsmock}>
                    <option value={true}>Mockstore</option>
                    <option value={false}>API</option>
                </select>
            </label>
            <p>buttonparamsmock: {buttonparamsmock ? 'Mockstore' : 'API'}</p>
        </div>
    );
};

export default MockButton;