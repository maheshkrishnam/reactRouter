import React from 'react'
import { useState, useEffect } from 'react'

function About() {
  const [data, setData] = useState({})
  useEffect(()=>{
    fetch("https://api.github.com/users/maheshkrishnam")
    .then(res => res.json())
    .then(data => {
      console.log(data);
      setData(data)
    })
  }, [])
  return (
    <div className='flex justify-center'>
      <div className="flex items-center border-t-2 border-b-2 p-4 m-2 w-2/3">
        <img src="https://miro.medium.com/v2/resize:fit:428/0*7VYtEI6lRkke3VnN.jpg" alt="" className='h-72 pr-6'/>
        <div>
          <h1 className='font-bold text-3xl pb-6 text-center'>
            Something About Myself
          </h1>
          <p className='font-semibold text-center'>
            As a seasoned React developer, I thrive on transforming complex problems into elegant and user-friendly solutions. My journey in the world of web development began with a passion for creating seamless and interactive user interfaces. 
            <br />
            Over the years, I have honed my skills in React, leveraging its powerful component-based architecture to craft dynamic and efficient applications(This Para is generated using AI).
          </p>
        </div>
        
      </div>
    </div>
  )
}

export default About