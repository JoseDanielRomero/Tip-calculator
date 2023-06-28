import '../stylesheets/Calculator.css'
import InputNumber from './InputNumber';
import dollarIcon from '../images/icon-dollar.svg';
import peopleIcon from '../images/icon-person.svg'

function Calculator({ setBill, bill, people, setPeople }) {
  return (
    <section className='calculator-box'>
      <InputNumber 
        titleInputBox='Bill'
        type={bill}
        setType={setBill}
        iconInput={dollarIcon}
      />

    </section>
  );
}

export default Calculator;