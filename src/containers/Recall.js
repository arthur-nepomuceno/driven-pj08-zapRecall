import React from "react";
import Top from "../components/Top";
import Cards from "../components/Cards";
import Results from "../components/Results"


export default function Recall(){

    const [counter, setCounter] = React.useState(0)
    const total = 1;

    return(
        <div className="start">
            <Top />
            <Cards counter={counter} setCounter={setCounter} total={total}/>
            <Results counter={counter} total={total}/>
        </div>
    );
}