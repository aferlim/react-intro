import React from "react";

interface FilhoProps {
  nome: string;
  sobreNome: string;
}

export default function Filho(props: FilhoProps) {
  return (
    <div className="flex flex-col rounded-md bg-green-500 p-4 gap-4">
      <div className="flex justify-center gap-2">
        <span className="font-bold">Filho:</span>
        <span>{props.nome}</span>
        <span>{props.sobreNome}</span>
      </div>
      <div></div>
    </div>
  );
}
