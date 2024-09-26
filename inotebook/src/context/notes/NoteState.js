import React, { useState } from "react";
import NoteContext from "./NoteContext"; // Import NoteContext here

const NoteState = (props) => {
    const notesInitial = [
        {
          "_id": "66f475359cdca3f0145de27b",
          "user": "66f451f9fd38d3fac2f1a7b8",
          "title": "my title updated",
          "description": "please wake up early updated",
          "tag": "Personal",
          "timestamp": "2024-09-25T20:40:21.649Z",
          "__v": 0
        },
        {
          "_id": "66f475c79cdca3f0145de27e",
          "user": "66f451f9fd38d3fac2f1a7b8",
          "title": "my title",
          "description": "please wake up early",
          "tag": "Personal",
          "timestamp": "2024-09-25T20:42:47.891Z",
          "__v": 0
        },
        {
          "_id": "66f47c3f5327f9efecdc9c51",
          "user": "66f451f9fd38d3fac2f1a7b8",
          "title": "Market",
          "description": "Go to Market & buy mango",
          "tag": "Personal",
          "timestamp": "2024-09-25T21:10:23.125Z",
          "__v": 0
        },
        {
          "_id": "66f47e5f5327f9efecdc9c58",
          "user": "66f451f9fd38d3fac2f1a7b8",
          "title": "Food",
          "description": "Buy Pizza",
          "tag": "Personal",
          "timestamp": "2024-09-25T21:19:27.317Z",
          "__v": 0
        }
      ]
      
      const [notes, setnotes] = useState(notesInitial);

    return (             
        <NoteContext.Provider value={{notes, setnotes}}>
            {props.children}
        </NoteContext.Provider>
    );
}

export default NoteState;
