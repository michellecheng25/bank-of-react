import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Transaction from "../components/Transaction";
import AccountBalance from "../components/AccountBalance";
import AddTransaction from "../components/AddTransaction";

function Credits({ credits, addTransaction, balance }) {
  return (
    <div>
      <Navbar />
      <h1 style={{ textAlign: "center", marginBottom: "20px" }}>Credits</h1>
      <AccountBalance balance={balance} />
      <AddTransaction addTransaction={addTransaction} type={"credit"} />
      {credits.map((credit) => {
        return <Transaction key={credit.id} currTransaction={credit} />;
      })}
    </div>
  );
}

export default Credits;
