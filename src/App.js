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

function App() {
  return (
    <ContorContextProvider>
      {/* Deocamdata am pus Navbar-ul aici, ca sa il avem in toata aplicatia */}
      <NavbarBootstrap />

      <Routes>
        <Route
          path="/homepage"
          element={
            <>
              {/* aici va trebui schimbat / scos?? */}
              {/* <NavbarBootstrap isAdmin={true}></NavbarBootstrap> */}
              <Homepage />
            </>
          }
        ></Route>

        <Route
          path="/menu"
          element={
            <>
              {/* aici va trebui schimbat / scos?? */}
              {/* <NavbarBootstrap isAdmin={true}></NavbarBootstrap> */}
              <Menu />
              {/* <Footer /> */}
            </>
          }
        ></Route>

        <Route
          path="/menus/:section"
          element={
            <>
              {/* aici va trebui schimbat / scos?? */}
              {/* <NavbarBootstrap isAdmin={true}></NavbarBootstrap> */}
              <Menus />
              {/* <Footer /> */}
            </>
          }
        ></Route>

        <Route
          path="/meals/:name"
          element={
            <>
              {/* aici va trebui schimbat / scos?? */}
              {/* <NavbarBootstrap isAdmin={true}></NavbarBootstrap> */}
              <Meals />
              {/* <Footer /> */}
            </>
          }
        ></Route>

        <Route
          path="/orderonline"
          element={
            <>
              {/* aici va trebui schimbat / scos?? */}
              {/* <NavbarBootstrap isAdmin={true}></NavbarBootstrap> */}
              <Orderonline />
              {/* <Footer /> */}
            </>
          }
        ></Route>

        <Route path="/" element={<Homepage />}></Route>
      </Routes>

      <Footer />
    </ContorContextProvider>
  );
}

export default App;
