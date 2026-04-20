
import React, { useState } from 'react'

const Login = ({handleLogin}) => {
    const[email,setEmail] = useState('')
    const[password, setPassword] = useState('')

const SubmitHandler = (e) =>{
    e.preventDefault()
    handleLogin(email,password)
    // console.log("form Submitted")
 
    setEmail("")
    setPassword("")

}

    return (
        <div className="flex h-screen w-screen items-center justify-center bg-gray">
            <div className="w-[350px] p-8 bg-gray-200 rounded-2xl shadow-lg">
                <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6"> Welcome Back</h2>
            <form onSubmit={(e) =>{
                SubmitHandler(e)
            }}
            className="flex flex-col gap-4">
            <input
            value = {email}
            onChange = {(e) =>{
                setEmail(e.target.value)
            }}
            required className="w-full px-4 py-3 border text-black border-gray-300 rounded-lg outline-none focus:border-black transition"type="email" placeholder="Email address"/>
                    <input
                    value={password}
                    onChange={(e) =>{
                        setPassword(e.target.value)
                    }}
                    required className="w-full px-4 py-3 border text-black border-gray-300 rounded-lg outline-none focus:border-black transition"type="password"placeholder="Password"/>
    <button className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition">Log In</button>
        </form>
{/* <p className="text-sm text-gray-500 text-center mt-4"> Don't have an account? <span className="text-black cursor-pointer">Sign up</span></p> */}
  </div>
</div>
    )
}

export default Login