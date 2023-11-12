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
import {
  contorReducer,
  initialStateContor,
} from "./store/Contor/reducerContor";
import Signin from "./components/userlogin/SignIn";
import { initialStateMenu, menuReducer } from "./store/Udates/reducerUpdates";
import { MenuContext } from "./store/Udates/contextUpdates";
import HomeAdmin from "./admin/HomeAdmin";
import AddMenu from "./admin/UpdatesAddMenu/AddMenu";
import EditMenu from "./admin/UpdatesEdditMenu/EditMenu";
import UpdateMeal from "./admin/UpdateMeal";
import Register from "./components/userlogin/Register";
import Customer from "./components/userlogin/Customer";

function App() {
  const [stateGlobalMenu, dispatchMenu] = useReducer(
    menuReducer,
    initialStateMenu
  );

  const [stateGlobal, dispatch] = useReducer(contorReducer, initialStateContor);

  const contorContextValue = {
    stateGlobal,
    dispatch,
  };

  const menuContextValue = {
    stateGlobalMenu,
    dispatchMenu,
  };

  return (
    <MenuContext.Provider value={menuContextValue}>
      <ContorContext.Provider value={contorContextValue}>
        <NavbarBootstrap />

        <Routes>
          <Route path="/admin" element={<HomeAdmin />} />
          <Route path="/admin/add" element={<AddMenu />} />
          <Route path="/admin/update/:name" element={<UpdateMeal />} />
          <Route path="/admin/edit/:id" element={<EditMenu />} />
          <Route path="/customer" element={<Customer />} />
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
          <Route
            path="/signin"
            element={
              <>
                <Signin />
              </>
            }
          ></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/" element={<Homepage />}></Route>
        </Routes>

        <Footer />
      </ContorContext.Provider>
    </MenuContext.Provider>
  );
}

export default App;
