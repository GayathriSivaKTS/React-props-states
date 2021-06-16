//import logo from './logo.svg';
import React from 'react';
import './App.css';

class MyClass extends React.Component 
{
render()
{
  
  return(
    <div className="App">
    <h1>this is a Class Component</h1>
    <MySecClass></MySecClass>
    <Mythirdclass></Mythirdclass>
    </div>
  );
}
}

class MySecClass extends React.Component 
{
render()
{
  return(
     
    <h1>this is a  second Class Component</h1>
  );
}
}
class Mythirdclass extends React.Component 
{
render()
{
  return(
    <h1>this is a third Class Component</h1>
  );
}
}

function FourthClass()
{
  return(
    <div>
      <h1>this is fourth class component</h1>
    </div>
  );
}


function App() {
  return (
    <div className="App">
   <MyClass></MyClass>
  
  <FourthClass></FourthClass>
    </div>
  );
}

export default App;
