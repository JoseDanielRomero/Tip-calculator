import '../stylesheets/Calculator.css'
import InputNumber from './InputNumber';
import dollarIcon from '../images/icon-dollar.svg';
import peopleIcon from '../images/icon-person.svg'
import SelectTip from './SelectTip';

function Calculator({ setBill, bill, people, setPeople, tip, setTip, customTipShown, setCustomTipShown, dataBase, setDataBase, dataBaseButtons }) {
  return (
    <section className='calculator-box'>
      <InputNumber 
        titleInputBox='Bill'
        type={bill}
        setter={setBill}
        iconInput={dollarIcon}
        htmlType='number'
      />
      <SelectTip 
        setTip={setTip}
        customTipShown={customTipShown}
        setCustomTipShown={setCustomTipShown}
        dataBase={dataBase}
        setDataBase={setDataBase}
        dataBaseButtons={dataBaseButtons}
      />
      <InputNumber 
        titleInputBox='Number of People'
        type={people}
        setter={setPeople}
        iconInput={peopleIcon}
        htmlType='tel'
      />
      
    </section>
  );
}

export default Calculator;