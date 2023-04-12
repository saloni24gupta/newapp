import React, { useState } from 'react'
import './ExpenseForm.css'


function ExpenseForm() {
    const [enterTitle, setEnterTitle] = useState('')
    const [enterAmount, setEnterAmount] = useState('')
    const [enterDate, setEnterDate] = useState('')
    // const [userInput, setUserInput] = useState({
    //     enterTitle: '',
    //     enterAmount: '',
    //     enterDate: ''
    // });
    const titleChangeHandler = (event) => {
        setEnterTitle(event.target.value)
        //    setUserInput({
        //     ...userInput,
        //     enterTitle: event.target.value
        //    })
        // setUserInput((prevState) => {
        //     return { ...prevState, enterTitle: event.target.value};
        // });

    };
    const AmountChangeHandler = (event) => {
        setEnterAmount(event.target.value)
        // setUserInput({
        //     ...userInput,
        //     enterAmount: event.target.value
        //    })
        // setUserInput((prevState) => {
        //     return{ ...prevState, enterAmount: event.target.value};
        // });
    };
    const DateChangeHandler = (event) => {
        setEnterAmount(event.target.value)
        // setUserInput({
        //     ...userInput,
        //     enterDate: event.target.value
        //    })
        //   setUserInput((prevState) => {
        //     return { ...prevState, enterDate: event.target.value};
        //   });
    };
    const SubmitHandler = (event) => {
        event.preventDefault();

        const expenseDate = {
            title: enterTitle,
            amount: enterAmount,
            date: new Date(enterDate)
        }
        console.log(expenseDate);
            setEnterTitle(''),
            setEnterAmount(''),
            setEnterDate('')
    };
    return (

        <form onSubmit={SubmitHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input type="text" value={enterTitle} onChange={titleChangeHandler} />
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input type="number" min="0.01" step="0.01" value={enterAmount} onChange={AmountChangeHandler} />
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input type="date" min="2019-01-01" max="2022-12-31" value={enterDate} onChange={DateChangeHandler} />
                </div>
            </div>
            <div className='new-expense__actions' >
                <button type='submit'>Add Expense</button>
            </div>
        </form>
    )
}
export default ExpenseForm;
