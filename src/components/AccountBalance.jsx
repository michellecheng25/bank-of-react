import React from "react";

function AccountBalance({ balance }) {
  return (
    <div style={{ textAlign: "center", margin: "20px 0px 20px 0px" }}>
      Account Balance: ${balance}
    </div>
  );
}

export default AccountBalance;
