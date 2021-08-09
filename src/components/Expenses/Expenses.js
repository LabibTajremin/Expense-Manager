import React, { useState } from "react";

import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2020");
  
  function saveExpensesYearHandler(selectedYear) {
    setFilteredYear(selectedYear);
  }
  
  const filteredExpense = props.items.filter(
    (filter) => filter.date.getFullYear().toString() === filteredYear
  );

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          seleced={filteredYear}
          onChangeExpenseYear={saveExpensesYearHandler}
        />
        {filteredExpense.map((expenses) => (
          <ExpenseItem
            key={expenses.id}
            title={expenses.title}
            amount={expenses.amount}
            date={expenses.date}
          />
        ))}
      </Card>
    </div>
  );
}

export default Expenses;
