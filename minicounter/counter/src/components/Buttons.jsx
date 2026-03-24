import { useContext } from "react";
import { CountContext } from "./CountContext";  
function Buttons(){
    const {increment, decrement, reset} = useContext (CountContext);
    return(
        <>
      <button onClick={increment}>Increment </button> 
      <button onClick={reset}>Reset </button>
      <button onClick={decrement}>Decrement </button>
        </>
    );
}

export default Buttons;