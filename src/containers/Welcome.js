import React from "react";

export default function Welcome({className, setClick}){

    return (        
        <div className={className}>
            <img src="assets/img/logo.png" alt="zap recall lightning"/>
            <p>ZapRecall</p>
            <button onClick={() => setClick(true)}>Iniciar Recall!</button>
        </div>      
        
    );
}