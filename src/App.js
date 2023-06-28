import './App.css';
import logo from '../src/images/logo.svg'
import Calculator from './components/Calculator';
import { useState } from 'react';

function App() {

  const [type, setType] = useState('')
  const [bill, setBill] = useState('')
  const [people, setPeople] = useState('')

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
            type={type}
            setType={setType}
          />
          <section className='result-box'>

          </section>
        </article>
      </main>
    </div>
  );
}

export default App;
