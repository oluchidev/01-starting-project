import {useState} from 'react';

const SimpleInput = (props) => {
  const [inputName, setInputName] = useState('')
  const [inputTouched, setInputTouched] = useState(false)

  const nameInputValid = inputName.trim() !== '';
  const classes = !nameInputValid && inputTouched ? "form-control invalid" : "form_control";


  const inputBlurHandler = () => {
    setInputTouched(true)
  }

  const nameChangeHandler = (event) => {
    setInputName(event.target.value)
  }

  const submitNameHandler = (event) => {
    event.preventDefault()
    setInputTouched(true)
    if(!nameInputValid) {
      return;
    }
    console.log(inputName)
    setInputName('');
    setInputTouched(false);
  }


  return (
    <form onSubmit={submitNameHandler}>
      <div className={classes}>
        <label htmlFor='name'>Your Name</label>
        <input 
        type='text' 
        id='name' 
        onChange={nameChangeHandler}
        onBlur={inputBlurHandler}
        />
        {!nameInputValid && inputTouched && <p className='error-text'>name cannot be empty</p>}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
