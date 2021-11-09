import './NewExpense.css';
import ExpenseForm from './ExpenseForm';
import {useState} from 'react';

const NewExpense = ({ onAddExpense }) => {
  const [isFormShown, setIsFormShown] = useState(false);

  const toggleFormShownHandler = () => setIsFormShown((prevFormShown) => !prevFormShown);;

  const updateExpenseHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    };

    onAddExpense(expenseData);
    toggleFormShownHandler();
  };

  return (
    <div className="new-expense">
      {
        !isFormShown
          ? <button type="button" onClick={toggleFormShownHandler}>Add new expense</button>
          : <ExpenseForm
              onUpdate={updateExpenseHandler}
              onCancel={toggleFormShownHandler}
            />
      }
    </div>
  )
}

export default NewExpense;
