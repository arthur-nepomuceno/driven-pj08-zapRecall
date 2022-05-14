export default function Reset(){
    return(
        <div className="reset" onClick={() => window.location.reload()}>
            <p>REINICIAR RECALL</p>
        </div>
    );
}