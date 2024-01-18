// App.js
import React, { useState } from 'react';
import './App.css';
import GoalList from './components/GoalList';

function App() {
  const [goals, setGoals] = useState([]);
  const [newGoal, setNewGoal] = useState('');

  const addGoal = () => {
    if (newGoal.trim() !== '') {
      setGoals([...goals, { text: newGoal, completed: false }]);
      setNewGoal('');
    }
  };

  const toggleGoal = (index) => {
    const updatedGoals = [...goals];
    updatedGoals[index].completed = !updatedGoals[index].completed;
    setGoals(updatedGoals);
  };

  const deleteGoal = (index) => {
    const updatedGoals = goals.filter((_, i) => i !== index);
    setGoals(updatedGoals);
  };

  const completedGoalsCount = goals.filter((goal) => goal.completed).length;
  const pendingGoalsCount = goals.length - completedGoalsCount;

  return (

    <div className='main-box'>
      <h1 className='tittle'>Mis Metas</h1>
      <div className='input-main-box'>
        <input
          type="text"
          value={newGoal}
          onChange={(e) => setNewGoal(e.target.value)}
          className='input-box'
          placeholder="Nueva meta..."

        />
        <button onClick={addGoal} className='add-goal-button'>Agregar</button>
      </div>
      <div className='goal-control'>
        <div className='goals-box'><p className='goals-completed'>Completadas: {completedGoalsCount}</p></div>
        
        <div className='goals-box'><p className='goals-pending'>Pendientes: {pendingGoalsCount}</p></div>
        
      </div>
      <GoalList goals={goals} onToggle={toggleGoal} onDelete={deleteGoal} />


    </div>
  );
};

export default App;