import UpdateWorkout from './UpdateWorkout'
import DeleteWorkout from './DeleteWorkout'

function WorkoutItem({ workout, refreshWorkouts }) {
  return (
    <div>
      <h3>{workout.title}</h3>
      <p>Reps: {workout.reps}</p>
      <p>Load: {workout.load} kg</p>

      <UpdateWorkout
        workoutId={workout._id}
        currentTitle={workout.title}
        currentReps={workout.reps}
        currentLoad={workout.load}
        refreshWorkouts={refreshWorkouts} // refresht lijst
      />

      <DeleteWorkout
        workoutId={workout._id}
        workoutTitle={workout.title}
        refreshWorkouts={refreshWorkouts} // refresht lijst
      />
    </div>
  )
}

export default WorkoutItem