import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  const [isJourneyHovered, setIsJourneyHovered] = useState(false);

  const handleJourneyMouseEnter = () => {
    setIsJourneyHovered(true);
  };

  const handleJourneyMouseLeave = () => {
    setIsJourneyHovered(false);
  };

  return (
    <div className='w-full m-auto flex justify-between items-center py-4 px-6 sticky top-0 z-30 bg-white'>
      <div>
        <img src="https://i0.wp.com/www.shangrilavoyages.com/wp-content/uploads/2022/05/shangrila-logo.png?fit=210%2C62&ssl=1" alt="" />
      </div>

      <ul className='flex gap-6 text-xl font-semibold relative'>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/aboutus">About Us</Link></li>
        <li
          onMouseEnter={handleJourneyMouseEnter}
          onMouseLeave={handleJourneyMouseLeave}
          className="relative"
        >
          <Link to="/journey">Journey</Link>
          {isJourneyHovered && (
            <div className="absolute top-full left-0 l bg-white text-black p-4 shadow-lg">
              <div className="flex justify-around">
                <Link to="/nepal" className="block px-4 py-2 hover:bg-gray-200">Nepal</Link>
                <Link to="/bhutan" className="block px-4 py-2 hover:bg-gray-200">Bhutan</Link>
                <Link to="/india" className="block px-4 py-2 hover:bg-gray-200">India</Link>
                <Link to="/china" className="block px-4 py-2 hover:bg-gray-200">China</Link>
                {/* Add more content here as needed */}
              </div>
            </div>
          )}
        </li>
        <li><Link to="/lifemoment">LifeMoment</Link></li>
        <li><Link to="/departure">Departure</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>

      <div>
        <ul className='flex gap-2 text-lg font-semibold'>
          <li className='flex'>
            <img className='w-[30px] h-[30px]' src="https://www.shutterstock.com/image-vector/american-flag-button-icon-standard-260nw-2342301771.jpg" alt="" />
            <a href="">Eng</a>
          </li>
          <li className='flex'>
            <img className='w-[30px] h-[30px]' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyBNEst0fhRr9uJoUVTzj_kGA5PhU4A3YGZQ&s" alt="" />
            <a href="">Nep</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Nav;
