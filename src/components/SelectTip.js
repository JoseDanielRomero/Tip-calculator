import '../stylesheets/SelectTip.css'
import CustomTip from './CustomTip';
import TipButton from './TipButton';

function SelectTip({ tipPercentage, tip, setTip, customTipShown, setCustomTipShown, dataBaseButtons }) {
  

  return (
    <div className='tip-container'>
      <h4 className='title-calculator'>Select Tip %</h4>
      <div className='tip-list-container'>
        {
          dataBaseButtons.map(button => {

            const handleClickTipButton = () => {
              const findId = dataBaseButtons.findIndex((element) => element.key === button.key);
              dataBaseButtons[findId].active = true

            }

            const handleButtonClass = () => {
              const findId = dataBaseButtons.findIndex((element) => element.key === button.key);
              if (dataBaseButtons[findId].active == true) {
                return 'tip-button-box'
              } else {
                return 'tip-button-box'
              }
            }

            return (
              <>
                <TipButton 
                  tipPercentage={button.tipPercentage}
                  setTip={setTip}
                  setCustomTipShown={setCustomTipShown}
                  resolveClick={handleClickTipButton}
                  resolveClass={handleButtonClass}
                />
              </>
            )
          })
        }
        <CustomTip 
          setTip={setTip}
          customTipShown={customTipShown}
          setCustomTipShown={setCustomTipShown}
        />
      </div>
    </div>
  )
}

export default SelectTip;