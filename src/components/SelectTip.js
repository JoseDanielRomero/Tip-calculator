import '../stylesheets/SelectTip.css'
import TipButton from './TipButton';

function SelectTip({ tipPercentage, tip, setTip, customTipShown, setCustomTipShown }) {
  return (
    <div className='tip-container'>
      <h4 className='title-calculator'>Select Tip %</h4>
      <div className='tip-list-container'>
        <TipButton 
          tipPercentage={5}
          tip={tip}
          setTip={setTip}
        />
      </div>
    </div>
  )
}

export default SelectTip;