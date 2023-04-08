import React, {useState} from 'react'
import ExpenseDate from './ExpenseDate';
import Card from './Card';
import './ExpenseItem.css';
function ExpenseItem(props) {
 
const [title, setTitle] = useState(props.Title)
const clickHandler = () =>  {
  setTitle('updated');
console.log(title);
}
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date}/>
        <div className='expense-item__description'>
            <h2 >{title}</h2>
            <div className='expense-item__price'>${props.Amount}</div>
        </div>
        <button onClick={clickHandler}>Change Tile</button>
    </Card> 
  )
}

export default ExpenseItem;