import Expenses from "./components/Expenses/Expenses";
import NewExpense from './components/NewExpense/NewExpense';

function App() {
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
  ];

  const addExpenseHandler = (expense) => {
    console.log(expense);
  }

  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
