import React from 'react'

function Footer() {
  return (
    <div className="flex justify-center">
      <div className="flex items-center border-t-2 border-b-2 p-4 w-2/3 border-y-2 flex-col">
      <div className='flex justify-between w-full'>
        <img src="https://play-lh.googleusercontent.com/Fro4e_osoDhhrjgiZ_Y2C5FNXBMWvrb4rGpmkM1PDAcUPXeiAlPCq7NeaT4Q6NRUxRqo" alt=""  className='h-20'/>
        <div className='font-medium text-sm text-slate-500'>
          <h3 className='font-medium text-base'>RESOURCES</h3>
          <p>Home</p>
          <p>About</p>
        </div>
        <div className='font-medium text-sm text-slate-500'>
          <h3 className='font-medium text-base'>FOLLOW US</h3>
          <p>Github</p>
          <p>Facebook</p>
        </div>
        <div className='font-medium text-sm text-slate-500'>
          <h3 className='font-medium text-base'>LEGAL</h3>
          <p>Private Policies</p>
          <p>Terms & Conditions</p>
        </div>
      </div>
      <div className='flex items-center'>
        <p className="mx-10">&#169;maheshkrishnam all rights reserved</p>
        <p className="flex">
          <img src="https://image.similarpng.com/very-thumbnail/2020/06/Black-icon-Instagram-logo-transparent-PNG.png" alt="" className="h-4"/>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNYV9HTH72FhT606rIDLWALV0rFXqzToHBhkLuJpBKig&s" alt="" className="h-4"/>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSC7GdvbosQ6sinkNq6cx4ZJxoniNYweg7C2RAHUn0Emg&s" alt="" className="h-4"/>
          <img src="https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png" alt="" className="h-4"/>
        </p>
      </div>
    </div>
    </div>
  )
}

export default Footer