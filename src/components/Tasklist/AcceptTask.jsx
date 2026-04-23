// import React from 'react'

// const AcceptTask = ({data}) => {
//   return (
//     <div>
        
//       <div className='p-5 h-full w-[300px] flex-shrink-0 bg-[#F9FAFB] rounded-2xl shadow-sm'>
//         <div className='flex justify-between items-center'>
//           <h3 className='bg-red-100 text-red-600 px-3 py-1 rounded-full text-xs'>{data.category}</h3>
//           <h4 className='text-xs text-gray-500'>{data.taskDate}</h4>
//         </div>
//         <h2 className='mt-4 text-lg font-semibold text-gray-800'>{data.taskTitle}</h2>
//         <p className='text-sm text-gray-500 mt-2'>
//           {/* Create a clean and responsive landing page design for a startup website. */}
//           {data.taskDescription}
//         </p>
//       </div>
//       <div className='flex justify-between mt-4'>
//         <button className='bg-green-400 py-1 px-2 text-sm'>Mark as completed</button>
//         <button className='bg-red-500 py-1 px-2 text-sm'>Mark as failed</button>
//       </div>
//     </div>
//   )
// }

// export default AcceptTask


import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const AcceptTask = ({ data, index }) => {
  const { userData, setUserData } = useContext(AuthContext)

  const markCompleted = () => {
    const updated = [...userData]

    updated.forEach(emp => {
      emp.tasks[index].active = false
      emp.tasks[index].completed = true

      emp.taskNumber.active--
      emp.taskNumber.completed++
    })

    setUserData(updated)
  }

  const markFailed = () => {
    const updated = [...userData]

    updated.forEach(emp => {
      emp.tasks[index].active = false
      emp.tasks[index].failed = true

      emp.taskNumber.active--
      emp.taskNumber.failed++
    })

    setUserData(updated)
  }

  // 🔴 Deadline Highlight
  const isOverdue = new Date(data.taskDate) < new Date()

  return (
    <div className={`p-5 w-[300px] rounded-2xl ${isOverdue ? 'bg-red-200' : 'bg-white'}`}>
      <h3>{data.category}</h3>
      <h2>{data.taskTitle}</h2>
      <p>{data.taskDescription}</p>

      <div className='flex gap-2 mt-3'>
        <button onClick={markCompleted} className='bg-green-500 px-2 py-1'>
          Complete
        </button>
        <button onClick={markFailed} className='bg-red-500 px-2 py-1'>
          Fail
        </button>
      </div>
    </div>
  )
}

export default AcceptTask