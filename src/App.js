import { Route, Routes } from "react-router-dom";
import "./App.css";
import Homepage from "./components/homepage/Homepage";
import Menu from "./components/menu/Menu";
import NavbarBootstrap from "./common/Navbar/Navbar";
import AdminRouter from "./routers/admin";

function App() {
  return (
    <>
      <Routes>

          <Route path="/homepage" element={
            <>
              <NavbarBootstrap isAdmin={true}></NavbarBootstrap>
              <Homepage /></>}></Route>
     
        <Route path="/" element={<Homepage />}></Route>
      </Routes>

    </>
  );
}

export default App;
