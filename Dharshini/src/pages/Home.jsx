import React from 'react'
import { Link } from 'react-router-dom'
const Home = ({name}) => {
  return (
    <div>
        <h1>Welcome {name}</h1>

        <Link to='/state'>Usestate Example</Link> <br/><br/>
        <Link to='/form'>Controlled Form</Link><br/><br/>
        <Link to='/Effect'> Effect</Link><br/><br/>
         <Link to='/Ref'> Ref</Link><br/><br/>
         <Link to='/Reducer'> Reducer</Link><br/><br/>

        

    </div>
  )
}


export default Home //rafce
// react arrow function component export

