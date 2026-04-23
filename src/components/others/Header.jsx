import React, { useState } from 'react'
import { setLocalStorage } from '../../utils/LocalStorage'

const Header = ({changeUser,data}) => {
 
// const [username,setUsername] = useState('')
// if(!data){
//   setUsername("admin")
// }else{
//   setUsername(data.firtName)
// }

const  username = data ? data.firstName : "Admin"

const logoutUser = () =>{
 localStorage.setItem('loggedInUser','')
// window.location.reload()
changeUser('')
}
  // console.log(data)
  return (
    <div className='flex item-end justify-between'>
        <h1 className='text-2xl font-semibold text-white'>Hello <br/> <span className='text-3xl font-semibold text-white'>{username}</span></h1>
        <button onClick={logoutUser} className='bg-red-600 text-white font-medium px-4 py-3 rounded-3xl'>Give UP</button>
    </div> 
  )
}

export default Header

