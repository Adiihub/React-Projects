import React, { useState, useEffect} from "react";
import NoteContext from "./NoteContext";

const NoteState = (props) => {
    const s1 = {
        "name": "Aditi",
        "class": "7B"
    };

    // ak method bnaungi jo state ko update kregi
    const [state, setstate] = useState(s1);

    const update = () => {
        setTimeout(() => {
            setstate({
                "name": "Kajal",
                "class": "5A"
            }, 1000)
        })
    }

    return (             // ak obj banaya jisme obj ki value obj and update ki update
        <NoteContext.Provider value={{state: state, update: update}}>
        {/*  can write in this way also     {{state, update}}> */}
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;