import React from 'react';
import Results from './Results';

export default function Card({counter, setCounter, total, results, setResults, setEndMessage, error, setError}){
    
    const buttons = [{bgcolor:"background-red", text:"Não lembrei",
                    cardStyle: "red-text cross-text", icon:"close-circle", colorID:"red"},

                    {bgcolor:"background-yellow", text:"Quase não lembrei",
                    cardStyle: "yellow-text cross-text", icon:"help-circle", colorID:"yellow"},

                    {bgcolor:"background-green", text:"Zap!",
                    cardStyle: "green-text cross-text", icon:"checkmark-circle", colorID:"green"}]

    const [classStyle, setClassStyle] = React.useState('black-text');
    const [iconName, setIconName] = React.useState('play-outline');
    const [iconColor, setIconColor] = React.useState('black');

    const congrats = `Parabéns! Você não se esqueceu de nenhum flashcard!`;
    const putz = `Putz! Ainda faltam alguns... Mas não desanime!`;

    function markAnswer(classStyle, iconName, iconColor){
        setClassStyle(classStyle);
        setIconName(iconName);
        setIconColor(iconColor);

        setCounter(counter + 1);
        setResults([...results, <ion-icon id={iconColor} name={iconName}></ion-icon>])
        
        if(iconColor === "red"){
            debugger;
            setError(error++)
        }

        if(counter === total && error > 0){
            setEndMessage(putz);
        } else if(counter === total && error === 0){
            setEndMessage(congrats);
        }      
        
    }

    return(
        <div className="card">
            <div className="cover">
                <p className={classStyle}>Pergunta 1</p>
                <ion-icon id={iconColor} name={iconName}></ion-icon>
            </div>
            <div className="question">
                <p>O que é JSX?</p>
                <ion-icon name="repeat-outline"></ion-icon>
            </div>
            <div className="answer">
                <p>Uma extensão de linguagem do JavaScript</p>
                {buttons.map((button, index) => <button
                                                key={index}
                                                className={button.bgcolor} 
                                                onClick={() => {markAnswer(button.cardStyle, 
                                                                            button.icon, 
                                                                            button.colorID)}}>{button.text}</button>)}                
            </div>
        </div>
    );
}