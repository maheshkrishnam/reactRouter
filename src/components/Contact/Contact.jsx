import React from 'react'

function Contact() {
  return (
    <div className="flex justify-center">
      <div className="flex flex-col items-center border-t-2 border-b-2 p-4 m-2 w-2/3">
        <div>
          <h1 className='font-bold text-3xl p-8 text-center'>
            Contact Us
          </h1>
        </div>
        <div className='flex justify-between w-full font-medium text-base text-slate-500 p-6'>
          <div>
            <h3 className="text-xl text-black">Via Phone </h3>
            <div>
              <p>India: 1234567890</p>
              <p>International: 9876543210</p>
            </div>
          </div>
          <div>
            <h3 className="text-xl text-black">Via SMS </h3>
            <div>
              <p>India: 5678901234</p>
              <p>International: 4321098765</p>
            </div>
          </div>
          <div>
            <h3 className="text-xl text-black">Via email </h3>
            <div>
              <p>Email: test@example.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact