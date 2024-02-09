import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
  const {username, email} = useParams()
  return (
    <div className="flex justify-center">
      <div className="flex items-center border-t-2 border-b-2 p-4 w-2/3 m-2 border-y-2 flex-col">
        <h2 className="text-3xl font-bold m-4">These are the Your details</h2>
        <div className="text-base font-semibold text-slate-600 m-4">
          <div>Username: {username}</div>
          <div>Email: {email}</div>
        </div>
      </div>
    </div>
  )
}

export default User