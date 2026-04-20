import React from 'react'

const AcceptTask = () => {
  return (
    <div>
        
      <div className='p-5 h-full w-[300px] flex-shrink-0 bg-[#F9FAFB] rounded-2xl shadow-sm'>
        <div className='flex justify-between items-center'>
          <h3 className='bg-red-100 text-red-600 px-3 py-1 rounded-full text-xs'>High</h3>
          <h4 className='text-xs text-gray-500'>12 Mar 2026</h4>
        </div>
        <h2 className='mt-4 text-lg font-semibold text-gray-800'>Design Landing Page</h2>
        <p className='text-sm text-gray-500 mt-2'>
          Create a clean and responsive landing page design for a startup website.
        </p>
      </div>
      <div className='flex justify-between mt-4'>
        <button className='bg-green-400 py-1 px-2 text-sm'>Mark as completed</button>
        <button className='bg-red-500 py-1 px-2 text-sm'>Mark as failed</button>
      </div>
    </div>
  )
}

export default AcceptTask