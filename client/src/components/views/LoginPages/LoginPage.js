import {React, useState} from 'react'

function LoginPage() {

  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");

  const emailHandler = (event) =>{
    setEmail(event.currentTarget.value)
  }
  const passwordHandler = (event) =>{
    setPassword(event.currentTarget.value)
  }
  const submitHandler = (event) =>{
    
  }
  return (
    <div style={{display: 'flex', justifyContent:'center' , alignItems: 'center' , width: '100%', height: '100vh'}}>
        <form style={{display: 'flex', flexDirection: 'column'}}
            onSubmit={submitHandler}
        >
           <label>Email</label>
           <input type='email' value={Email} onChange={emailHandler}></input>
           <label>Password</label>
           <input type='password' value={Password} onChange={passwordHandler}></input>
           <br/>
           <button>
             login
           </button>

        </form>
    </div>
  )
}

export default LoginPage