import { useState } from 'react'

import './App.css'

function App() {
  const [text, setText] = useState("");
  const [tasks, setTasks] = useState([]);
  const [completed, setCompleted] = useState(true)
  const [onoff, setOnoff] = useState(false);
  const [showHide, setShowHide] = useState(false);
  const [txt, setTxt] = useState("")

  const [t, setT] = useState("");
  const [list, setList] = useState([]);

  

  function handleChange(e) {
    setTxt(e.target.value);
  }

  function liveChange(e) {
    setT(e.target.value);
  }
  function add(){
    if(t.trim() !== ""){
      setList(prevlist => [
        ...prevlist,
        {text: t}
      ]);
      setT("")
    }
  }
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
  function change(){
    setOnoff(!onoff);
    }

     function showChange(){
    setShowHide(!showHide);
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
      <button onClick={change}>Button</button>
        {onoff ? <h3>On</h3> :<h3>Off</h3>}

        <button onClick={showChange} >{showHide ? "Hide" : "Show"}</button>
        {showHide && <p>This is secret text</p>}

        <input type="text" value={txt} onChange={handleChange} />
        <h3>{txt.length}</h3>

        <div>
        <input type="text" value={t} onChange={liveChange} />
        <button onClick={add}>Add</button>

        <ul> 
          {list.map((char, index) => (  
            <li key = {index}>
              {char.text}
            </li>         
          ))}
        </ul>
        </div>
    </div>
  )
}

export default App
