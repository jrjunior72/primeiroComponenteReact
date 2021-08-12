import { useState } from "react";
import Button from "../Button/indes";

const Card = () => {
    const [valor, setValor] = useState(0);

    function Adicionar(){
        setValor(valor + 1)
    }
    function Remover(){
        setValor(valor - 1)
    }

    return(
    <div className="card">
        <div className="card-header">
            Meu primeiro card
        </div>
        <div className="card-body">
            <Button 
                className="btn btn-success"
                onClick={Adicionar}>
                Adicionar
            </Button>
            <Button 
                className="btn btn-danger"
                onClick={Remover}>
                Remover
            </Button>
            <p>{valor}</p>
        </div>
    </div>
    )
}

export default Card;

/* const Card = () => {
    const [valor, setValor] = useState(0);

    function Adicionar(){
        setValor(valor + 1)
    }
    function Remover(){
        setValor(valor - 1)
    }

    return(
    <div className="card">
        <div className="card-header">
            Featured
        </div>
        <div className="card-body">
            <button 
                type="button" 
                className="btn btn-success"
                onClick={Adicionar}>
                Adicionar
            </button>
            <button 
                type="button" 
                className="btn btn-danger"
                onClick={Remover}>
                Remover
            </button>
            <p>{valor}</p>
        </div>
    </div>
    )
}

export default Card; */

/* const Card = () => {
    const [valor, setValor] = useState(0);

    function Adicionar(){
        setValor(valor + 1)
    }
    function Remover(){
        setValor(valor - 1)
    }

    return(
    <div className="card">
        <div className="card-header">
            Featured
        </div>
        <div className="card-body">
            <button 
                type="button" 
                className="btn btn-success"
                onClick={(event)=>{setValor(event.target.value + 1)}}>
                Adicionar
            </button>
            <p>{valor}</p>
        </div>
    </div>
    )
}

export default Card; */