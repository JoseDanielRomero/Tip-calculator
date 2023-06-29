import '../stylesheets/CustomTip.css'

function CustomTip({ setTip, customTipShown, setCustomTipShown }) {

  const handleChangeCustomTip = (event) => {
    setTip(event.target.value)
    setCustomTipShown(event.target.value)
  }

  return (
    <input 
      className='custom-tip-input'
      type='tel'
      placeholder='Custom'
      value={customTipShown}
      onChange={handleChangeCustomTip}
      maxLength='2'
    />
  )
}

export default CustomTip;