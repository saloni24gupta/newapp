import './App.css'
import ExpenseItem from './components/ExpenseItem';
import MyButton from './components/MyButton'


function App() {
  const expense = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 294.67,
      date: new Date(2023, 4, 7)
    },
    {
      id: 'e2',
      title: 'New TV',
      amount: 442.67,
      date: new Date(2023, 4, 6)
    },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 342.67,
      date: new Date(2023, 4, 8)
    },
    {
      id: 'e4',
      title: 'New Desk',
      amount: 734.67,
      date: new Date(2023, 4, 9)
    }
  ]
  return (
    <div className='container'>
      <h1>Welcome to my app</h1>
      <MyButton />
      <ExpenseItem
        Title={expense[0].title}
        Amount={expense[0].amount}
        Date={expense[0].date.toDateString()} />
      <ExpenseItem T
        Title={expense[1].title}
        Amount={expense[1].amount}
        Date={expense[1].date.toDateString()} />
      <ExpenseItem
        Title={expense[2].title}
        Amount={expense[2].amount}
        Date={expense[2].date.toDateString()} />
      <ExpenseItem
        Title={expense[3].title}
        Amount={expense[3].amount}
        Date={expense[3].date.toDateString()} />
    </div>
  );
}

export default App
