import '../stylesheets/Results.css'

function Results() {
  return (
    <section className='result-box'>
      <div className='result-box-list'>
        <div className='result-container'>
          <div className='text-box'>
            <h4 className='title-result'>Tip Amount</h4>
            <h5 className='subtitle-result'>/ person</h5>
          </div>
          <div className='number-box'>
            <p className='result-number'>$00.00</p>
          </div>
        </div>
        <div className='result-container'>
          <div className='text-box'>
            <h4 className='title-result'>Tip Amount</h4>
            <h5 className='subtitle-result'>/ person</h5>
          </div>
          <div className='number-box'>
            <p className='result-number'>$00.00</p>
          </div>
        </div>
      </div>
      <div className='reset-result-box'>
        <button className='reset-button'>RESET</button>
      </div>
    </section>
  )
}

export default Results;