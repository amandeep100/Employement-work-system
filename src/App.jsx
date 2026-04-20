import React, { useContext, useEffect, useState,} from 'react'
import Login from './components/auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { AuthContext } from './context/AuthProvider'
import { setLocalStorage } from './utils/LocalStorage'

const App = () => {

 const[user,setUser] = useState(null)
const [loggedInUserData,setLoggedInUserData] = useState(null)
   const authData = useContext(AuthContext)
// console.log(authData.employees)

useEffect(() => {
 const loggedInUser = localStorage.getItem('loggedInUser')
 if(loggedInUser){
  // console.log("user loged in ")
  const userData = JSON.parse(loggedInUser)
 }
})

 const handleLogin = (email,password) =>{    //check email password matching or not
if(email == 'admin@me.com' && password == '123'){
  setUser('admin')
  localStorage.setItem('loggedInUser',JSON.stringify({role:'admin'}))
  // console.log("this is admin")
 } else if(authData){
  const employee =  authData.employees.find((e) => email == e.email && e.password == password)
  if(employee){
setUser('employee')
setLoggedInUserData(employee)
  localStorage.setItem('loggedInUser',JSON.stringify({role:'employee'}))
 }
  }
  
 else{
  alert("invalid user")
 }
}

//  handleLogin('admin@me.com', '123')
  return (
    <>
     {!user ? <Login handleLogin = {handleLogin}/>: ''}
    {user === 'admin' ? <AdminDashboard/>:(user == 'employee' ? <EmployeeDashboard data = {loggedInUserData}/> : null)} 
    {/* {user === 'employee' && <EmployeeDashboard/>} */}
    
   
  
    {/* <AdminDashboard/> */}
    </>
  )
}

export default App