import React from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "../../styles/Expenses.css";
function Expenses({ expenses }) {
  return (
    <Card className="expenses">
      {expenses.map((expense, i) => {
        return (
          <ExpenseItem
            key={i}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        );
      })}
    </Card>
  );
}

export default Expenses;
