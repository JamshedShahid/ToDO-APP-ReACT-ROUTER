import { signInWithEmailAndPassword } from 'firebase/auth'
import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { auth } from '../config/firebse'
import Loder from './loder'

const Login = () => {

const [email,setEmail] =useState("")
    const [password, setPassword] = useState("")
  const [loading, setloading] = useState(false)
  const navigate = useNavigate()
 const Login =()=>{
    setloading(true)
    signInWithEmailAndPassword(auth,email,password)
   

    .then(async user => {
        console.log(user)
        // console.log(user.user.uid)
        // toast("use SuccesFully")
        setloading(false)
        localStorage.setItem("user", user.user.uid)
        navigate("/dashboard")
    //    await addDoc(dbref , {...obj, userUid:user.user.uid} )
      })
      .catch(error => {
        console.log(error)
        // toast("Invalid User")
        setloading(false)
      })
 }
  
    return (
        <div className=' gamse'>
          <div className='w-50 mx-auto forms-group  singupdi'>
          <input className='form-control input-group my-3' value={email} 
            type="email" placeholder='Enter You Email' onChange={(e) => setEmail(e.target.value)} />
            <input className='form-control input-group my-3' value={password} 
            type="password" placeholder='Enter You password' onChange={(e) => setPassword(e.target.value)} />


            <div>
            {
              loading
               ? <Loder /> :   <button className='btn btn-info w-100' onClick={Login}>
               Login
             </button>
 

            }
          </div>
          </div>

            

        </div>
    )
}

export default Login
