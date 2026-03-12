import WorkoutItem from './WorkoutItem'

function WorkoutList({ workouts, refreshWorkouts }) {
  if (workouts.length === 0) {
    return <p>Geen workouts gevonden</p>
  }

  return (
    <div>
      {workouts.map(workout => (
        <WorkoutItem
          key={workout._id}
          workout={workout}
          refreshWorkouts={refreshWorkouts}
        />
      ))}
    </div>
  )
}

export default WorkoutList