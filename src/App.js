import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';
import Footer from './components/Footer';

function App() {


  const [tasks, setTasks] = useState([]);
  const [showForm, setShowForm] = useState(false);



  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  }


  const addTask = (task) => {
    setTasks([...tasks, task]);
  }

  const toggleReminder = (taskId) => {
    setTasks(tasks.map(task => {
      if (task.id === taskId) {
        task.reminder = !task.reminder
      }
      return task;
    }));
  }


  const onAddClick = () => {
    setShowForm(!showForm)
  }

  return (
    <>
      <div className="container">
        <Header title="Taskify" showForm={showForm} onAddClick={onAddClick} />
        {showForm && <AddTask onAddTask={addTask} />}
        <hr />
        <br />
        {
          tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} /> : 'No tasks!'
        }
      </div>
      <div className="footer">
        <Footer />
      </div>
    </>
  );
}

export default App;
