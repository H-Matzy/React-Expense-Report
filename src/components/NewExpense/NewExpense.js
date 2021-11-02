import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "../../styles/NewExpense.css";
const NewExpense = (props) => {
  const [isDisplayed, setIsDisplayed] = useState(false);
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    displayFormHandler();
  };
  const displayFormHandler = () => {
    setIsDisplayed(!isDisplayed);
  };

  if (isDisplayed === false) {
    return (
      <div className="new-expense">
        <button onClick={displayFormHandler}>Add New Expense</button>
      </div>
    );
  }

  return (
    <div className="new-expense">
      {
        <ExpenseForm
          displayFormHandler={displayFormHandler}
          onSaveExpenseData={saveExpenseDataHandler}
        />
      }
    </div>
  );
};

export default NewExpense;
