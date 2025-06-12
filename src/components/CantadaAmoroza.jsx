import { useState } from "react";

const CantadaAmoroza = ()=>{
    const[nome,setNome]=useState('');
    return(
        <div className="container">
            <h2 className="titulo">💘 Cantadas Amorosas Para o seu Crush</h2>
            <input type="text" placeholder="Nome do seu Crush" />
            <button>Gerar cantadas </button>
            <p>{nome}</p>
        </div>
    )
}

export default CantadaAmoroza;