import React from "react";
import Welcome from "./Welcome";
import Start from "./Start"

export default function Recall(){
    const [click, setClick] = React.useState(false);

    return(
        <>
            <Welcome className={`welcome ${click? "hide" : ""}`} setClick={setClick}/>
            <Start className={`start ${click? "" : "hide"}`}/>
        </>
    );
}