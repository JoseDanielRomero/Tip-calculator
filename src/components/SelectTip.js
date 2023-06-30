import '../stylesheets/SelectTip.css'
import CustomTip from './CustomTip';
import TipButton from './TipButton';

function SelectTip({ setTip, customTipShown, setCustomTipShown, dataBase, setDataBase, dataBaseButtons }) {

  return (
    <div className='tip-container'>
      <h4 className='title-calculator'>Select Tip %</h4>
      <div className='tip-list-container'>
        {
          dataBase.map(button => {

            const handleClickTipButton = () => {
              const copyDataBase = [...dataBase]
              const findId = copyDataBase.findIndex((element) => element.key === button.key);

              for (let i=0; i<copyDataBase.length; i++) {
                if (i != findId) {
                  copyDataBase[i].active = false
                } else {
                  copyDataBase[i].active = true
                }
              }

              setDataBase(copyDataBase)
              setTip(dataBase[findId].tipPercentage)
              setCustomTipShown('')
            }

            const handleButtonClass = () => {
              const findId = dataBase.findIndex((element) => element.key === button.key);
              if (dataBase[findId].active == true) {
                return 'tip-button-box on'
              } else {
                return 'tip-button-box'
              }
            }

            return (
              <>
                <TipButton 
                  tipPercentage={button.tipPercentage}
                  resolveClick={handleClickTipButton}
                  resolveClass={handleButtonClass}
                />
              </>
            )})
        }
        <CustomTip 
          setTip={setTip}
          customTipShown={customTipShown}
          setCustomTipShown={setCustomTipShown}
          setDataBase={setDataBase}
          dataBaseButtons={dataBaseButtons}
        />
      </div>
    </div>
  )
}

export default SelectTip;