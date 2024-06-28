import clsx from "clsx";
import React from "react";

interface CirculoProps {
  texto: string;
  full: boolean;
}

export default function Circulo({ texto, full }: CirculoProps) {
  return (
    <div
      className={clsx(
        "flex justify-center items-center p-2 w-20 h-20 text-xl",
        "bg-cyan-200",
        full ? "rounded-full" : "rounded-2xl"
      )}
    >
      {texto}
    </div>
  );
}
