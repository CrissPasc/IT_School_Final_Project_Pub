import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./common/Footer/Footer";
import NavbarBootstrap from "./common/Navbar/Navbar";
import About from "./components/about/About";
import Homepage from "./components/homepage/Homepage";
import Meals from "./components/menu/Meals";
import Menu from "./components/menu/Menu";
import Menus from "./components/menu/Menus";
import Orderonline from "./components/orderonline/Orderonline";
import { ContorContext } from "./store/Contor/contextContor";
import { useReducer } from "react";
import { StyleSheetManager } from 'styled-components';
import {
  contorReducer,
  initialStateContor,
} from "./store/Contor/reducerContor";

function App() {
  const [stateGlobal, dispatch] = useReducer(contorReducer, initialStateContor);

  const contorContextValue = {
    stateGlobal,
    dispatch,
  };

  return (
    <ContorContext.Provider value={contorContextValue}>
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

        <Route path="/about" element={<About />}></Route>
        <Route path="/" element={<Homepage />}></Route>
      </Routes>

      <Footer />
    </ContorContext.Provider>
  );
}

export default App;
