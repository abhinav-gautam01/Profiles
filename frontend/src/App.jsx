import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { CreateProfile } from './components/CreateProfile'
import { useEffect } from 'react'
import { Profile } from './components/Profile'


function App() {
  const [profiles, setProfiles]=useState([]);
  
  useEffect(()=>{
     fetch("http://localhost:3000/data")
     .then(async function(response){
      const json = await response.json();
      setProfiles(json.profiles);
     })
   
   
  },[profiles])

  return (
    <>
      <CreateProfile ></CreateProfile>
     <Profile profiles={profiles}></Profile>
    </>
  )
}

export default App
