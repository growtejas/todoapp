import { createContext, useState } from 'react';
import './App.css';
import Counter from './components/Counter';
import { CountContext } from './components/CountContext';




 function App() {
  const [count, setCount] = useState(0)
  const [hide, setHide] = useState(false);


  const increment = () =>{
    if(count <= 9){  
    setCount(count + 1);
  }
  }

  const decrement = () =>{
     if(count >= 1){  
    setCount(count - 1);
    }
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
//d