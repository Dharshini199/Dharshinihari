import React from 'react'
import Home from './pages/Home'
import Contacts from './pages/Contacts'
import About from './pages/About'
import Navbar from './components/Navbar'
import {Route,Routes} from "react-router-dom"
import Services from './pages/Services'
import State from "./hooks/State"
import Form from './hooks/form'
import {useEffect} from "react"
import Effect from './hooks/Effect'
import Ref from './hooks/Ref'
import Reducer from './hooks/Reducer'
import Context from './hooks/Context.jsx'
import Todos from './pages/todos.jsx'

function  App() {
  let name ='SAIHARI'

  useEffect (() =>{
    console.log("component mounted")
    return(()=>{
      console.log("component unmounted");
  })
  },[])
  return (
    <>
      <Navbar/> 
      <Routes>
        <Route path="/home" element={<Home name={name}/>}/>
        <Route path="/About"element={<About/>}/>
        <Route path="/Services" element={<Services/>}/>
        <Route path="/Contacts" elemennt={<Contacts/>}/>
         <Route path="/State" element={<State/>}/>
         <Route path="/Form" element={<Form/>}/>
         <Route path="/Effect" element={<Effect/>}/>
         <Route path="/Ref" element={<Ref/>}/>
         <Route path="/Reducer" element={<Reducer/>}/>
         <Route path="/Context" element={<Context/>}/>
          <Route path="/todos" element ={<Todos/>}/>
        

      </Routes>
      {/* <Services/> */}
            {/* <Home/>
            <Contact/>
            <About/> */}
      </>
  
  )
}

export default App;
