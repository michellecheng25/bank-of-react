import React from "react";

function Transaction({ currTransaction }) {
  return (
    <div
      style={{
        width: "500px",
        margin: "0 auto",
        backgroundColor: "lightblue",
        padding: "20px",
        marginBottom: "15px",
      }}
    >
      <div className="amount">${currTransaction.amount} </div>
      <div className="date">{currTransaction.date.slice(0, 10)}</div>
      <div className="description">{currTransaction.description}</div>
    </div>
  );
}

export default Transaction;
