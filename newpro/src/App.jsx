import './App.css'
import ExpenseItem from './components/ExpenseItem';
import MyButton from './components/MyButton'


function App() {
  return (
    <div className='container'>
      <h1>Welcome to my app</h1>
      <MyButton />
      <ExpenseItem />
      <ExpenseItem />
      <ExpenseItem />
      <ExpenseItem />
    </div>
  );
}

export default App
