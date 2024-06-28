import Avo from "@/components/comunicacao/direta/Avo";
import React from "react";

export default function Comunicacao() {
  return (
    <div className=" flex flex-col justify-center items-center gap-3">
      <h1 className="text-3xl font-bold">Familia</h1>
      <Avo nome="Osvaldo" sobreNome="Lima" />
      <Avo nome="Sebastião" sobreNome="Silva" />
    </div>
  );
}
