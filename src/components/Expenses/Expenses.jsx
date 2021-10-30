import Card from '../UI/Card';
import ExpenseItem from './ExpenseItem';
import './Expenses.css';

const Expenses = ({expenses}) => {
  return (
    <Card className="expenses">
      {expenses.map((expense) => {
        return <ExpenseItem
          key={expense.id}
          date={expense.date}
          title={expense.title}
          amount={expense.amount}
        />
      })}
    </Card>
  )
}

export default Expenses;
