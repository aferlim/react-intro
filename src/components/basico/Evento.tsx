import React, { useEffect, useState } from "react";

export default function Evento() {
  const [contador, setState] = useState<number>(0);

  useEffect(() => {
    console.log("rendering", contador);
  }, [contador]);
  //let contador = 0;

  //   function increment() {
  //     console.log(contador++);
  //   }

  return (
    <div>
      <button
        className="flex w-32 p-3 bg-green-300"
        onClick={() => setState(contador + 1)}
      >
        Evento {contador}
      </button>

      <input
        type="number"
        className="text-black"
        value={contador || 0}
        onChange={(e) => {
          setState(+e.target.value);
        }}
      />
    </div>
  );
}
