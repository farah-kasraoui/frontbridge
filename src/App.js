import logo from './logo.svg';
import './App.css';
import {Route, Routes} from "react-router";
import Home from "./pages/Home";
import {useEffect} from "react";

import CreateUser from './components/User/CreateUser';
import LoginAdmin from './components/User/LoginAdmin';
import DashboardAdmin from './components/User/AdminDashbored';
function App() {
    useEffect(() => {
        console.log("hi1")
    }, [])
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/user"  element={<CreateUser></CreateUser>}></Route>
      
        <Route exact path="/admin"  element={<LoginAdmin/>}></Route>
        <Route exact path="/dashboard-admin"  element={<DashboardAdmin/>}></Route>
        
  
    

      </Routes>
    </div>
  );
}

export default App;
