import { useState } from "react";
import { useNavigate } from "react-router-dom";
//[api] <-- must be imported!!!. 
import api from "../services/api"

const NdisService = () =>{

    const[serviceTypeId,setServiceTypeId] = useState('')
    const[userId,setUserId] = useState('')
    const[serviceName,setServiceName] = useState('')
    const[serviceDescription,setServiceDescription] = useState('') 
    const[price,setPrice] = useState('') 
    const[error,setError] = useState(null)

    const navigate = useNavigate()

        const handleSubmit = async (e) =>{
        e.preventDefault()
        setError(null)
        debugger
        try{
            const response = await api.post('/api/ndis-service',{
                serviceTypeId,
                userId,
                serviceName,
                serviceDescription,
                price
            })

            debugger
            if(response.code == 1){              

            }else{
            } 
        }catch(error){
            setError("error happend :" + error.message)
        }
    }

        return (
        <>
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-6">
                <h2 className="text-2x1 font-bold text-center text-gray-800 mb-6">NDIS Service</h2>

                 {error && <p className="text-red-800 text-center"> {error}</p>} 

                <form className="space-y-4" onSubmit={handleSubmit}>
                    <div className="mb-4">
                        
                        <label htmlFor="serviceTypeId" className="block text-gray-700 mb-1">serviceTypeId </label>
                        <input type="serviceTypeId" placeholder="input serviceTypeId" value={serviceTypeId} 
                        className = "w-full border rounded px-3 py-2 focus:online-none focus:ring focus:border-blue-300" onChange={(e)=>setServiceTypeId(e.target.value)} required/>
                        <label htmlFor="userId" className="block text-gray-700 mb-1">userId </label>
                        <input type="userId" placeholder="input userId" value={userId} 
                        className = "w-full border rounded px-3 py-2 focus:online-none focus:ring focus:border-blue-300" onChange={(e)=>setUserId(e.target.value)} required/>

                        <label htmlFor="serviceName" className="block text-gray-700 mb-1">serviceName </label>
                        <input type="serviceName" placeholder="input serviceName" value={serviceName} 
                        className = "w-full border rounded px-3 py-2 focus:online-none focus:ring focus:border-blue-300" onChange={(e)=>setServiceName(e.target.value)} required/>
                        <label htmlFor="serviceDescription" className="block text-gray-700 mb-1">serviceDescription </label>
                        <input type="serviceDescription" placeholder="input serviceDescription" value={serviceDescription} 
                        className = "w-full border rounded px-3 py-2 focus:online-none focus:ring focus:border-blue-300" onChange={(e)=>setServiceDescription(e.target.value)} required/>
                        <label htmlFor="price" className="block text-gray-700 mb-1">price </label>
                        <input type="price" placeholder="input price" value={price} 
                        className = "w-full border rounded px-3 py-2 focus:online-none focus:ring focus:border-blue-300" onChange={(e)=>setPrice(e.target.value)} required/>

                        <button  type="submit"
                        className="w-full bg-blue-500  text-white  py-2 rounded hover:bg-blue-600  transition duration-200"> save</button >

                    </div>
                </form>
            </div>
        </div>
        
        </>
    );  

}

export default NdisService