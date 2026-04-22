import React from 'react'

const NewTask = ({data}) => {
  return (
      
      <div className='p-5 h-full w-[300px] flex-shrink-0 bg-[#F0FDF4] rounded-2xl shadow-sm'>
        <div className='flex justify-between items-center'>
          <h3 className='bg-green-100 text-green-600 px-3 py-1 rounded-full text-xs'>{data.category}</h3>
          <h4 className='text-xs text-gray-500'>{data.date}</h4>
        </div>
        <h2 className='mt-4 text-lg font-semibold text-gray-800'>{data.title}</h2>
        <p className='text-sm text-gray-500 mt-2'>
          {/* Resolve authentication issue where users are unable to log in properly.
           */}
      {data.description}
        </p>
        <div className='mt-4'>
            <button>Accept Task</button>
        </div>
      </div>
  )
}

export default NewTask