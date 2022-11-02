import {React, useState} from 'react'
import {useDispatch} from 'react-redux';
import {registerUser} from '../../../_actions/user_action'
import { useNavigate  } from 'react-router-dom';
import auth from '../../../hoc/auth';

function RegisterPage() {

  const dispatch = useDispatch();

  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [Name, setName] = useState("");
  const [ConfirmPassword, setConfirmPassword ]= useState("");

  const navigate = useNavigate();

  const emailHandler = (event) =>{
    setEmail(event.currentTarget.value)
  }
  const passwordHandler = (event) =>{
    setPassword(event.currentTarget.value)
  }

  const nameHandler = (event) =>{
    setName(event.currentTarget.value)
  }
  const confirmPasswordHandler = (event) =>{
    setConfirmPassword(event.currentTarget.value)
  }
  
  const onSubmitHandler = (event) =>{
        event.preventDefault(); //서브밋이나 href로 창이 리로드 되는 것을 막는다.

        if(Password !== ConfirmPassword){
          return alert('패스워드와 패스워드 확인이 일치하지 않습니다.')
        }
       

        let body = {
          email: Email,
          name: Name,
          password: Password
        }



        dispatch(registerUser(body))
        .then(response=>{
         if(response.payload.success){
          navigate('/')
         }else{
          alert("Failed to sign up.")
         }
        });
  }
      
      return (
        <div style={{display: 'flex', justifyContent:'center' , alignItems: 'center' , width: '100%', height: '100vh'}}>
            <form style={{display: 'flex', flexDirection: 'column'}}
                onSubmit={onSubmitHandler}
            >
              <label>Email</label>
              <input type='email' value={Email} onChange={emailHandler}></input>

              <label>Name</label>
              <input type='text' value={Name} onChange={nameHandler}></input>

              <label>Password</label>
              <input type='password' value={Password} onChange={passwordHandler}></input>

              <label>Confirm Password</label>
              <input type='password' value={ConfirmPassword} onChange={confirmPasswordHandler}></input>
              <br/>

              <button type="submit">
                회원가입
              </button>

            </form>
        </div>
      )
}

export default auth(RegisterPage, false)