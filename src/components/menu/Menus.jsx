import React, { useEffect, useState } from "react";
import { Container, MenuContainer } from "./Menu.style";
import { Button, Image } from "react-bootstrap";
import useLog from "../../hooks/useLog";

import { ruteAdmin } from "../../constants/rute";

import CardMenus from "../../common/Card/CardMenus";
import { useLocation, useParams } from "react-router-dom";

import MenuBackground from "../../media/images/menu-background.png";
import BurgersBackground from "./../../media/bckgrd/burgers-bckgrd.png";
import PizzaBackground from "./../../media/bckgrd/pizza-bckgrd.png";

import BeersBackground from "../../media/bckgrd/beers-bckgrd.png";
import WineBackground from "./../../media/bckgrd/wine-bckgrd.png";
import CocktailsBackground from "./../../media/bckgrd/cocktails-bckgrd.png";

import PizBackgrounds from "./../../media/bckgrd/pizza-bckgrd.png";
import BeersBackgroundx from "./../../media/bckgrd/beers-bckgrd.png";

import OrderOnlineBackground from "./../../media/bckgrd/delivery-bckgrd.png";
import Footer from "../../common/Footer/Footer";

const Menus = () => {
  useLog("Salut", "err");
  const [menucard, setMenucard] = useState(undefined);
  const [menucardfiltered, setMenucardfiltered] = useState(undefined);
  const [error, setError] = useState(false);
  const { section } = useParams();
  console.log(section);

  const getImageForLocation = (pathname) => {
    switch (pathname) {
      case "/menu":
        return MenuBackground;

      case "/menus/Burgers":
        return BurgersBackground;
      // nu merge probabil de la %..
      case "/meals/Beefburger":
        return BurgersBackground;
      case "/meals/Chichen%20burger":
        return BurgersBackground;
      case "/meals/Vegan%20burger":
        return BurgersBackground;

      case "/menus/Pizzas":
        return PizzaBackground;
      // nu merge probabil de la %..
      case "/meals/Pizza%20beef":
        return PizzaBackground;
      case "/meals/Pizza%20chichen":
        return PizzaBackground;
      case "/meals/Pizza%20vegan":
        return PizzaBackground;

      case "/menus/Drinks":
        return CocktailsBackground;
      // nu merge probabil de la %..
      case "/meals/Beer":
        return BeersBackground;
      case "/meals/Wine":
        return WineBackground;
      case "meals/Cosmopolitan%20Cocktail":
        return CocktailsBackground;

      // am rama aici la pusbackground la meniuri
      case "/menus/Pizzas":
        return PizzaBackground;
      case "/meals/Pizza%20beef":
        return PizzaBackground;
      case "/meals/Pizza%20chichen":
        return PizzaBackground;
      case "/meals/Pizza%20vegan":
        return PizzaBackground;

      case "/orderonline":
        return OrderOnlineBackground;
      // Add more cases as needed for different routes
      default:
        return "../../media/images/menu-background.png";
    }
  };

  const location = useLocation();
  console.log(location.pathname);
  const backgroundImage = getImageForLocation(location.pathname);
  console.log(location.pathname);

  useEffect(() => {
    fetch(`http://localhost:3002/menu`)
      .then((response) => response.json())
      .then((menu) => {
        setMenucard(menu);
        console.log(menu);
      })
      .catch((error) => {
        setError(true);
        console.log("Error", error);
      });
  }, []);

  console.log(menucard);

  useEffect(() => {
    if (section) {
      const filteredMenu = menucard?.filter((item) => item.section === section); // facem lifter

      setMenucardfiltered(filteredMenu);
      console.log(filteredMenu);
    }
  }, [section, menucard]);

  console.log(menucardfiltered);

  return (
    <Container>
      <MenuContainer style={{ backgroundImage: `url(${backgroundImage})` }}>
        <CardMenus />
      </MenuContainer>
      <Footer />
    </Container>
  );
};

export default Menus;
