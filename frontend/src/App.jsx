import { useEffect, useState, fetchWorkouts } from 'react';
import Login from './components/Login';
import WorkoutForm from './components/WorkoutForm';
import WorkoutList from './components/WorkoutList';

function App() {
  const [workouts, setWorkouts] = useState([]);
  const [token, setToken] = useState(localStorage.getItem('token'));

  const handleLogout = () => {
    localStorage.removeItem('token');
    setToken(null);
    console.log('Uitgelogd');
  };

  useEffect(() => {
    const fetchWorkouts = async () => {


      if (!token) {
        console.log('Niet ingelogd');
        return;
      }

      try {
        const response = await fetch('http://localhost:4000/api/workouts', {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });

        const data = await response.json();

        if (response.ok) {
          setWorkouts(data);
        } else {
          console.error(data.error);
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchWorkouts();
  }, [token]);

  return (
    <div className="App">
      <h1>Workouts</h1>

      {!token ? (
        <Login setToken={setToken} />
      ) : (
        <>
          <WorkoutForm refreshWorkouts={fetchWorkouts} />
          <WorkoutList workouts={workouts} refreshWorkouts={fetchWorkouts} />
        </>
      )}
      {token && <button onClick={handleLogout}>Uitloggen</button>}
    </div>
  )
}

export default App;