import { useEffect, useState, fetchWorkouts } from 'react';
import WorkoutForm from './components/WorkoutForm';
import WorkoutList from './components/WorkoutList';

function App() {
  const [workouts, setWorkouts] = useState([]);

  useEffect(() => {
    const fetchWorkouts = async () => {
      try {
        const response = await fetch('http://localhost:4000/api/workouts');
        const data = await response.json();
        setWorkouts(data);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchWorkouts();
  }, []);

  return (
    <div className="App">
      <h1>Workouts</h1>

      {/* Toevoegen formulier */}
      <WorkoutForm refreshWorkouts={fetchWorkouts} />

      {/* Workouts lijst */}
      <WorkoutList workouts={workouts} refreshWorkouts={fetchWorkouts} />
    </div>
  )
}

export default App;