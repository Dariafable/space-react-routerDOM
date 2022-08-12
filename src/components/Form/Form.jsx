import React from 'react'
import './FormStyles.scss'

const Form = () => {
  return (
    <div className='form'>
        <form>
            <label>Your name</label>
            <input type='text'></input>
            <label>Email</label>
            <input type='email'></input>
            <label>Subject</label>
            <input type='text'></input>
            <label>Details</label>
            <textarea rows='6' placeholder='Type a short message here' />
            <button className='btn'>Submit</button>
        </form>

    </div>
  )
}

export default Form