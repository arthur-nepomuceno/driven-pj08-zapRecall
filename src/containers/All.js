import React from "react";
import Welcome from "./Welcome";
import Recall from "./Recall"

export default function All(){
    const [click, setClick] = React.useState(false);

    return(
        <>
            <Welcome className={`welcome ${click? "hide" : ""}`} setClick={setClick}/>
            <Recall className={`recall ${click? "" : "hide"}`}/>
        </>
    );
}