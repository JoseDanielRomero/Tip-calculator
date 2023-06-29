import '../stylesheets/InputNumber.css'

function InputNumber({ titleInputBox, type, setter, iconInput }) {

  const handleChangeInputNum = (event) => {
    const limit = 6
    const valueMaxLength = event.target.value.slice(0, limit)

    const valueNumber = Number(valueMaxLength)

    if (event.target.value.length === 0) {
      setter('')
    } else {
      setter(valueNumber)
    }

  }

  return (
    <div className='input-container'>

      <h4 className='title-calculator'>{titleInputBox}</h4>
      <div className='divider-input'>
        <img className='icon-input' src={iconInput}></img>
        <input
          type='number'
          placeholder='0'
          className='input-box'
          value={type}
          onChange={handleChangeInputNum}
        />
      </div>
    </div>
  )
}

export default InputNumber;