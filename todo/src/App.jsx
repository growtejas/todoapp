import { useState } from "react";

function App() {
  const [isVisible, setIsVisible] = useState(false);
  const [text, setText] = useState("")
  const [task, setTask] = useState("")
  const [taskList, setTaskList] = useState(["null"])  


  function handleChange(event) {
    setText(event.target.value);
  }

  const updateList = () => {
    if (task.trim() !== "") {
       setTaskList([...taskList, task]);
    }
  }

  return(
   <div>
    
    <h2>Hello</h2>
    <button onClick={() => setIsVisible(!isVisible)} >Toggle Text</button>
    {isVisible && <h2>Hello, I am hidden logic!</h2>}
    

     <p>6 letters</p>

    <input  type="text" value={text} onChange={handleChange} /> 
    <button disabled={text.length <= 5 }>Submit</button>

    {text.length === 0 && <p>Start typing</p>}
    {text.length >= 1 && text.length <= 5 && <p>Too short!</p>}
    {text.length >= 6 && <p>"Ready to submit!</p>}

    <p>You are typing: {text}</p>


    <h2>Todo List</h2>

    <input type="text" value={task} onChange={(e) => setTask(e.target.value)} placeholder="Add Task..." />

    <button onClick={updateList}>Add</button>

    <p>My Todo List</p>

    <ul>
      {taskList.map((taskList, index) => (
        <li key={index}>{taskList}</li>
      ))}
    </ul>

   </div>
  );
}

export default App