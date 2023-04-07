import React from 'react'
import './ExpenseItem.css';
function ExpenseItem() {
  return (
    <div className="item-info">
        <div className="date-info">March 28th </div>
        <div className='info'>
            <h2 className='heading'>Car Insurance</h2>
            <div className='btn'>$294.67</div>
        </div>
    </div>
  )
}

export default ExpenseItem;