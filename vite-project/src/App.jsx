import { useState } from "react";

function App() {
  // let counter = 5; 

  let [counter, setCounter] = useState(5);

  const addValue = () => {
      console.log("Value added "+ counter)
      setCounter(counter + 1);
      setCounter(counter + 1);
      setCounter(counter + 1);
      setCounter(counter + 1);
  }

  const removeValue = () => {
    console.log("Value Removed "+ counter)
      setCounter(counter-1)
  }

  return (
    <>
    <h1>Hiii ADitii</h1>
    <h1>Counter Value : {counter}</h1>

    <button onClick={addValue}>Add Value : {counter}</button><br /><br />
    <button onClick={removeValue}>Remove Value</button>
    </>
  )
}

export default App
