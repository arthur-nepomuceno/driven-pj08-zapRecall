import React from "react";
import Top from "../components/Top";
import Cards from "../components/Cards";
import Results from "../components/Results"


export default function Recall({className}){

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


    const [counter, setCounter] = React.useState(0)
    const [results, setResults] = React.useState([])
    const [error, setError] = React.useState(false)
    
    const total = cards.length;

    function end(){
        if(error===false){
            return `Parabéns! Você não se esqueceu de nenhum flashcard!`;
        } else {
            return `Putz! Ainda faltam alguns... Mas não desanime!`;
        }
    }
    
    return(
        <div className={className}>
            <Top />
            <Cards cards={cards}
                    counter={counter} 
                    setCounter={setCounter} 
                    total={total}
                    results={results} 
                    setResults={setResults}   
                    setError={setError}/>
            <Results>
                <p>{counter === total ? end() : ""}</p>
                <p>{counter}/{total} CONCLUÍDOS</p>
                <p>{results}</p>
            </Results>
        </div>
    );
}