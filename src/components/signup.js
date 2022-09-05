import React from 'react'
import '../App.css'
const Signup=()=>{
    return(<>
           <div className=''>
    <div className='bg-gradient-to-b from-green-50 to-pink-200 p-16 h-screen'>
        
     <div className="max-w-md mx-auto">
        <div className='bg-white p-16 rounded-2xl drop-shadow-xl'>
           <p className='font-bold text-3xl text-blue-400 py-4'>Create an Account</p>
           <form>
                 <p>Username</p>
                 <input type="text" className='w-full py-2  px-3 rounded focus:outline-none bg-gray-100 my-2'/>

                 <p>Password</p>
                 <input type="password" className='w-full py-2  px-3 rounded focus:outline-none bg-gray-100 my-2'/>
             
               <button className='bg-gradient-to-r from-gray-50 to-blue-600 p-3 rounded-lg w-full'>Signup</button>
             </form>

           <div className='flex mt-4 space-x-4'>
            <div className='text-xs'>Do you have an account ?</div>
             
            <div className='text-xs'> < a href="/">Login here</a></div>
        </div>
        </div>
     </div>


        </div>
        </div>
    </>)
}

export default Signup