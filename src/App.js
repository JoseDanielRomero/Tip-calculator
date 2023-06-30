import './App.css';
import logo from '../src/images/logo.svg'
import Calculator from './components/Calculator';
import { useState } from 'react';
import {v4 as uuidv4} from 'uuid'
import Results from './components/Results';

function App() {

  const dataBaseButtons = [{
    key: uuidv4(),
    "tipPercentage": 5,
    "active": false
  },
  {
    key: uuidv4(),
    "tipPercentage": 10,
    "active": false
  },
  {
    key: uuidv4(),
    "tipPercentage": 15,
    "active": false
  },
  {
    key: uuidv4(),
    "tipPercentage": 25,
    "active": false
  },
  {
    key: uuidv4(),
    "tipPercentage": 50,
    "active": false
  }]

  const [dataBase, setDataBase] = useState(dataBaseButtons)
  const [bill, setBill] = useState('')
  const [people, setPeople] = useState('')
  const [tip, setTip] = useState('')
  const [customTipShown, setCustomTipShown] = useState('')
  const [resultTip, setResultTip] = useState('$0.00')
  const [resultTotal, setResultTotal] = useState('')

  // console.log( bill)
  // console.log( tip)
  // console.log( people)

  return (
    <div className="App">
      <header>
        <img className='logo' src={logo}/>
      </header>
      <main>
        <article className='main-content-container'>
          <Calculator 
            bill={bill}
            setBill={setBill}
            people={people}
            setPeople={setPeople}
            tip={tip}
            setTip={setTip}
            customTipShown={customTipShown}
            setCustomTipShown={setCustomTipShown}
            dataBase={dataBase}
            setDataBase={setDataBase}
            dataBaseButtons={dataBaseButtons}
            resultTip={resultTip}
            setResultTip={setResultTip}
          />
          <Results
            resultTip={resultTip}
            setResultTip={setResultTip}
            bill={bill}
            tip={tip}
            people={people}
          />
        </article>
      </main>
    </div>
  );
}

export default App;
