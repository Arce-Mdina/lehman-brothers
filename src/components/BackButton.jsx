import React from 'react';
import { useNavigate } from 'react-router-dom';

const BackButton = () => {

    let navigate = useNavigate();

    return (
        <div className="back-button">
            <button onClick={() => navigate('/')}>
                <span style={{ color: "dodgerblue" }}>&#x2190;</span>&nbsp;<span style={{ color: "#374a5aff" }}>Home</span>
            </button>
        </div>
    );
};

export default BackButton;