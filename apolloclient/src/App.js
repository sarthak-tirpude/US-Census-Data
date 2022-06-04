import logo from './logo.svg';
import './App.css';

import { StateCensus } from './components/StateCensus'
import SelectState from './components/SelectState'
import  FormPractice  from './components/FormPractice'
import { useState } from 'react';
import { Capstone } from './components/Capstone';


function App() {
  
  
  const [text, setText] = useState("")
  const [city, setCity] = useState("")
  //
  return (
    
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
          <h1>US Census Data by State</h1>
          <h1>{text}</h1>
          <h1>{city}</h1>
          
         
          <SelectState onAddClick={setText} />
          <StateCensus name={text} ></StateCensus>
          <FormPractice onCityClick={setCity} />
          <Capstone city = {city}></Capstone>

        </div>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
