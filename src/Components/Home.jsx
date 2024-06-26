import React, { useState, useEffect } from 'react';
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import { IoSearchOutline } from "react-icons/io5";
import { Travel } from './Travel';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const [destination, setDestination] = useState(Travel);
  const [input, setInput] = useState('');
  
  const changeInput = (e) => {
    setInput(e.target.value);
  }
  
  const filteredDestination = destination.filter(item => item.title.toLowerCase().includes(input.toLowerCase()));
  const images = [
    "https://www.shangrilavoyages.com/wp-content/uploads/2023/05/everst-banner.jpg",
    "https://www.shangrilavoyages.com/wp-content/uploads/2024/06/Tiger-in-Nepal-e1717912107511.webp",
    "https://www.shangrilavoyages.com/wp-content/uploads/2022/05/DSC_5608.jpg",
    "https://www.shangrilavoyages.com/wp-content/uploads/2022/06/Tengboche-Monastery.jpg",
  ];

  const details = [
    { title: "Everest", place: "Himalayas" },
    { title: "Tiger", place: "Nepal" },
    { title: "Landscape", place: "Nepal" },
    { title: "Monastery", place: "Tengboche" },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => prevIndex === 0 ? images.length - 1 : prevIndex - 1);
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => prevIndex === images.length - 1 ? 0 : prevIndex + 1);
  };

  useEffect(() => {
    const autoSlide = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    }, 3000); // Change the interval duration as needed (3000ms = 3 seconds)

    return () => clearInterval(autoSlide); // Cleanup the interval on component unmount
  }, [])

  const navigate = useNavigate();
  const goToDetail = (id) => {
    navigate(`/details/${id}`);
  }

  return (
    <>
      <div className="relative">
        <img className="w-full" src={images[currentIndex]} alt={`Slide ${currentIndex}`} />
        <div className="absolute inset-0 flex flex-col pb-[150px] justify-end items-center text-center text-white bg-black bg-opacity-50">
          <h3 className="text-7xl font-bold mb-4">{details[currentIndex].title}</h3>
          <p className="text-3xl font-semibold">{details[currentIndex].place}</p>
        </div>
        <button
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2"
          onClick={handlePrevClick}
        >
          <MdArrowBackIos size={24} />
        </button>
        <button
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2"
          onClick={handleNextClick}
        >
          <MdArrowForwardIos size={24} />
        </button>
      </div>

      <div className='w-[1200px] m-auto my-6'>
        <h3 className='text-5xl font-bold text-orange-500 my-6'>Find Your Adventure / Itineraries</h3>
        <div className='flex items-center my-4'>
          <div className=' flex items-center border-b border-black py-3 flex-1 opacity-60 gap-3 '>
            <IoSearchOutline className='text-2xl opacity-80 mr-2' />
            <input value={input} onChange={changeInput} className='text-2xl border-none focus:border-none focus:outline-none ' type="text" placeholder='Search activities or tours' />
          </div>
          <div className='flex items-center justify-center w-12 h-12 bg-yellow-800 text-white rounded-full ms-6'>
            <IoSearchOutline className='text-2xl opacity-80' />
          </div>
        </div>

        <div className=''>
          <h3 className='text-3xl text-orange-600 text-center font-bold my-6'>Most Popular Tours</h3>
          <p className='text-xl semi-bold text-center '>We have a unique way of meeting your adventurous expectations!</p>

          <div className='my-6 flex flex-wrap gap-7 justify-center'>
            {filteredDestination.map((item, id) => (
              <div className="relative group w-[350px] box-shadow-md " key={id}>
                <img
                  className="h-[330px] w-[350px] object-cover rounded-md transition-all duration-300 group-hover:filter group-hover:brightness-50"
                  src={item.image}
                  alt=""
                />
                <div className="absolute top-5 left-4 bg-gray-200 py-1 px-2 rounded-md">{item.days}</div>
                <p className="font-bold py-2 text-xl">{item.activity}</p>
                <h3 className="text-2xl font-bold text-blue-900">{item.title}</h3>
                <button onClick={() => goToDetail(item.id)} className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-orange-800 text-white text-xl font-bold py-2 px-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-blue-600  ">
                  View Details
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
