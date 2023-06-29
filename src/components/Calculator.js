import '../stylesheets/Calculator.css'
import InputNumber from './InputNumber';
import dollarIcon from '../images/icon-dollar.svg';
import peopleIcon from '../images/icon-person.svg'
import SelectTip from './SelectTip';

function Calculator({ setBill, bill, people, setPeople, tip, setTip, customTipShown, setCustomTipShown }) {
  return (
    <section className='calculator-box'>
      <InputNumber 
        titleInputBox='Bill'
        type={bill}
        setter={setBill}
        iconInput={dollarIcon}
      />
      <SelectTip 
        tip={tip}
        setTip={setTip}
        customTipShown={customTipShown}
        setCustomTipShown={setCustomTipShown}
      />
      <InputNumber 
        titleInputBox='Number of People'
        type={people}
        setter={setPeople}
        iconInput={peopleIcon}
      />
      
    </section>
  );
}

export default Calculator;