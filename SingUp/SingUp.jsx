import React from 'react'
import { useState } from 'react'
import "./Singup.css"
import { db, auth } from "../config/firebse"
import { createUserWithEmailAndPassword } from 'firebase/auth'
import Loder from './loder'
import Toaster from './Toaster'
import { toast } from 'react-toastify'
import { addDoc, collection } from 'firebase/firestore'
import { async } from '@firebase/util'
// import { Toast } from 'bootstrap'

const SingUp = () => {
  const dbref = collection(db,"user")
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [Number, setNumber] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setloading] = useState(false)
  const obj ={
    name,
    email,
   
    Number
  }


  const singUp = () => {
    console.log(name, email, Number, password)
    setloading(true)
    createUserWithEmailAndPassword(auth, email, password)
    
  
      .then(async user => {
        console.log(user)
        console.log(user.user.uid)
        toast("use SuccesFully")
        setloading(false)
       await addDoc(dbref , {...obj, userUid:user.user.uid} )
       
      })
      .catch(error => {
        console.log(error)
        toast("Invalid User")
        setloading(false)
      })
      setName("")
      setPassword("")

      setEmail("")

      setNumber("")

  }






  return (
    // <div className='gamse '>
     <div >
        <Toaster /> 
        <div className='gamse '>

       
       <div className='main w-50 mx-auto forms-group  singupdi'>
         <h1 className='text-center'>Singup Form</h1>
       <input className='form-control input-group my-3' value={name} type="text" placeholder='Enter You Name' onChange={(e) => setName(e.target.value)} />
          <input className='form-control input-group my-3' value={email} type="email" placeholder='Enter You Email' onChange={(e) => setEmail(e.target.value)} />
          <input className='form-control input-group my-3' value={Number} type="number" placeholder='Enter You Number' onChange={(e) => setNumber(e.target.value)} />
          
          <input className='form-control input-group my-3' value={password} type="password" placeholder='Enter You password' onChange={(e) => setPassword(e.target.value)} />
          <div>
            <div className='text-center'>
            {loading? <Loder /> :<button className='btn btn-info w-100' onClick={singUp}>
           
           SingUp
         </button>}
            </div>
         
         
       </div>
       </div>
       
</div>
      
      
     </div>

     

    // </div>

  )
}

export default SingUp
