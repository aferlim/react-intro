"use client";

import Avo from "@/components/comunicacao/indireta/Avo";
import React from "react";

export default function ComunicacaoIndireta() {
  return (
    <div className=" flex flex-col justify-center items-center gap-3">
      <h1 className="text-3xl font-bold">Familia</h1>
      <Avo nome="Avo da Suzane" sobreNome="Richtoffen" isAlive={true} />
    </div>
  );
}
