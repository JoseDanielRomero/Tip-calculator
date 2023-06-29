import '../stylesheets/TipButton.css'

function TipButton({ tipPercentage }) {
  return (
    <button
      className='tip-button-box'
      
    >{tipPercentage}%</button>
  )
}

export default TipButton;