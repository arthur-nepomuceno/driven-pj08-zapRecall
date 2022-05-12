export default function Card(){
    return(
        <div className="card">
            <div className="cover">
                <p>Pergunta 1</p>
                <ion-icon name="play-outline"></ion-icon>
            </div>
            <div className="question">
                <p>O que é JSX?</p>
                <ion-icon name="repeat-outline"></ion-icon>
            </div>
        </div>
    );
}