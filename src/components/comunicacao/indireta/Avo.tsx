import React, { useState } from "react";
import Pai from "./Pai";

interface AvoProps {
  nome: string;
  sobreNome: string;
  isAlive: boolean;
}

export default function Avo(props: AvoProps) {
  const [vivo, setVivo] = useState(props.isAlive);

  return (
    <div className="flex flex-col rounded-md bg-orange-500 p-4 gap-4">
      <div className="flex justify-center gap-2">
        <span>Avô:</span>
        <span>{props.nome}</span>
        <span>{props.sobreNome}</span>
        <span>Está {vivo ? "Vivo" : "Morto"}.</span>
      </div>
      <div className="flex gap-5">
        <Pai
          nome="Marisia"
          sobreNome={props.sobreNome}
          isAlive={vivo}
          SetAlive={setVivo}
        />
        <Pai
          nome="Manfred"
          sobreNome={props.sobreNome}
          isAlive={vivo}
          SetAlive={setVivo}
        />
      </div>
    </div>
  );
}
