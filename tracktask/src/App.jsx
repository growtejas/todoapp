import { useState } from 'react'

import './App.css'

function App() {
  const [text, setText] = useState("");
  const [tasks, setTasks] = useState([]);
  const [completed, setCompleted] = useState(true)


  function addTask(){
    if(text.trim() !== ""){
      setTasks(prevTasks =>[
        ...prevTasks,
      {text: text, completed: false}
      ]);
      setText("");
    }
  }

  function deleteTask(indexToDelete){
    setTasks(prevTasks =>
      prevTasks.filter((task, index) => index !== indexToDelete)

    );
  }
  function toggleTask(indexToChecked){
    setTasks(prevTasks =>
      prevTasks.map((task, index) =>
      index === indexToChecked
    ? {...task, completed: !task.completed}
    : task
    )
    );
  }
  return (
    <div>
      <input type="text" value={text} placeholder='Add Task..' onChange={(e) => setText(e.target.value)} />
      <button onClick={addTask}>Add</button>
     
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            <input type="checkbox"
            checked={task.completed}
            onChange={() => toggleTask(index)} 
            />
            {task.text}
            <button onClick={() => deleteTask(index)} >Delete</button>
            
            </li>
        ))}
      </ul>
    </div>
  )
}

export default App
