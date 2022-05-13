import React from "react";
import Top from "../components/Top";
import Cards from "../components/Cards";
import Results from "../components/Results"


export default function Recall(){

    const [counter, setCounter] = React.useState(0)
    const total = 3;
    const [results, setResults] = React.useState([])
    const [error, setError] = React.useState(0)
    const [endMessage, setEndMessage] = React.useState("")

    return(
        <div className="start">
            <Top />
            <Cards counter={counter} 
                    setCounter={setCounter} 
                    total={total}
                    results={results} 
                    setResults={setResults} 
                    setEndMessage={setEndMessage} 
                    error={error} 
                    setError={setError}/>
            <Results>
                <p>{endMessage}</p>
                <p>{counter}/{total} CONCLUÍDOS</p>
                {results}
            </Results>
        </div>
    );
}