import React,{createContext,useState,useEffect} from 'react'
import { getLocalStorage, setLocalStorage } from '../utils/LocalStorage'

export const AuthContext = createContext()

const AuthProvider = ({children}) => {

const [userData, setUserData] = useState([])
 

useEffect(() => {
  if(!localStorage.getItem('employees')){
    setLocalStorage()
  }
  const {employees} = getLocalStorage()
  setUserData(employees)
}, [])

//adding taskfilter
useEffect(() =>{
  if(userData.length > 0){
    localStorage.setItem('employees' , JSON.stringify(userData))
  }

},[userData])

  return (
    <div>
        <AuthContext.Provider value = {{ userData,setUserData}}>
          {children}
        </AuthContext.Provider>
       
    </div>
  )
}

export default AuthProvider

// this take the data from local storage and send everyone the data

