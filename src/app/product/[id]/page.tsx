import React from "react";

// interface PageProps {
//   params: { id: string };
// }

export default function page(obj: any) {
  return <div>page id: {JSON.stringify(obj)}</div>;
}
