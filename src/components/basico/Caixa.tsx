import React from "react";

interface CaixaProps {
  children: React.ReactNode;
}

export default function Caixa(props: CaixaProps) {
  //console.log(props);

  return (
    <div className="flex justify-center items-center bg-pink-400 rounded-xl p-2 w-20 h-20 text-xl">
      {props.children}
    </div>
  );
}
