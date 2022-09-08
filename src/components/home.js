import React from 'react'
import Girlsincode from '../images/new ida 2.jpg'
import Girlsincode2 from '../images/girls in code.jpeg'
const Home =()=>{
    // const[toggle,setToggle]=useState(false)
    
    // const handleToggle =()=>{
    //     setToggle(!toggle)
    // }
    const data =[
        {
            title:'Girls in Code summit 2022',
            images:Girlsincode,
            description:'A program initiated to close the gender gap in technology by focusing on girls and women between 18 -24 years old from low income families and refugees camps'
        },
        {
            title:'Girls in Code summit 2022',
            images:Girlsincode2,
            description:'A program initiated to close the gender gap in technology by focusing on girls and women between 18 -24 years old from low income families and refugees camps'
        },
        {
            title:'Girls in Code summit 2022',
            images:Girlsincode,
            description:'A program initiated to close the gender gap in technology by focusing on girls and women between 18 -24 years old from low income families and refugees camps'
        },
        {
            title:'Girls in Code summit -Smile face',
            images:Girlsincode2,
            description:'A program initiated to close the gender gap in technology by focusing on girls and women between 18 -24 years old from low income families and refugees camps'
        }
    ]
    return(<>
    <div className='bg-gradient-to-b from-gray-50 to-pink-300 h-32'>
      <p className='text-5xl text-gray-600 mt-24 text-center font-bold'>Welcome Girls In Code</p>
      <div className='max-w-3xl mx-auto mt-8 p-4'>
          <div className='grid md:grid-cols-3 gap-6'>
              {data.map((items, index)=>{
                  return(
                  <div key={index} className='bg-gray-50  rounded-md shadow-lg'>
                  <img src={items.images}  alt="girls in Code" className='w-full rounded-bl-3xl'/>
                  <p className="p-3 text-green-900 text-medium font-bold">{items.title}</p>
                  <hr/>
                  <p className='px-3 py-2 '>{items.description}</p>
              </div>)
              })}
              
              
          </div>
      </div>
    </div>
</>)
}

export default Home