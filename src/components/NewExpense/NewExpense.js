import React from "react";
import Card from "../UI/Card";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

function NewExpense(props) {
  function saveExpenseDataHandler(enteredExpenseData) {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };

    props.onSaveExpense(expenseData);
  }
  return (
    <Card className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </Card>
  );
}

export default NewExpense;
