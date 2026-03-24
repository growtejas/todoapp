import { useContext } from "react";
import { CountContext } from "./CountContext";
import Buttons from "./Buttons";
function Counter (){
    const {count} = useContext(CountContext);
    return (
    <div>

      <h1>{count}</h1>
        <Buttons/>

    </div>
  );
}

export default Counter;