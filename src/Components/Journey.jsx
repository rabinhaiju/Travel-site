import React from 'react'
import { Travel } from './Travel'

const Journey = () => {
  return (
    <>
    <div className=''>
          <img className='w-full h-[90vh] object-cover' src='https://media.istockphoto.com/id/478627080/photo/evening-view-of-ama-dablam.jpg?s=2048x2048&w=is&k=20&c=BUSErYq5yWkihlZF4oXUWywqU3E1kmNzp_Y4qz-yy70='alt='' />
          <div className='flex flex-col absolute top-[500px] left-[600px] items-center text-white '>
          
            <div> 
              <h3 className='text-6xl font-bold'></h3>
            </div>
          </div>
        </div>
    
        <div className='w-[1200px] m-auto'> 
        <h3 className='text-3xl text-orange-600 text-start font-bold my-6'>Destination</h3>
        <div className='my-6 flex flex-wrap gap-7 '>
              
                   <div className="relative group w-[350px] box-shadow-md " >
                   <img
                     className="h-[330px] w-[350px] object-cover rounded-md transition-all duration-300 group-hover:filter group-hover:brightness-50"
                     src='https://cdn.britannica.com/17/83817-050-67C814CD/Mount-Everest.jpg'
                     alt=""
                   />
                   <div className=" text-white py-1 px-2 rounded-md">
                   <p className="absolute top-[250px] left-[130px] font-bold py-2 text-3xl">Nepal</p>
                   <h3 className="text-xl font-bol bg-orange-900 w-[200px] text-center rounded-md absolute top-[300px] left-[70px] ">34 Trips available</h3>
                   </div>
                  
                 </div>

                 <div className="relative group w-[350px] box-shadow-md " >
                   <img
                     className="h-[330px] w-[350px] object-cover rounded-md transition-all duration-300 group-hover:filter group-hover:brightness-50"
                     src='https://cdn.britannica.com/11/83411-050-217610BA/Tiger-monastery-Nest-Buddhist-Bhutan.jpg'
                     alt=""
                   />
                   <div className=" text-white py-1 px-2 rounded-md">
                   <p className="absolute top-[250px] left-[130px] font-bold py-2 text-3xl">Bhutan</p>
                   <h3 className="text-xl font-bol bg-orange-900 w-[200px] text-center rounded-md absolute top-[300px] left-[70px] ">18 Trips available</h3>
                   </div>
                  
                 </div>

                 <div className="relative group w-[350px] box-shadow-md " >
                   <img
                     className="h-[330px] w-[350px] object-cover rounded-md transition-all duration-300 group-hover:filter group-hover:brightness-50"
                     src='https://i.natgeofe.com/k/cc247ea7-5ae7-4131-8e07-60307c8f11e7/china-dragon.jpg?wp=1&w=1084.125&h=609'
                     alt=""
                   />
                   <div className=" text-white py-1 px-2 rounded-md">
                   <p className="absolute top-[250px] left-[130px] font-bold py-2 text-3xl">China</p>
                   <h3 className="text-xl font-bol bg-orange-900 w-[200px] text-center rounded-md absolute top-[300px] left-[70px] ">38 Trips available</h3>
                   </div>
                  
                 </div>

                 <div className="relative group w-[350px] box-shadow-md " >
                   <img
                     className="h-[330px] w-[350px] object-cover rounded-md transition-all duration-300 group-hover:filter group-hover:brightness-50"
                     src='https://trexmount.com/wp-content/uploads/2022/09/India-Trexmount.jpg'
                     alt=""
                   />
                   <div className=" text-white py-1 px-2 rounded-md">
                   <p className="absolute top-[250px] left-[130px] font-bold py-2 text-3xl">India</p>
                   <h3 className="text-xl font-bol bg-orange-900 w-[200px] text-center rounded-md absolute top-[300px] left-[70px] ">48 Trips available</h3>
                   </div>
                  
                 </div>
            
               
              
              </div>
        </div>
    
        </>
  )
}

export default Journey
