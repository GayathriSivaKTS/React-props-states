import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Sample from './Component/Sample';
import Details from './Component/Details';
import Marks from './Component/Marks';
import CurrentTime from './Component/CurrentTime.tsx';

ReactDOM.render(
  //<App/>,document.getElementById('root')
  <Sample name="Gayathri" id="610516104025" />, document.getElementById('root')
  // <CurrentTime />, document.getElementById('root')

);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
