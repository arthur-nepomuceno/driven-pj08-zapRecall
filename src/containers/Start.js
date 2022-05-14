import React from "react";
import Top from "../components/Top";
import Cards from "../components/Cards";
import Results from "../components/Results"
import Reset from "../components/Reset";
import Congrats from "../components/Congrats";
import Putz from "../components/Putz";

export default function Start({className}){

    const cards = [{question: "O que é JSX?",
                    answer:"Uma extensão de linguagem do JavaScript"},
                    
                    {question: "O React é __",
                    answer: "uma biblioteca JavaScript para construção de interfaces"},
                    
                    {question: "Componentes devem iniciar com __",
                    answer: "letra maiúscula"},
                    
                    {question: "Podemos colocar __ dentro do JSX",
                    answer: "expressões"},
                
                    {question: "O ReactDOM nos ajuda __",
                    answer: "interagindo com a DOM para colocar componentes React na mesma"}]

    function comparer() { 
        return Math.random() - 0.5; 
    }

    const shuffle = cards.sort(comparer);
    const [counter, setCounter] = React.useState(0)
    const [results, setResults] = React.useState([])
    const [error, setError] = React.useState(false)    
    const total = cards.length;
    
    return(
        <div className={className}>
            <Top />
            <Cards cards={shuffle}
                    counter={counter} 
                    setCounter={setCounter} 
                    total={total}
                    results={results} 
                    setResults={setResults}   
                    setError={setError}/>
            <Results>
                {counter === total ? (error? <Congrats /> : <Putz />) : ""}
                <p>{counter}/{total} CONCLUÍDOS</p>
                <p>{results}</p>
                {counter === total ? <Reset /> : ""}
            </Results>
        </div>
    );
}



