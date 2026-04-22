import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const AllTask = ({data}) => {
  const [userData,setUserData] = useContext(AuthContext)
  
  return (
    <div className='bg-[#1C1C1C] rounded-2xl p-5 mt-5 space-y-3 h-60 overflow-auto'>
      
      {/* Header */}
      <div className='bg-[#F0FDF4] text-black py-3 px-4 rounded-lg flex justify-between items-center'>
        <h2 className='text-black font-medium'>Employee Name</h2>
        <h3 className='text-gray-600'>New Task</h3>
        <h5 className='text-green-600 font-medium'>Active</h5>
        <h5 className='text-blue-600 font-medium'>Completed</h5>
        <h5 className='text-red-600 font-medium'>Failed</h5>
      </div>

      {/* Employee List */}
      {userData.map((elem, idx) => (
        <div 
          key={idx}
          className='bg-[#F9FAFB] text-black py-3 px-4 rounded-lg flex justify-between items-center'
        >
          <h2 className=' text-red-600 font-medium'>{elem.firstName}</h2>
          <h3 className='text-gray-600  text-lg font-medium '>{elem.taskNumber.newTask || 0}</h3>
          <h5 className='text-green-600 text-lg font-medium'>{elem.taskNumber.active || 0}</h5>
          <h5 className='text-blue-600 text-lg font-medium'>{elem.taskNumber.completed || 0}</h5>
          <h5 className='text-red-600 text-lg font-medium'>{elem.taskNumber.failed || 0}</h5>
        </div>
      ))}

    </div>
  )
}

export default AllTask