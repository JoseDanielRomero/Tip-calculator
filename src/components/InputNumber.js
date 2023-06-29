import '../stylesheets/InputNumber.css'

function InputNumber({ titleInputBox, type, setter, iconInput, htmlType }) {

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
          type={htmlType}
          placeholder='0'
          className='input-box'
          value={type}
          onChange={handleChangeInputNum}
          maxLength='1'
        />
      </div>
    </div>
  )
}

export default InputNumber;