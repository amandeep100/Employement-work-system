
import React,{useState}from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import FailedTask from './FailedTask'
import CompleteTask from './CompleteTask'

const TaskList = ({data}) => {

  const [filter,setFilter] = useState('all')
  const filteredTasks = data?.task?.filter(task => {
    if(filter === 'all') return true
    if(filter ==='active') return task.active
    if(filter === 'completed') return task.complted
    if(filter === 'failed') return task.failed
    return true
  })
  return (
     
  <div>
    <div className='flex gap-3 mt-5'>
      {['all','active','complted', 'failed'].map(f => {
        <button  className='bg-gray-300 px-3 py-1 rounded'
        key ={f} onClick={() => setFilter(f)}>{f}</button>
      })}

    </div>

    <div id='tasklist' className='h-[300px] flex items-center flex-nowrap mt-10 gap-5 py-5 w-full overflow-x-auto'>
     {filteredTasks?.map((elem,idx) =>{
      if(elem.active){ return <AcceptTask key={idx} data ={elem} index ={idx}/>
      }
      if(elem.newTask){
        return <NewTask  key={idx} data = {elem} index ={idx}/>
      }
      if(elem.completed){
        return <CompleteTask  key={idx} data = {elem} index ={idx}/>
      }
      if(elem.failed){
        return <FailedTask  key={idx} data = {elem} index ={idx}/>
      }
      return null
     })}
      
    </div>
    </div>
  )
}

export default TaskList