import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
//[api] <-- must be imported!!!. 
import api from "../services/api"

const Login = () =>{

    const[password,setPassword] = useState('')
    const[emial,setEmail] = useState('')
    const[username,setUsername] = useState('')
    const[error,setError] = useState(null)

    const navigate = useNavigate()

    const handleSubmit = async (e) =>{
        e.preventDefault()
        setError(null)
        //debugger
        try{
            const response = await api.post('/XXXXXXX',{
                username,
                password
            })
            debugger
            localStorage.setItem('token',response.data.data.token)
        }catch(error){
            setError("error happend :" + error.message)
        }
    }

    return (
        <>
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-6">
                <h2 className="text-2x1 font-bold text-center text-gray-800 mb-6">Login</h2>

                 {error && <p className="text-red-800 text-center"> {error}</p>} 

                <form className="space-y-4" onSubmit={handleSubmit}>
                    <div className="mb-4">
                        
                        <label htmlFor="username" className="block text-gray-700 mb-1">username </label>
                        <input type="username" placeholder="input userName" value={username} 
                        className = "w-full border rounded px-3 py-2 focus:online-none focus:ring focus:border-blue-300" onChange={(e)=>setUsername(e.target.value)} required/>
                        <label htmlFor="password" className="block text-gray-700 mb-1">password </label>
                        <input type="password" placeholder="input password" value={password} 
                        className = "w-full border rounded px-3 py-2 focus:online-none focus:ring focus:border-blue-300" onChange={(e)=>setPassword(e.target.value)} required/>
                        <button  type="submit"
                        className="w-full bg-blue-500  text-white  py-2 rounded hover:bg-blue-600  transition duration-200"> Login</button >

                    </div>
                </form>
            </div>
        </div>
        
        </>
    );  
    
}

export default Login;