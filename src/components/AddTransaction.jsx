import { useRef } from "react";

function AddTransaction({ addTransaction, type }) {
  const description = useRef();
  const amount = useRef();
  const onSubmit = (e) => {
    e.preventDefault();
    addTransaction(
      type,
      description.current.value,
      parseFloat(amount.current.value)
    );
  };
  return (
    <form
      onSubmit={onSubmit}
      style={{ textAlign: "center", marginBottom: "50px" }}
    >
      <label>
        Description:
        <input
          type="text"
          name="description"
          style={{ marginRight: "20px" }}
          ref={description}
          required
        />
      </label>
      <label>
        Amount:
        <input
          type="number"
          name="amount"
          style={{ marginRight: "20px" }}
          ref={amount}
          required
        />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
}

export default AddTransaction;
