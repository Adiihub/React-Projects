import { useState } from "react";

function App() {
  const [color, setColor] = useState("olive");

  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button
            className="outline-non px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "red" }}
            onClick={() => setColor('Red')}
          >
            Red
          </button>
          <button
            className="outline-non px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "Green" }}
            onClick={() => setColor('Green')}
          >
            Green
          </button>
          <button
            className="outline-non px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "blue" }}
            onClick={() => setColor('Blue')}
          >
            Blue
          </button>
          <button
            className="outline-non px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "yellow" }}
            onClick={() => setColor('Yellow')}
          >
            Yellow
          </button>
          
        </div>
      </div>
    </div>
  );
}

export default App;
