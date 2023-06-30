import '../stylesheets/Results.css'

function Results({ resultTip, setResultTip, bill, tip, people }) {

  const copyTip = tip;
  const copyBill = bill;
  const copyPeople = people;

  const handleShowResulTip = () => {
    if (typeof copyTip == 'number' && typeof copyBill == 'number' && typeof copyPeople == 'number') {
      const fixBill = copyBill.toFixed(2)

      const fixTip = copyTip.toFixed()

      const formula = (fixBill * fixTip) / 100

      const formartResult = formula.toFixed(2)

      setResultTip('$'+formartResult)
    } else {
      setResultTip('$0.00')
    }

    return resultTip

  }

  
  const handleDisableButton = () => {
    if (typeof copyTip == 'number' || typeof copyBill == 'number' || typeof copyPeople == 'number') {
      return 'reset-button'
    } else {
      return 'reset-button off'
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
            <p className='result-number'>{handleShowResulTip()}</p>
          </div>
        </div>
        <div className='result-container'>
          <div className='text-box'>
            <h4 className='title-result'>Total</h4>
            <h5 className='subtitle-result'>/ person</h5>
          </div>
          <div className='number-box'>
            <p className='result-number'>$00.00</p>
          </div>
        </div>
      </div>
      <div className='reset-result-box'>
        <button className={handleDisableButton()}>RESET</button>
      </div>
    </section>
  )
}

export default Results;