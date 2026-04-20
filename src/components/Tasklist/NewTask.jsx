import React from 'react'

const NewTask = () => {
  return (
      
      <div className='p-5 h-full w-[300px] flex-shrink-0 bg-[#F0FDF4] rounded-2xl shadow-sm'>
        <div className='flex justify-between items-center'>
          <h3 className='bg-green-100 text-green-600 px-3 py-1 rounded-full text-xs'>Low</h3>
          <h4 className='text-xs text-gray-500'>15 Mar 2026</h4>
        </div>
        <h2 className='mt-4 text-lg font-semibold text-gray-800'>Fix Login Bug</h2>
        <p className='text-sm text-gray-500 mt-2'>
          Resolve authentication issue where users are unable to log in properly.
        </p>
        <div className='mt-4'>
            <button>Accept Task</button>
        </div>
      </div>
  )
}

export default NewTask