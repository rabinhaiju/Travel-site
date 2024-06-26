import React from 'react';
import { useParams } from 'react-router-dom';
import { Travel } from './Travel';
import { useNavigate } from 'react-router-dom';

const DestinationDetail = () => {


  const { id } = useParams();
  const destination = Travel.find(item => item.id === parseInt(id));

  if (!destination) {
    return <div>Destination not found</div>;
  }

  const navigate = useNavigate();
  const goToDetail = (id) => {
    navigate(`/details/${id}`);
  }

  return (
    <>
<div className='relative'>
      <img className='w-full h-[90vh] object-cover' src={destination.image} alt={destination.title} />
      <div className='flex flex-col absolute top-[500px] left-[600px] items-center text-white '>
        <div className='flex gap-6'>
          <p className='text-2xl font-bold'>Nepal</p>
          <p className='text-2xl font-bold'>{destination.activity}</p>
          <p className='text-2xl font-bold'>{destination.days}</p>
        </div>
        <div> 
          <h3 className='text-6xl font-bold'>{destination.title}</h3>
        </div>
      </div>
    </div>

    <div className='w-[1200px] m-auto'> 
    <h3 className='text-3xl text-orange-600 text-center font-bold my-6'>Related Trips</h3>
    <div className='my-6 flex flex-wrap gap-7 '>
           {Travel.slice(0,6).map((item,id)=>(
               <div className="relative group w-[350px] box-shadow-md " key={id}>
               <img
                 className="h-[330px] w-[350px] object-cover rounded-md transition-all duration-300 group-hover:filter group-hover:brightness-50"
                 src={item.image}
                 alt=""
               />
               <div className="absolute top-5 left-4 bg-gray-200 py-1 px-2 rounded-md">{item.title}</div>
               <p className="font-bold py-2 text-xl">{item.activity}</p>
               <h3 className="text-2xl font-bold text-blue-900">{item.days}</h3>
               <button onClick={() => goToDetail(item.id)} className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-orange-800 text-white text-xl font-bold py-2 px-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-blue-600  ">
                 View Details
               </button>
             </div>
           ))}
           
          
          </div>
    </div>

    </>
  )
}

export default DestinationDetail;
