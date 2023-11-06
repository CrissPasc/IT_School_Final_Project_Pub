import { Route, Routes } from "react-router-dom";
import "./App.css";
import Homepage from "./components/homepage/Homepage";
import Menu from "./components/menu/Menu";
import NavbarBootstrap from "./common/Navbar/Navbar";
import AdminRouter from "./routers/admin";
import Footer from "./common/Footer/Footer";
import Menus from "./components/menu/Menus";
import Meals from "./components/menu/Meals";
import Newsletter from "./common/Footer/Footer";
import Orderonline from "./components/orderonline/Orderonline";
import { ContorContextProvider } from "./store/Contor/contextContor";
import About from "./components/about/About";

function App() {
  return (
    <ContorContextProvider>
      <NavbarBootstrap />
      

      <Routes>
        <Route
          path="/homepage"
          element={
            <>
              <Homepage />
            </>
          }
        ></Route>

        <Route
          path="/menu"
          element={
            <>
              <Menu />
            </>
          }
        ></Route>

        <Route
          path="/menus/:section"
          element={
            <>
              <Menus />
            </>
          }
        ></Route>

        <Route
          path="/meals/:name"
          element={
            <>
              <Meals />
            </>
          }
        ></Route>

        <Route
          path="/orderonline"
          element={
            <>
              <Orderonline />
            </>
          }
        ></Route>

        
        <Route path="/about" element={<About/>}></Route>
        <Route path="/" element={<Homepage />}></Route>
      </Routes>


      <Footer />
    </ContorContextProvider>
  );
}

export default App;
