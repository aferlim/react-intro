"use client";

import Caixa from "@/components/basico/Caixa";
import Circulo from "@/components/basico/Circulo";
import Evento from "@/components/basico/Evento";
import React from "react";

export default function PageProps() {
  return (
    <div className="flex gap-4 p-4">
      <Caixa>
        <ul className="list-disc">
          <li>Primeiro</li>
          <li>Segundo</li>
          <li>Terceiro</li>
        </ul>
      </Caixa>

      <Caixa>
        <div>Caixa 2</div>
      </Caixa>

      <Circulo texto="Circulo 1" full={false} />
      <Circulo texto="Circulo 2" full={true} />
      <Evento />
    </div>
  );
}
