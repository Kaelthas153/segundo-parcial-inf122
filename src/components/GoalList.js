import React from 'react';
import GoalItem from './GoalItem';
import "../styles/GoalList.css";

const GoalList = ({ goals, onToggle, onDelete }) => (
  <ul className='goal-ul-list'> 
    {goals.map((goal, index) => (
      <GoalItem
        key={index}
        goal={goal}
        onToggle={() => onToggle(index)}
        onDelete={() => onDelete(index)}
      />
    ))}
  </ul>
);

export default GoalList;
