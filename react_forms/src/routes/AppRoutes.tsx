import { Route, Routes } from "react-router-dom"
import MainLayout from "../layout/MainLayout"
import Login from "../pages/Login";
import Registration from "../pages/Registration";
import Dashboard from "../pages/Dashboard";

const AppRoutes = ()=>{
    return (
        <Routes>
          <Route  element={<MainLayout/>}>
          <Route path='/' element={<Dashboard/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Registration/>}/>
          </Route>
        </Routes>
    )
}

export default AppRoutes;