import React from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

const Toaster = () => {
    // const notify=()=>{
    //     toast("hello Jimmi")
    // }
  return (
    <div>
      
      <div>
        {/* <button onClick={notify}>Notify!</button> */}
        <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        />
      </div>
      {/* <button onClick={notify}>See</button> */}
    </div>
  )
}

export default Toaster
