import ExpenseItem from "./ExpenseItem";
import Card from "./Card";
import "../styles/Expenses.css";
function Expenses({ expenses }) {
  return (
    <Card className="expenses">
      {expenses.map((expense) => {
        return (
          <ExpenseItem
            key={expense.Id}
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
