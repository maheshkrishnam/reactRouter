import React from 'react'
import { NavLink } from 'react-router-dom'

function Header() {
  return (
    <div className="flex justify-center">
      <div className="flex justify-between border-2 p-4 w-2/3 mt-6 rounded-lg">
        <img src="https://play-lh.googleusercontent.com/Fro4e_osoDhhrjgiZ_Y2C5FNXBMWvrb4rGpmkM1PDAcUPXeiAlPCq7NeaT4Q6NRUxRqo" alt="Logo image" className="h-10"/>
        <div className="flex justify-normal items-center">
          <NavLink to="/" className={({isActive})=>`${isActive? "text-orange-700":"text-gray-700"} m-2 font-semibold text`}>Home</NavLink>
          <NavLink to="/about" className={({isActive})=>`${isActive? "text-orange-700":"text-gray-700"} m-2 font-semibold text`}>About</NavLink>
          <NavLink to="/github" className={({isActive})=>`${isActive? "text-orange-700":"text-gray-700"} m-2 font-semibold text`}>Github</NavLink>
          <NavLink to="/contact" className={({isActive})=>`${isActive? "text-orange-700":"text-gray-700"} m-2 font-semibold text`}>Contact</NavLink>
        </div>
        <div className="flex justify-between">
          <button className="bg-orange-500 rounded-xl px-5 h-8 text-white mr-4 w-24">Login</button>
          <button className="bg-orange-500 rounded-xl px-5 h-8 text-white w-24">Signup</button>
        </div>
      </div>
    </div>
  )
}

export default Header