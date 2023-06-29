import '../stylesheets/TipButton.css'

function TipButton({ tipPercentage, resolveClick, resolveClass }) {

  return (
    <button
      className={resolveClass()}
      onClick={resolveClick}
    >{tipPercentage}%</button>
  )
}

export default TipButton;