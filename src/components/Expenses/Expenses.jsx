import {useState} from 'react';
import Card from '../UI/Card';
import ExpenseItem from './ExpenseItem';
import ExpensesFilter from './ExpensesFilter';
import './Expenses.css';

const Expenses = ({expenses}) => {
  const [year, setSelectedYear] = useState('2021');

  const filterChangeHandler = (selectedYear) => {
    setSelectedYear(selectedYear);
  };

  const filteredExpensesByYear = expenses.filter((expense) => expense.date.getFullYear().toString() === year);

  return (
    <Card className="expenses">
      <ExpensesFilter selected={year} onFilterChange={filterChangeHandler} />
      {filteredExpensesByYear.map((expense) => {
        return <ExpenseItem
          key={expense.id}
          date={expense.date}
          title={expense.title}
          amount={expense.amount}
        />
      })}
    </Card>
  );
}

export default Expenses;
