// import React from 'react'

// const TaskListNumber = ({data}) => {
//   return (
//     <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mt-10">

//       <div className="bg-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition">
//         <h2 className="text-3xl font-bold text-gray-800">{data?.taskNumber?.newTask}</h2>
//         <h3 className="text-sm text-gray-500 mt-1">New Task</h3>
//       </div>

//       <div className="bg-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition">
//         <h2 className="text-3xl font-bold text-gray-800">{data?.taskNumber?.completed}</h2>
//         <h3 className="text-sm text-gray-500 mt-1">Completed</h3>
//       </div>

//       <div className="bg-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition">
//         <h2 className="text-3xl font-bold text-gray-800">{data?.taskNumber?.active}</h2>
//         <h3 className="text-sm text-gray-500 mt-1">Accepted</h3>
//       </div>

//       <div className="bg-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition">
//         <h2 className="text-3xl font-bold text-gray-800">{data?.taskNumber?.failed}</h2>
//         <h3 className="text-sm text-gray-500 mt-1">Failed</h3>
//       </div>

//     </div>
//   )
// }

// export default TaskListNumber

import React from 'react'

const TaskListNumber = ({ data }) => {
  const total = data.tasks.length
  const completed = data.tasks.filter(t => t.completed).length
  const percent = total ? Math.round((completed / total) * 100) : 0

  return (
    <div className="mt-10">
      
      {/* Progress */}
      <div className="mb-5">
        <h3 className="text-white mb-2">Progress: {percent}%</h3>
        <div className="w-full bg-gray-700 h-3 rounded">
          <div 
            className="bg-green-500 h-3 rounded"
            style={{ width: `${percent}%` }}
          ></div>
        </div>
      </div>

      {/* Numbers */}
      <div className="grid grid-cols-4 gap-5">
        <div>New: {data.taskNumber.newTask}</div>
        <div>Completed: {data.taskNumber.completed}</div>
        <div>Active: {data.taskNumber.active}</div>
        <div>Failed: {data.taskNumber.failed}</div>
      </div>

    </div>
  )
}

export default TaskListNumber