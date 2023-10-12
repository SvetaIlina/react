import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const text = 'Hello WorlD'
const elem = (
  <div>
    <h2 className='header'>Text: {text}</h2>
    <label htmlFor="iii">Input</label>
    <input type='text' name='iii' />
    <button tabIndex={0}>{2+2}</button>
  </div>
);

// const elem = React.createElement('h2', {className: 'header'}, 'Hello WorlD!');

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  elem
);

