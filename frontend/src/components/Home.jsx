import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
const Home = () => {
   const navigate=useNavigate()
    const user=localStorage.getItem('loggedin')
    const email=localStorage.getItem('email')
    const username=localStorage.getItem('username')

    
    const logout=()=>{
      localStorage.clear()
      window.location.href='/'
    }
    if(!user){
        useEffect(()=>{
            navigate('/')
        },[])
       
    }
    else{
  return (
    <div className='p-3'>
     <h2>Welcome {username}</h2> 
     <h2>Your Email:{email}</h2>
     <button className='btn btn-danger' onClick={logout}>Logout</button>
    </div>
  )
    }
}

export default Home
