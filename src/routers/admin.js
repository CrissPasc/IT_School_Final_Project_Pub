import { Route, Routes } from "react-router-dom";
import NavbarBootstrap from "../common/Navbar/Navbar";
import Homepage from "../components/homepage/Homepage";


function AdminRouter() {
  return (
    
    <Route path="/homepage" element={<Homepage />}></Route>
    
    
  );
}

export default AdminRouter;
