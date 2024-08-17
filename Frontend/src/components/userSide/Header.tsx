import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setIsAuthenticated, setLoading, setUser } from '../../redux/slices/userSlice';
import { RootState } from "../../redux/store/store";


const  Header = ()=> {

  const dispatch = useDispatch()

  const handleClick = ()=>{
    dispatch(setLoading(true))
    dispatch(setUser(null))
    dispatch(setIsAuthenticated(false))
    dispatch(setLoading(false))
    
    
  }

    return (
      <header className="bg-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold">Work From HUB</div>
          <nav className="hidden md:flex space-x-4">
            <a href="#" className="text-orange-500">Become a Member</a>
            <a href="#">View all Workspace</a>
            <a href="#">Call us for Help</a>
            <button onClick={handleClick} className="bg-white border border-gray-300 rounded-full px-4 py-2">Profile</button>
          </nav>
          {/* Add a mobile menu button for small screens */}
        </div>
      </header>
    );
  }
export default Header
