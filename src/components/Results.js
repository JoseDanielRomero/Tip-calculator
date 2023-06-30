import '../stylesheets/Results.css'

function Results({ dataBaseButtons, resultTip, setResultTip, resultTotal, setResultTotal, bill, tip, people, setBill, setTip, setPeople, setDataBase, setCustomTipShown }) {

  const copyTip = tip;
  const copyBill = bill;
  const copyPeople = people;

  const handleShowResultTip = () => {
    if (typeof copyTip == 'number' && typeof copyBill == 'number' && typeof copyPeople == 'number' && copyPeople != 0) {
      const fixBill = copyBill.toFixed(2)
      const fixTip = copyTip.toFixed()
      
      const formula = (fixBill * fixTip) / 100
      const formartFormula = formula.toFixed(2)

      const division = formartFormula / copyPeople
      const formatResult = division.toFixed(2)
      setResultTip('$'+formatResult)
    } else {
      setResultTip('$0.00')
    }
    return resultTip
  }

  const handleShowResultTotal = () => {
    if (typeof copyTip == 'number' && typeof copyBill == 'number' && typeof copyPeople == 'number' && copyPeople != 0) {

      const fixBill = copyBill.toFixed(2)
      const fixTip = copyTip.toFixed()
      
      const formula = (fixBill * fixTip) / 100
      const formartFormula = formula.toFixed(2)

      const sum = Number(fixBill) + Number(formartFormula)
      const division = sum / copyPeople

      const formatResult = division.toFixed(2)
      setResultTotal('$'+formatResult)
    } else {
      setResultTotal('$0.00')
    }
    return resultTotal
  }

  const handleDisableClass = () => {
    if (typeof copyTip == 'number' || typeof copyBill == 'number' || typeof copyPeople == 'number') {
      return 'reset-button'
    } else {
      return 'reset-button off'
    }
  }
  
  const handleDisableAction = () => {

    if (typeof copyTip == 'number' || typeof copyBill == 'number' || typeof copyPeople == 'number') {
      setBill('')
      setTip('')
      setPeople('')
      setDataBase(dataBaseButtons)
      setCustomTipShown('')
      setResultTip('$0.00')
      setResultTotal('$0.00')
    } 

  }

  return (
    <section className='result-box'>
      <div className='result-box-list'>
        <div className='result-container'>
          <div className='text-box'>
            <h4 className='title-result'>Tip Amount</h4>
            <h5 className='subtitle-result'>/ person</h5>
          </div>
          <div className='number-box'>
            <p className='result-number'>{handleShowResultTip()}</p>
          </div>
        </div>
        <div className='result-container'>
          <div className='text-box'>
            <h4 className='title-result'>Total</h4>
            <h5 className='subtitle-result'>/ person</h5>
          </div>
          <div className='number-box'>
            <p className='result-number'>{handleShowResultTotal()}</p>
          </div>
        </div>
      </div>
      <div className='reset-result-box'>
        <button className={handleDisableClass()} onClick={handleDisableAction}>RESET</button>
      </div>
    </section>
  )
}

export default Results;