// import React from 'react'

// const NewTask = ({data }) => {
//   return (
      
//       <div className='p-5 h-full w-[300px] flex-shrink-0 bg-[#F0FDF4] rounded-2xl shadow-sm'>
//         <div className='flex justify-between items-center'>
//           <h3 className='bg-green-100 text-green-600 px-3 py-1 rounded-full text-xs'>{data.category}</h3>
//           <h4 className='text-xs text-gray-500'>{data.taskDate}</h4>
//         </div>
//         <h2 className='mt-4 text-lg font-semibold text-gray-800'>{data.taskTitle}</h2>
//         <p className='text-sm text-gray-500 mt-2'>
//           {/* Resolve authentication issue where users are unable to log in properly.
//            */}
//       {data.taskDescription}
//         </p>
//         <div className='mt-4'>
//             <button>Accept Task</button>
//         </div>
//       </div>
//   )
// }

// export default NewTask

import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const NewTask = ({ data, index }) => {
  const { userData, setUserData } = useContext(AuthContext)

  const acceptTask = () => {
    const updated = [...userData]

    updated.forEach(emp => {
      emp.tasks[index].active = true
      emp.tasks[index].newTask = false

      emp.taskNumber.active++
      emp.taskNumber.newTask--
    })

    setUserData(updated)
  }

  return (
    <div className='p-5 w-[300px] bg-green-50 rounded-2xl'>
      <h3>{data.category}</h3>
      <h2>{data.taskTitle}</h2>
      <p>{data.taskDescription}</p>

      <button onClick={acceptTask} className='mt-3 bg-green-500 px-2 py-1'>
        Accept Task
      </button>

    </div>
  )
}

export default NewTask