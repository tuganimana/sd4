import React, {useState} from  'react'
import { useNavigate } from 'react-router-dom'
// export default Home
function Login(){
    let navigate = useNavigate()
    const[loading, setLoading]=useState(false)
    const handleSubmit =()=>{
         setLoading(true)
         setTimeout(()=>{
           navigate('/dashboard')
         },4000)
    }
    return(<>
    <div className=''>
    <div className='bg-gradient-to-b from-green-50 to-pink-200 p-16 h-screen'>
        
     <div className="max-w-md mx-auto">
        <div className='bg-white p-16 rounded-2xl drop-shadow-xl'>
           <p className='font-bold text-3xl text-blue-400 py-4'>Welcome back</p>
           
           <form method="POST">
                 <p>Username</p>
                 <input type="text" className='w-full py-2  px-3 rounded focus:outline-none bg-gray-100 my-2'/>

                 <p>Password</p>
                 <input type="password" className='w-full py-2  px-3 rounded focus:outline-none bg-gray-100 my-2'/>
             
              
             </form>
            {loading? <button  className='bg-gradient-to-r from-gray-50 to-blue-600 p-3 rounded-lg w-full'>Please wait......</button>
            :
             <button onClick={()=>handleSubmit()} className='bg-gradient-to-r from-gray-50 to-blue-600 p-3 rounded-lg w-full'>Signin</button>
             }
           <div className='flex mt-4 space-x-4'>
            <div className='text-xs'>Don't you have an account ?</div>
             
            <div className='text-xs'> < a href="/signup">Sign up</a></div>
        </div>
        </div>
     </div>


        </div>
        </div>
    </>)
}

export default Login