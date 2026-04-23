import React from 'react'

const CompleteTask = ({data}) => {
  return (
   <div className='p-5 h-full w-[300px] flex-shrink-0 bg-[#EFF6FF] rounded-2xl shadow-sm'>
        <div className='flex justify-between items-center'>
          <h3 className='bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-xs'>{data.category}</h3>
          <h4 className='text-xs text-gray-500'>{data.taskDate}</h4>
        </div>
        <h2 className='mt-4 text-lg font-semibold text-gray-800'>{data.taskTitle}</h2>
        <p className='text-sm text-gray-500 mt-2'>
          {/* Connect frontend with backend APIs and handle data fetching properly. */}
          {data.taskDescription}
        </p>
        <div className='mt-2'>
            <button className='w-full'>Completed</button>
        </div>
      </div>
  
  )
}

export default CompleteTask