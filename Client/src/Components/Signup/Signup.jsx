import React, { useState } from 'react'
import './signup.css'
import { useNavigate } from 'react-router-dom'

function Signup() {

  const navigate = useNavigate()

  const [firstname , setfirstname] = useState("")
  const [lastname , setlastname] = useState("")
  const [email , setemail] = useState("")
  const [password,setpassword] = useState("")
  const [confirmpassword,setconfirmpassword] = useState("")
  const [showPassword,setshowPassword] = useState(false)
  const [showConfirmPassword,setConfirmshowPassword] = useState(false)

  const visiblePassword = (e)=>{
    e.preventDefault()
    setshowPassword(!showPassword)
  }

  const visibleConfrimPassword = (e)=>{
    e.preventDefault()
    setConfirmshowPassword(!showConfirmPassword)
  }

  const handleSignUp = (e)=>{
    e.preventDefault()
    if(password!=confirmpassword){
      alert('Confirm password must be same as Password')
      setconfirmpassword("")
    }
    else{
      console.log(firstname,lastname,email,password,confirmpassword)
      navigate('/home')
    }
  }
  return (
    <>
      <div id='main'>
      <div id='left'>
        <p> WELCOME ! TO</p>
        <p id='head'>CAMPUS COVE</p>
        <p id='head-2'>CAMPUS COVE</p>
        <p id='head-3'>CAMPUS COVE</p>
      </div>
      <div id="right">
        <form>
          <label htmlFor="firstname">First Name</label>
          <input 
          type="text" 
          placeholder='First Name' 
          id='firstName' 
          value={firstname} 
          onChange={(e)=>(setfirstname(e.target.value))} />

          <label htmlFor="lastname">Last Name</label>
          <input 
          type="text" 
          placeholder='Last Name' 
          id='lastName' 
          value={lastname} 
          onChange={(e)=>(setlastname(e.target.value))} />

          <label htmlFor="email">Email</label>
          <input 
          type="email" 
          placeholder='Ex - ayush@gmail.com' 
          id='email' 
          value={email} 
          onChange={(e)=>(setemail(e.target.value))} />

          <label htmlFor="Password">Password</label>
          <input 
          type={showPassword ? 'text' : 'password'}
          id='password' 
          placeholder='* * * * * * * * * *' 
          value={password} 
          onChange={(e)=>(setpassword(e.target.value))}/>

        <button id='eye1' onClick={visiblePassword}>{showPassword ? '🙈' : '👁️'}</button>

          <label htmlFor="ConfrimPassword">Confirm Password</label>
          <input 
          type={showConfirmPassword ? 'text' : 'password'}
          id='confirm password' 
          placeholder='* * * * * * * * * *' 
          value={confirmpassword} 
          onChange={(e)=>(setconfirmpassword(e.target.value))}/>
          <button id='eye2' onClick={visibleConfrimPassword} >{showConfirmPassword ? '🙈' : '👁️'}</button>

          <button id='login' onClick={handleSignUp}>Sign Up</button>



        </form>
      </div>
      
      </div>
      <footer id='foot'>
        <div>"Your space to connect and share awaits - </div>
        <div>log in to dive back in!"</div>
      </footer>
    </>
  )
}

export default Signup