import { useState } from 'react'

import './App.css'

function App() {
  const [text, setText] = useState("");
  const [listText, setListText] = useState([]);

  const addbtn = () => {
     if (text.trim() !== "") {
       setListText(prev => [...prev, text]);
       setText("");
    }
  }

  return (
    <div>
      <input 
      type="text" 
      value={text} 
      onChange={(e) => setText(e.target.value)}/>
      
      <button disabled={text.length <= 5} onClick={addbtn}>Add</button>

      <button disabled={text.length < 1} onClick = {() => {setText("")} }>Clear</button>
      <h2>{listText}</h2>

      <button hidden={text.length <= 5} >Show</button>
      <ul>
        {listText.map((item, index) => {
          <li key={index}>{item}</li>
        })}
      </ul>
    </div>
  )
}

export default App
