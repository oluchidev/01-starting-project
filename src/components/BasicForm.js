
import {useState} from 'react';


const BasicForm = (props) => {

  const initialData = {
    firstName:'',
    lastName: '',
    email: ''
  }

 const [data, setData] = useState(initialData)

 const firstNameInputHandler = (event) => {
  setData({
    ...data,
firstName: event.target.value
  })
 
}

const secNameInputHandler = (event) => {
  setData({
    ...data,
    lastName: event.target.value
  })
}

const emailInputHandler = ( event) => {
  setData({
    ...data,
    email: event.target.value
  })
}


const check = data.firstName.trim() === '' || data.lastName.trim() === '' || data.email.trim() === '';

const submitHandler = (event) => {
  event.preventDefault()
  if(check) {
    return;
  } else{

    console.log(data)
    setData({
      firstName:'',
      lastName: '',
      email: ''
    })
  }
 }

  return (
    <form onSubmit={submitHandler}>
      <div className='control-group'>
        <div className='form-control'>
          <label htmlFor='name'>First Name</label>
          <input 
          type='text' 
          id='name' 
          value={data.firstName} 
          onChange={firstNameInputHandler}
          />
        </div>
        <div className='form-control'>
          <label htmlFor='name'>Last Name</label>
          <input 
          type='text' 
          id='name' 
          value={data.lastName} 
          onChange={secNameInputHandler}/>
        </div>
      </div>
      <div className='form-control'>
        <label htmlFor='name'>E-Mail Address</label>
        <input 
        type='email' 
        id='name' 
        value={data.email} 
        onChange={emailInputHandler}
       />
      </div>
      <div className='form-actions'>
        <button>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
