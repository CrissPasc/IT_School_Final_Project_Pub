import { Route, Routes } from "react-router-dom";
import NavbarBootstrap from "../common/Navbar/Navbar";
import Homepage from "../components/homepage/Homepage";
import Menu from "../components/menu/Menu";

// este folosit pe undeva???
function AdminRouter() {
  return <Route path="/homepage" element={<Homepage />}></Route>;
}

export default AdminRouter;
