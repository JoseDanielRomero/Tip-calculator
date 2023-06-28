import '../stylesheets/InputNumber.css'

function InputNumber({ titleInputBox, type, setType, iconInput }) {

  const handleChangeInputNum = (event) => {
    setType(event.target.value)
  }

  console.log(type)

  return (
    <div className='input-container'>

      <h4 className='title-input'>{titleInputBox}</h4>
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