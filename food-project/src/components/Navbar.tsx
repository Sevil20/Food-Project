import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { NavigationContext } from './NavigationContext'; // Import your NavigationContext

const Navbar: React.FC = () => {
    const { basename } = useContext(NavigationContext);

    console.log('Navbar basename:', basename);  
    return (
      <nav className="bg-gray-800 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <Link to={`${basename}/`} className="text-white text-xl font-semibold">
            My App
          </Link>
          <ul className="flex space-x-4">
            <li>
              <Link to={`${basename}/`} className="text-white hover:text-gray-300">
                Home
              </Link>
            </li>
            <li>
              <Link to={`${basename}/about`} className="text-white hover:text-gray-300">
                About
              </Link>
            </li>
            {/* Add more navigation items as needed */}
          </ul>
        </div>
      </nav>
    );
  };
  

export default Navbar;
