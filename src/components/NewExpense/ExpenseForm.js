import React, { useState } from "react";
import "./ExpenseForm.css";

function ExpenseForm(props) {
  // **** Multiple state concept ****

  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  // **** one state concept ****

  //   const [userInput, setUserInput] = useState({
  //     enteredTitle: "",
  //     enteredAmount: "",
  //     enteredDate: "",
  //   });

  function titleEventHandler(event) {
    // **** For one state concept ****
    //   setUserInput({
    //       ...userInput,       // ...userInput used for marging with the other value of this state otherwise other values will be dumped
    //       enteredTitle:event.target.value,

    //   })

    // *** Alternative for one stete concept ***
    // *** This is the safest way becasuse for this approch react make sure to gather data from previous updated state***
    // setUserInput((prevState) =>{
    //     return {...prevState, enteredTitle: event.target.value};
    // });
    setEnteredTitle(event.target.value);
  }
  function amountEventHandler(event) {
    setEnteredAmount(event.target.value);
  }
  function dateEventHandler(event) {
    setEnteredDate(event.target.value);
  }

  function submitHandler(event) {
    event.preventDefault();
    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };
    props.onSaveExpenseData(expenseData);
    setEnteredDate("");
    setEnteredTitle("");
    setEnteredAmount("")
  }
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__control">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleEventHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountEventHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={enteredDate}
            onChange={dateEventHandler}
          />
        </div>
        <div className="new-expense__actions">
          <button type="submit">Add Expense</button>
        </div>
      </div>
    </form>
  );
}

export default ExpenseForm;
