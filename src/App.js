import './App.css';
import axios from 'axios';
import { useState, useEffect } from 'react';
import {User} from '../src/components/user';
import  { Route, Link,Routes, BrowserRouter as Router } from 'react-router-dom'
import { UserDetails } from './components/user_details';


function App() {
  const [userdata,setUserdata]=useState([])
  const k= async ()=>{
    try{
      const data=await axios.get('https://reqres.in/api/users');
      setUserdata(data.data.data);
    
    }
    catch(e){
      console.log(e);
    }
}
useEffect(()=>{
k();
},[])

  return (
    <>
    <div className="App">
      <User data={userdata} />
    </div>
     <Router>
    
     
     <Routes>
        
        <Route exact path="/t" element={<UserDetails />}  />
        </Routes>
  </Router>
  </>
  );
}

export default App;
