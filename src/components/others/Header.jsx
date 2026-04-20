import React from 'react'

const Header = ({data}) => {

  console.log(data)
  return (
    <div className='flex item-end justify-between'>
        <h1 className='text-2xl font-semibold text-white'>Hello <br /> <span className='text-3xl font-semibold text-white'>{data.firtName}</span></h1>
        <button className='bg-red-600 text-white font-medium px-4 py-3 rounded-3xl'>Give UP</button>
    </div> 
  )
}

export default Header