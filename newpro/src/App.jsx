import './App.css';
import React from 'react';
import Expenses from './components/Expenses.jsx';
import NewExpense from './components/NewExpense/NewExpense';
function App() {

  //   return (
  //     React.createElement('div', {}, React.createElement('h2', {}, 'Lets get Started'), React.createElement(Expenses))
  // );


  return (
    <div className='container'>
      <h1>Welcome to my app</h1>
      <h2>skjdskajdksjdklj</h2>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis obcaecati cumque iusto esse illo eius eveniet adipisci impedit numquam nesciunt!</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor architecto ipsa in explicabo officiis velit repellendus error a nihil! Quasi.</p>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero quod voluptas laborum aut obcaecati illum sit veritatis? Ea animi maxime voluptatum nihil, praesentium, debitis ratione delectus nesciunt sint eveniet asperiores alias recusandae ex saepe vero, accusamus quae. Numquam ipsam deleniti illo molestias! Quia officia quisquam aliquid a ullam facere dicta voluptas quidem qui nemo commodi perspiciatis ab dolore labore veritatis inventore, distinctio est quos natus dolorum earum quae. Odit nisi, nobis assumenda voluptas repellendus earum recusandae. Quo, repellendus non accusamus recusandae dicta voluptate labore velit porro sequi modi voluptates architecto ipsa debitis quasi ad officiis quis aut, reprehenderit similique repudiandae.</p>
      <Expenses />
      <NewExpense />
    </div>
  );
}

export default App
