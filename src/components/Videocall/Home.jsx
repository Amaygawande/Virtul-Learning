import React,{useState,useCallback} from 'react'
import {useNavigate} from 'react-router-dom'

function Home() {
  const[value,setValue] = useState();
  const navigate = useNavigate();

  const handleJoinRoom = useCallback(()=>{
    navigate(`/room/${value}`)
  },[value,navigate])
  
  return (
    <div className='flex  flex-col items-center justify-center h-screen'>
        <input 
        value={value}
        onChange={(e)=>setValue(e.target.value)}
        type="text" 
        placeholder='Enter Room code' 
        className='bg-gray-200'/>
        <button onClick={handleJoinRoom} className='bg-blue-500 text-white p-2 rounded-md'>Join Room</button>
    </div>
  )
}

export default Home
