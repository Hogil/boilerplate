import {React, useState} from 'react'
import {useDispatch} from 'react-redux';
import {loginUser} from '../../../_actions/user_action'
import { useNavigate  } from 'react-router-dom';
import auth from '../../../hoc/auth';

function LoginPage() {
  const dispatch = useDispatch();

  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");

  const navigate = useNavigate();

  const emailHandler = (event) =>{
    setEmail(event.currentTarget.value)
  }
  const passwordHandler = (event) =>{
    setPassword(event.currentTarget.value)
  }
  const submitHandler = (event) =>{
    event.preventDefault();
    console.log('Email', Email)
    console.log('Password', Password)

    let body = {
      email: Email,
      password: Password
    }

    dispatch(loginUser(body))
    .then(response=>{
      if(response.payload.loginSuccess){
        navigate('/')
      }else{
        alert('Error')
      }
    });
   

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
           <button type="submit">
             login
           </button>

        </form>
    </div>
  )
}


export default auth(LoginPage, false)