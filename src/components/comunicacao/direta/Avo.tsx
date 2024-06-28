import React from "react";
import Pai from "./Pai";

interface AvoProps {
  nome: string;
  sobreNome: string;
}

export default function Avo(props: AvoProps) {
  return (
    <div className="flex flex-col rounded-md bg-orange-500 p-4 gap-4">
      <div className="flex justify-center gap-2">
        <span>Avô:</span>
        <span>{props.nome}</span>
        <span>{props.sobreNome}</span>
      </div>
      <div className="flex gap-5">
        <Pai nome="Ricardinho" sobreNome={props.sobreNome} />
        <Pai nome="André" sobreNome={props.sobreNome} />
      </div>
    </div>
  );
}
