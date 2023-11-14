import { Container, MenuContainer } from "./Menu.style";
import useLog from "../../hooks/useLog";

import { ruteAdmin } from "../../constants/rute";
import CardMeals from "../../common/Card/Cardmeals";
import Footer from "../../common/Footer/Footer";

const Meals = () => {
  useLog("Salut", "err");
  return (
    <Container>
      <MenuContainer>
        <CardMeals />
      </MenuContainer>
      <Footer />
    </Container>
  );
};

export default Meals;
