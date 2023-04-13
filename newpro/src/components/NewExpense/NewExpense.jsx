import ExpenseForm from './ExpenseForm';

import './NewExpense.css'
function NewExpense() {
const saveExpenseDataHandler = (enterExpenseData) => {
    const expenseData = {
        ...enterExpenseData,
        id: Math.round().toString()
    };
    console.log(expenseData);
}
    return <div className='new-expense'>
       <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}/>
        </div>
}

export default NewExpense;