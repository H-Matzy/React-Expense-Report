import "./ExpenseItem.css";

function ExpenseItem() {
  let expenseDate = new Date();
  let expenseTitle = "expense title";
  let expenseAmount = 100;
  return (
    <div className="expense-item">
      <div>{expenseDate.toDateString()}</div>
      <div className="expense-item__description">
        <h2>{expenseTitle}</h2>
        <div className="expense-item__price">${expenseAmount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
