import React from "react";

function generateList(qnt) {
  const list = [];
  for (let i = 1; i < qnt; i++) {
    if (i === qnt - 1) list.push(<span key={i}>{i}</span>);
    else list.push(<span key={i}>{i}, </span>);
  }
  // Removendo a última vírgula e espaço

  return list;
}

export default function lista1() {
  return (
    <React.Fragment>
      <div>{generateList(110)}</div>
      <div>{generateList(110)}</div>
    </React.Fragment>
  );
}
