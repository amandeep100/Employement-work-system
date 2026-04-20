
import React from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import FailedTask from './FailedTask'
import CompleteTask from './CompleteTask'

const TaskList = ({data}) => {
  return (
    <div id='tasklist' className='h-[300px] flex items-center flex-nowrap mt-10 gap-5 py-5 w-full overflow-x-auto'>
     {data.tasks.map((elem,idx) =>{
      if(elem.active){
        return <AcceptTask key={idx}/>
      }
      if(elem.NewTask){
        return <NewTask  key={idx}/>
      }
      if(elem.completed){
        return <CompleteTask  key={idx}/>
      }
      if(elem.failed){
        return <FailedTask  key={idx}/>
      }
     })}
      {/* <div className='p-5 h-full w-[300px] flex-shrink-0 bg-[#F9FAFB] rounded-2xl shadow-sm'>
        <div className='flex justify-between items-center'>
          <h3 className='bg-red-100 text-red-600 px-3 py-1 rounded-full text-xs'>High</h3>
          <h4 className='text-xs text-gray-500'>12 Mar 2026</h4>
        </div>
        <h2 className='mt-4 text-lg font-semibold text-gray-800'>Design Landing Page</h2>
        <p className='text-sm text-gray-500 mt-2'>
          Create a clean and responsive landing page design for a startup website.
        </p>
      </div> */}

{/*    
      <div className='p-5 h-full w-[300px] flex-shrink-0 bg-[#F0FDF4] rounded-2xl shadow-sm'>
        <div className='flex justify-between items-center'>
          <h3 className='bg-green-100 text-green-600 px-3 py-1 rounded-full text-xs'>Low</h3>
          <h4 className='text-xs text-gray-500'>15 Mar 2026</h4>
        </div>
        <h2 className='mt-4 text-lg font-semibold text-gray-800'>Fix Login Bug</h2>
        <p className='text-sm text-gray-500 mt-2'>
          Resolve authentication issue where users are unable to log in properly.
        </p>
      </div> */}

      {/* <div className='p-5 h-full w-[300px] flex-shrink-0 bg-[#EFF6FF] rounded-2xl shadow-sm'>
        <div className='flex justify-between items-center'>
          <h3 className='bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-xs'>Medium</h3>
          <h4 className='text-xs text-gray-500'>18 Mar 2026</h4>
        </div>
        <h2 className='mt-4 text-lg font-semibold text-gray-800'>API Integration</h2>
        <p className='text-sm text-gray-500 mt-2'>
          Connect frontend with backend APIs and handle data fetching properly.
        </p>
      </div>

    
      <div className='p-5 h-full w-[300px] flex-shrink-0 bg-[#FEFCE8] rounded-2xl shadow-sm'>
        <div className='flex justify-between items-center'>
          <h3 className='bg-yellow-100 text-yellow-600 px-3 py-1 rounded-full text-xs'>Medium</h3>
          <h4 className='text-xs text-gray-500'>20 Mar 2026</h4>
        </div>
        <h2 className='mt-4 text-lg font-semibold text-gray-800'>Write Documentation</h2>
        <p className='text-sm text-gray-500 mt-2'>
          Prepare clear documentation for project setup and API usage.
        </p>
      </div>

 
      <div className='p-5 h-full w-[300px] flex-shrink-0 bg-[#FDF2F8] rounded-2xl shadow-sm'>
        <div className='flex justify-between items-center'>
          <h3 className='bg-pink-100 text-pink-600 px-3 py-1 rounded-full text-xs'>Low</h3>
          <h4 className='text-xs text-gray-500'>22 Mar 2026</h4>
        </div>
        <h2 className='mt-4 text-lg font-semibold text-gray-800'>UI Improvements</h2>
        <p className='text-sm text-gray-500 mt-2'>
          Enhance user interface with better spacing, colors, and interactions.
        </p>
      </div> */}

    </div>
  )
}

export default TaskList