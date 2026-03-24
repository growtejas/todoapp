import { createContext, useState } from 'react'
import './App.css'
import Counter from './components/Counter';
import { CountContext } from './components/CountContext';




function App() {
  const [count, setCount] = useState(0)
  
  const increment = () =>{
    setCount(count + 1);
  }

  const decrement = () =>{
    setCount(count - 1);
  }

  const reset = () =>{
    setCount(0);
  }

  return (

    <CountContext.Provider value={{count, increment, decrement, reset}}>
    <Counter/>
    </CountContext.Provider>
  );
}

export default App
