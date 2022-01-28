import logo from './picture/waterFall.jpeg';
import React, { useEffect, useState } from "react"
import './App.css';

function App() {

  const [first, setfirst] = useState();
  const [age, setAge] = useState()
  const [profile, setProfile] = useState()
  const [major, setMajor] = useState()
  const [email, setEmail] = useState()


  useEffect(() => {

    fetch("http://localhost:3001/name").then(res => res.text()).then(data => setfirst(data))
    fetch("http://localhost:3001/age").then(res => res.text()).then(data => setAge(data))
    fetch("http://localhost:3001/profile").then(res => res.text()).then(data => setProfile(data))
    fetch("http://localhost:3001/major").then(res => res.text()).then(data => setMajor(data))
    fetch("http://localhost:3001/email").then(res => res.text()).then(data => setEmail(data))


  })
  return (
    <div className="container">
      <div className="App">
        <img src="http://localhost:3001/trees.jpeg" width="150px" height="150px" className='rounded' alt="" />
        <h1>HI, i am   {first} {age} years old </h1>
        <h1> {major}</h1>
        <p> based in NYC</p>
        <p><a href='https://www.instagram.com'>{profile}  instagram</a></p>

        <p><a href="https://www.facebook.com/">facbook.com</a></p>

        <p>   <a href="https://www.instagram.com">instagram.com</a></p>
        <p>my email address : {email}</p>
      </div>
    </div>

  );
}

export default App;
