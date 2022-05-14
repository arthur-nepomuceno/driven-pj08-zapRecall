import React from 'react';

export default function Card({number, 
                                question, 
                                answer, 
                                counter, 
                                setCounter, 
                                results, 
                                setResults, 
                                setError}){
    
    const buttons = [{bgcolor:"background-red", 
                    text:"Não lembrei",
                    cardStyle: "red-text cross-text", 
                    icon:"close-circle", 
                    colorID:"red"},

                    {bgcolor:"background-yellow", 
                    text:"Quase não lembrei",
                    cardStyle: "yellow-text cross-text", 
                    icon:"help-circle", 
                    colorID:"yellow"},

                    {bgcolor:"background-green", 
                    text:"Zap!",
                    cardStyle: "green-text cross-text", 
                    icon:"checkmark-circle", 
                    colorID:"green"}]

    const [classStyle, setClassStyle] = React.useState('black-text');
    const [iconColor, setIconColor] = React.useState('black');
    const [iconName, setIconName] = React.useState('play-outline');
    
    const [click, setClick] = React.useState(false);
    const [showQuestion, setShowQuestion] = React.useState(false);
    const [showAnswer, setShowAnswer] = React.useState(false);

    function markAnswer(classStyle, iconName, iconColor){
        setClassStyle(classStyle);
        setIconName(iconName);
        setIconColor(iconColor);
        if(iconColor === "red"){
            setError(true)
        }

        setCounter(counter + 1);
        setResults([...results, <ion-icon id={iconColor} name={iconName}></ion-icon>])
        
        setClick(false)
        setShowAnswer(false)        
    }  

    return(
        <div className="card">
            <div className={`cover ${click? "hide" : ""}`}>
                <p className={classStyle}>Pergunta {number}</p>
                <div onClick={() => {setClick(true); setShowQuestion(true)}}>
                    <ion-icon id={iconColor} name={iconName}></ion-icon>
                </div>                
            </div>

            <div className={`question ${showQuestion? "" : "hide"}`}>
                <p>{question}</p>
                <div onClick={() => {setShowAnswer(true); setShowQuestion(false)}}>
                    <ion-icon name="repeat-outline"></ion-icon>
                </div>                
            </div>

            <div className={`answer ${showAnswer? "" : "hide"}`}>
                <p>{answer}</p>
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