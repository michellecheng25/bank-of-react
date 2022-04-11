import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Transaction from "../components/Transaction";
import AccountBalance from "../components/AccountBalance";
import AddTransaction from "../components/AddTransaction";

function Debits({ debits, addTransaction, balance }) {
  return (
    <div>
      <Navbar />
      <h1 style={{ textAlign: "center", marginBottom: "20px" }}>Debits</h1>
      <AccountBalance balance={balance} />
      <AddTransaction addTransaction={addTransaction} type={"debit"} />
      {debits.map((debit) => {
        return <Transaction key={debit.id} currTransaction={debit} />;
      })}
    </div>
  );
}

export default Debits;
