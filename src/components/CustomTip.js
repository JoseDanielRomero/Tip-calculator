import '../stylesheets/CustomTip.css'

function CustomTip({ setTip, customTipShown, setCustomTipShown, setDataBase, dataBaseButtons }) {

  const handleChangeCustomTip = (event) => {
    const limit = 2
    const valueMaxLength = event.target.value.slice(0, limit)

    const valueNumber = Number(valueMaxLength)

    if (event.target.value.length === 0) {
      setTip('')
      setCustomTipShown('')
    } else {
      setTip(valueNumber)
      setCustomTipShown(valueNumber)
    }

    setDataBase(dataBaseButtons)
  }

  return (
    <input 
      className='custom-tip-input'
      type='number'
      placeholder='Custom'
      value={customTipShown}
      onChange={handleChangeCustomTip}
    />
  )
}

export default CustomTip;