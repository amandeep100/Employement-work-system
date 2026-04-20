import React from 'react'
import Header from '../others/Header'
import TaskListNumber from '../others/TaskListNumber'
import TaskList from '../Tasklist/TaskList'

const EmployeeDashboard = ({data}) => {
  return (
    <div className='h-screen flex flex-col p-5 bg-[#1C1C1C]'>
      <Header data ={data}/>
      <TaskListNumber data ={data}/>
      <TaskList data ={data}/>
    </div>
  )
}

export default EmployeeDashboard