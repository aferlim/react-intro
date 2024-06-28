import React, { useState } from "react";
import Filho from "./Filho";

interface PaiProps {
  nome: string;
  sobreNome: string;
  isAlive: boolean;
  SetAlive: (vivo: boolean) => void;
}

export default function Pai(props: PaiProps) {
  const [cofreAberto, AbrirCofre] = useState(false);

  return (
    <div className="flex flex-col rounded-md bg-cyan-500 p-4 gap-4">
      <div className="flex justify-center gap-2">
        <span>Pai:</span>
        <span>{props.nome}</span>
        <span>{props.sobreNome}</span>
        <span>Está {props.isAlive ? "Vivo" : "Morto"}.</span>
        <button
          className="p-4 bg-black text-white"
          onClick={() => {
            AbrirCofre(!cofreAberto);
          }}
        >
          {cofreAberto ? "Fechar Cofre" : "Abrir Cofre"}
        </button>
      </div>
      <div className="flex gap-5">
        <Filho
          nome="Suzane"
          sobreNome={props.sobreNome}
          cofreAberto={cofreAberto}
          SetAlive={props.SetAlive}
        />
        <Filho
          nome="Andreas"
          sobreNome={props.sobreNome}
          cofreAberto={cofreAberto}
          SetAlive={props.SetAlive}
        />
      </div>
    </div>
  );
}
