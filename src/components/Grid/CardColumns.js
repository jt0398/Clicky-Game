import React from "react";

const divStyle = {
  columnCount: "4"
};

export function CardColumns({ children }) {
  return (
    <div className="card-columns" style={divStyle}>
      {children}
    </div>
  );
}
