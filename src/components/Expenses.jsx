import ExpenseItem from './ExpenseItem';
import './Expenses.css';

const Expenses = () => {
  const expenses = [
    {
      id: 'ex1',
      title: 'Shopping on bol.com',
      amount: 28,
      date: new Date(2021, 9, 28),
    },
    {
      id: 'ex2',
      title: 'Trip to Brugge',
      amount: 300,
      date: new Date(2021, 9, 21),
    },
    {
      id: 'ex3',
      title: 'Groceries at Jumbo',
      amount: 175.50,
      date: new Date(2021, 9, 29),
    },
    {
      id: 'ex4',
      title: 'Sushi Point delivery',
      amount: 75,
      date: new Date(2021, 9, 14),
    },
  ]

  return (
    <div className="expenses">
      {expenses.map((expense) => {
        return <ExpenseItem
          key={expense.id}
          date={expense.date}
          title={expense.title}
          amount={expense.amount}
        />
      })}
    </div>
  )
}

export default Expenses;
