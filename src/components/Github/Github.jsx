import React, { useEffect, useState } from 'react'

function Github() {
  const [data, setData] = useState({})

  useEffect(() =>{
    fetch(`https://api.github.com/users/maheshkrishnam`)
    .then(response => response.json())
    .then(response => setData(response))
  }, [])

  return (
    <div className="flex justify-center">
      <div className="flex items-center border-t-2 border-b-2 p-4 m-2 w-2/3 justify-center">
        <img src={data.avatar_url} alt="" className="h-72"/>
        <div className="flex flex-col ml-10 bg-slate-800 rounded-md p-4 h-72 text-slate-300 font-bold text-md">
          <div>Username: {data.name}</div>
          <div>Followers: {data.followers}</div>
          <div>Following: {data.following}</div>
        </div>
      </div>
    </div>
  )
}

export default Github;
