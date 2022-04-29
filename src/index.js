import React from 'react';
import ReactDOM from 'react-dom';
import CounterApp from './CounterApp';
// import FirstApp  from "./FirstApp";
import './index.css'

const rootDiv = document.querySelector('#root');

// ReactDOM.render(<FirstApp saludo="hola props tips" />, rootDiv)
ReactDOM.render(<CounterApp value={1} />, rootDiv)