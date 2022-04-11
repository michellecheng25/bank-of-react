import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import UserProfile from "./pages/UserProfile";
import Credits from "./pages/Credits";
import Debits from "./pages/Debits";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [clientInfo, setClientInfo] = useState({
    accountBalance: 0, //credits - debits
    currentUser: {
      username: "Joe Smith",
      memberSince: "07/23/96",
    },
    credits: [],
    debits: [],
  });

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const credits = await fectchCredits();
    const debits = await fectchDebits();
    const creditTransactions = credits.data;
    const debitTransactions = debits.data;

    let totalCredits = creditTransactions.reduce(function (
      accumulator,
      curValue
    ) {
      return accumulator + curValue.amount;
    },
    0);

    let totalDebits = debitTransactions.reduce(function (
      accumulator,
      curValue
    ) {
      return accumulator + curValue.amount;
    },
    0);

    setClientInfo((prev) => {
      return {
        ...prev,
        accountBalance: totalCredits - totalDebits,
        credits: creditTransactions,
        debits: debitTransactions,
      };
    });
  };

  const fectchCredits = () => {
    return axios.get("https://moj-api.herokuapp.com/credits");
  };

  const fectchDebits = () => {
    return axios.get("https://moj-api.herokuapp.com/debits");
  };

  const addTransaction = (type, description, amount) => {
    const date = new Date().toISOString();
    const newTransaction = {
      description,
      amount,
      date,
    };

    console.log(newTransaction);

    if (type === "credit") {
      const newBalance = clientInfo.accountBalance + amount;
      console.log(amount);
      setClientInfo((prev) => {
        return {
          ...prev,
          credits: [newTransaction, ...clientInfo.credits],
          accountBalance: newBalance,
        };
      });
    } else if (type === "debit") {
      const newBalance = clientInfo.accountBalance + amount;
      console.log(newBalance);
      setClientInfo((prev) => {
        return {
          ...prev,
          debits: [newTransaction, ...clientInfo.debits],
          accountBalance: newBalance,
        };
      });
    }
  };

  console.log(clientInfo);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/userprofile"
          element={<UserProfile clientInfo={clientInfo} />}
        />
        <Route
          path="/credits"
          element={
            <Credits
              credits={clientInfo.credits}
              balance={clientInfo.accountBalance}
              addTransaction={addTransaction}
            />
          }
        />
        <Route
          path="/debits"
          element={
            <Debits
              debits={clientInfo.debits}
              balance={clientInfo.accountBalance}
              addTransaction={addTransaction}
            />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
