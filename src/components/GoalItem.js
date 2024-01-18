import React, { useState } from 'react';
import "../styles/GoalItem.css";
import trash from '../icons/trash.svg';
import check from '../icons/check.svg';

const GoalItem = ({ goal, onToggle, onDelete }) => {
    const [isStriked, setIsStriked] = useState(false);

    const handleToggle = () => {
        setIsStriked(!isStriked);
        onToggle(); // Llama a la función onToggle proporcionada como prop
    };

    return (
        <div className={`goal-box ${isStriked ? 'striked' : ''}`}>
            <li className='goal-list'>
                {goal.text}
                <div className='goal-button-box'>
                    <button onClick={onDelete} className='goal-button'>
                        <img src={trash} className='icon' alt='Trash Icon'></img>
                    </button>
                    <button
                        type="button"
                        onClick={handleToggle}
                        className='check-button'
                    >
                        <img src={check} className='icon' alt='Check Icon'></img>
                    </button>
                </div>
            </li>
        </div>
    );
};

export default GoalItem;
