import './App.css';
import logo from '../src/images/logo.svg'
import Calculator from './components/Calculator';
import { useState } from 'react';

function App() {

  const [bill, setBill] = useState('')
  const [people, setPeople] = useState('')
  const [tip, setTip] = useState(0)
  const [customTipShown, setCustomTipShown] = useState('')

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
          />
          <section className='result-box'>

          </section>
        </article>
      </main>
    </div>
  );
}

export default App;
