import Card from "./Card";

export default function Cards({cards, counter, setCounter, results, setResults, setError}){
    
    return(
        <div className="cards">
            {cards.map((element, index) => <Card key={index}
                                                number={index + 1}
                                                question={element.question}
                                                answer={element.answer}            
                                                counter={counter} 
                                                setCounter={setCounter} 
                                                results={results} 
                                                setResults={setResults}
                                                setError={setError}/> )}           
        </div>
    );
}