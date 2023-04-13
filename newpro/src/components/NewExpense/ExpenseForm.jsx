import React, { useState } from 'react'
import './ExpenseForm.css'


function ExpenseForm(props) {
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
        // console.log('ampunt is', enterAmount)
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
        // console.log('date is', enterDate)
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

        const expenseData = {
            title: enterTitle,
            amount: enterAmount,
            date: new Date(enterDate)
        };
        props.onSaveExpenseData(expenseData);
        // console.log(expenseData);
            setEnterTitle(''),
            setEnterAmount(''),
            setEnterDate('')
    };
    return (

        <form onSubmit={SubmitHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label htmlFor='titleis'>Title</label>
                    <input name="titleis"  id='titleis' type="text" value={enterTitle} onChange={titleChangeHandler} />
                </div>
                <div className='new-expense__control'>
                    <label htmlFor="amountis">Amount</label>
                    <input id="amountis" name="amountis" type="number"  value={enterAmount} onChange={AmountChangeHandler} />
                </div>
                <div className='new-expense__control'>
                    <label htmlFor='dateis'>Date</label>
                    <input id="dateis" name="dateis" type="date" value={enterDate} onChange={DateChangeHandler} />
                </div>
            </div>
            <div className='new-expense__actions' >
                <button type='submit'>Add Expense</button>
            </div>
        </form>
    )
}
export default ExpenseForm;
