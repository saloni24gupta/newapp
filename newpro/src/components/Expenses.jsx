import ExpenseItem from "./ExpenseItem";
import Card from "./Card";
import { useState } from "react";
import ExpensesFilter from "./ExpensesFilter";


function Expenses() {
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
      date: new Date(2022, 4, 6)
    },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 342.67,
      date: new Date(2021, 4, 8)
    },
    {
      id: 'e4',
      title: 'New Desk',
      amount: 734.67,
      date: new Date(2020, 4, 9)
    }
  ]
  const [filteredYear, setFilteredYear] = useState('2020');
const filterChangeHandler = selectedYear => {
setFilteredYear(selectedYear);
};
  
     return(
        <Card className="expenses">
<ExpensesFilter selected={filteredYear} onChangefilter={filterChangeHandler}/>
        <ExpenseItem 
        Title={expense[0].title}
        Amount={expense[0].amount}
        date={expense[0].date} />
      <ExpenseItem T
        Title={expense[1].title}
        Amount={expense[1].amount}
        date={expense[1].date} />
      <ExpenseItem
        Title={expense[2].title}
        Amount={expense[2].amount}
        date={expense[2].date} />
      <ExpenseItem
        Title={expense[3].title}
        Amount={expense[3].amount}
        date={expense[3].date} />
        </Card>
    )
}
export default Expenses;