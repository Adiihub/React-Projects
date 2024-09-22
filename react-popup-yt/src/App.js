import React, { useState, useEffect } from "react";
// import Popup from "./components/Popup"; 

function App() {
  const [showPopup, setShowPopup] = useState(false);
  const [timedPopup, setTimedPopup] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setTimedPopup(true);
    }, 3000);
  }, []);

  return (
    <div className="App">
      <main>
        <h1>React Popups</h1>
        <br /><br />
        <button onClick={() => setShowPopup(true)}>Open Popup</button>
      </main>

      <Popup trigger={showPopup} setTrigger={setShowPopup}>
        <h3>My PopUp</h3>
        <h1>This is my button triggered PopUp</h1>
      </Popup>

      <Popup trigger={timedPopup} setTrigger={setTimedPopup}>
        <h3>My PopUp</h3>
        <h1>This is my Time Triggered PopUp</h1>
      </Popup>
    </div>
  );
}

export default App;
