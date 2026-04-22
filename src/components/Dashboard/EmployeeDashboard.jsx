import React from 'react'
import Header from '../others/Header'
import TaskListNumber from '../others/TaskListNumber'
import TaskList from '../Tasklist/TaskList'
// import AcceptTask from '../Tasklist/AcceptTask'
// import CompleteTask from '../Tasklist/CompleteTask'
// import FailedTask from '../Tasklist/FailedTask'

const EmployeeDashboard = (props) => {
  // console.log(data)
  return (
    <div className='h-screen flex flex-col p-5 bg-[#1C1C1C]'>
      <Header changeUser = {props.changeUser} data ={props.data}/>
      <TaskListNumber data ={props.data}/>
      <TaskList data ={props.data}/>
      {/* <AcceptTask data = {data}/> */}
      {/* <CompleteTask data = {data}/>
      <FailedTask data = {data}/> */}
      
    </div>
  )
}

export default EmployeeDashboard