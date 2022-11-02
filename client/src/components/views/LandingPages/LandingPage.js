import axios from 'axios'
import React, { useEffect } from 'react'
import { useNavigate  } from 'react-router-dom'
import auth from '../../../hoc/auth';


function LandingPage() {

  const navigate = useNavigate();


  useEffect(()=>{
    axios.get('/api/hello')
    .then(response => console.log(response.data))
  }, [])

  const onClickHandler = () =>{
    axios.get('/api/users/logout')
    .then(response=>{
      navigate('/login')
      console.log(response)
    })
  }

  return (
    <div style={{display: 'flex', flexDirection: 'column', justifyContent:'center' , alignItems: 'center' , width: '100%', height: '100vh'}}>
        <h2>시작페이지</h2>
        <button onClick={onClickHandler}>
           logout
        </button>
    </div>
  )
}

export default auth(LandingPage, null);