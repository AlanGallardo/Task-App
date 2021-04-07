import Header from './components/Header'
import Tasks from './components/Tasks'
import { useState } from 'react'
import AddTask from './components/AddTask'

// FUNCTION APP
function App() {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([
    {
        id : 1,
        text : 'Doctors Appoinment',
        day : 'Feb 5th at 2:30pm',
        reminder : true
    },
    {
        id : 2,
        text : 'Meeting at School',
        day : 'Feb 6th at 1:30pm',
        reminder : true
    },
    {
        id : 3,
        text : 'Food Shopping',
        day : 'Feb 5th at 2:30pm',
        reminder : false
    }
  ])

  // ADD TASK
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1

    const newTask = { id, ...task }
    setTasks([...tasks, newTask])
  }

  // DELETE TASK
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  // TOGGLE REMINDER
  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => task.id === id ? { ...task, reminder : !task.reminder } : task))
  }

  return (
    <div className="App">
      <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask}/>
      {showAddTask && <AddTask onAdd={addTask}/>}
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} /> : 'No Tasks to Show'}
    </div>
  );
}

export default App;

// CLASS APP
/*import React, { Component } from 'react'

export default class App extends Component {
  render() {
    return (
      <Header />
    )
  }
}*/
