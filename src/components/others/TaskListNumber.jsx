import React from 'react'

const TaskListNumber = ({data}) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mt-10">

      <div className="bg-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition">
        <h2 className="text-3xl font-bold text-gray-800">{data.taskNumber.newTask}</h2>
        <h3 className="text-sm text-gray-500 mt-1">New Task</h3>
      </div>

      <div className="bg-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition">
        <h2 className="text-3xl font-bold text-gray-800">{data.taskNumber.completed}</h2>
        <h3 className="text-sm text-gray-500 mt-1">Completed</h3>
      </div>

      <div className="bg-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition">
        <h2 className="text-3xl font-bold text-gray-800">{data.taskNumber.active}</h2>
        <h3 className="text-sm text-gray-500 mt-1">Accepted</h3>
      </div>

      <div className="bg-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition">
        <h2 className="text-3xl font-bold text-gray-800">{data.taskNumber.failed}</h2>
        <h3 className="text-sm text-gray-500 mt-1">Failed</h3>
      </div>

    </div>
  )
}

export default TaskListNumber