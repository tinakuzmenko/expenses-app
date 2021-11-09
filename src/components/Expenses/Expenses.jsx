import {useState} from 'react';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
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
      <ExpensesList expenses={filteredExpensesByYear} />
    </Card>
  );
}

export default Expenses;
