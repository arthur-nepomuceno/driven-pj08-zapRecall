import Card from "./Card";

export default function Cards({counter, setCounter, total}){
    return(
        <div className="cards">
            <Card counter={counter} setCounter={setCounter} total={total}/>
            
        </div>
    );
}