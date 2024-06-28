import React from "react";
import Filho from "./Filho";

interface PaiProps {
  nome: string;
  sobreNome: string;
}

export default function Pai(props: PaiProps) {
  return (
    <div className="flex flex-col rounded-md bg-cyan-500 p-4 gap-4">
      <div className="flex justify-center gap-2">
        <span>Pai:</span>
        <span>{props.nome}</span>
        <span>{props.sobreNome}</span>
      </div>
      <div className="flex gap-5">
        <Filho nome="Gabi" sobreNome={props.sobreNome} />
        <Filho nome="Rafaela" sobreNome={props.sobreNome} />
      </div>
    </div>
  );
}
