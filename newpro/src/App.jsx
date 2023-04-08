import './App.css';
import React from 'react';
import Expenses from './components/Expenses.jsx';
function App() {

//   return (
//     React.createElement('div', {}, React.createElement('h2', {}, 'Lets get Started'), React.createElement(Expenses))
// );


  return (
    <div className='container'>
      <h1>Welcome to my app</h1>

        <Expenses />

    </div>
  );
}

export default App
