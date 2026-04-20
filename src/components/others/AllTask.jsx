import React from 'react'

const AllTask = () => {
  return (
    <div className='bg-[#1C1C1C] rounded-2xl p-5 mt-5 space-y-3 h-48 overflow-auto'>

  
      <div className='bg-[#F9FAFB] text-black py-3 px-4 rounded-lg flex justify-between items-center'>
        <h2 className='font-medium'>Aman</h2>
        <h3 className='text-gray-600'>UI Design</h3>
        <h5 className='text-red-500 font-medium'>High</h5>
      </div>

      <div className='bg-[#F0FDF4] text-black py-3 px-4 rounded-lg flex justify-between items-center'>
        <h2 className='font-medium'>Rahul</h2>
        <h3 className='text-gray-600'>Bug Fixing</h3>
        <h5 className='text-green-600 font-medium'>Completed</h5>
      </div>

      <div className='bg-[#6290cd] text-black py-3 px-4 rounded-lg flex justify-between items-center'>
        <h2 className='font-medium'>Priya</h2>
        <h3 className='text-gray-600'>API Integration</h3>
        <h5 className='text-blue-600 font-medium'>In Progress</h5>
      </div>

      <div className='bg-[#FEFCE8] text-black py-3 px-4 rounded-lg flex justify-between items-center'>
        <h2 className='font-medium'>Rohit</h2>
        <h3 className='text-gray-600'>Testing</h3>
        <h5 className='text-yellow-600 font-medium'>Pending</h5>
      </div>

    
      <div className='bg-[#FDF2F8] text-black py-3 px-4 rounded-lg flex justify-between items-center'>
        <h2 className='font-medium'>Sneha</h2>
        <h3 className='text-gray-600'>Documentation</h3>
        <h5 className='text-pink-600 font-medium'>Review</h5>
      </div>

    </div>
  )
}

export default AllTask