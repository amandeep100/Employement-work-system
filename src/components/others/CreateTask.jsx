import React from 'react'

const CreateTask = () => {
  return (
 <div className='mt-10 flex justify-center'>
        
        <form className='w-full max-w-4xl bg-[#2A2A2A] rounded-2xl p-8 shadow-lg flex gap-8'>
       
          <div className='flex flex-col gap-4 w-1/2'>
            
            <div>
              <h3 className='text-sm text-gray-400 mb-1'>Task Title</h3>
              <input 
                className='w-full px-4 py-2 rounded-lg bg-[#1C1C1C] border border-gray-600 outline-none focus:border-white'
                type="text" 
                placeholder='Make a UI design'
              />
            </div>

            <div>
              <h3 className='text-sm text-gray-400 mb-1'>Date</h3>
              <input 
                className='w-full px-4 py-2 rounded-lg bg-[#1C1C1C] border border-gray-600 outline-none focus:border-white'
                type="date"
              />
            </div>

            <div>
              <h3 className='text-sm text-gray-400 mb-1'>Assign To</h3>
              <input 
                className='w-full px-4 py-2 rounded-lg bg-[#1C1C1C] border border-gray-600 outline-none focus:border-white'
                type="text" 
                placeholder='Employee name'
              />
            </div>

            <div>
              <h3 className='text-sm text-gray-400 mb-1'>Category</h3>
              <input 
                className='w-full px-4 py-2 rounded-lg bg-[#1C1C1C] border border-gray-600 outline-none focus:border-white'
                type="text" 
                placeholder='Design / Dev / UI'
              />
            </div>

            <button className='mt-4 bg-white text-black py-2 rounded-lg hover:bg-gray-200 transition'>
              Create Task
            </button>

          </div>

          <div className='w-1/2 flex flex-col'>
            
            <h3 className='text-sm text-gray-400 mb-1'>Description</h3>
            
            <textarea 
              className='w-full h-full px-4 py-2 rounded-lg bg-[#1C1C1C] border border-gray-600 outline-none focus:border-white resize-none'
              placeholder='Write task description here...'
            ></textarea>

          </div>

        </form>

      </div>
  )
}

export default CreateTask