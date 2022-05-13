import Card from "./Card";

export default function Cards({counter, setCounter, total, results, setResults, setEndMessage, error, setError}){
    return(
        <div className="cards">
            <Card counter={counter} 
                setCounter={setCounter} 
                total={total}
                results={results} 
                setResults={setResults}
                setEndMessage={setEndMessage}
                error={error}
                setError={setError}/>            
        </div>
    );
}