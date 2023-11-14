import { Container, MenuContainer } from "../components/menu/Menu.style";
import useLog from "../hooks/useLog";

import { ruteAdmin } from "../constants/rute";
import UpdateCardAdmin from "../common/Card/UpdateCardAdmin";
import Footer from "../common/Footer/Footer";

const UpdateMeal = () => {
  useLog("Salut", "err");
  return (
    <Container>
      <MenuContainer>
        <UpdateCardAdmin />
      </MenuContainer>
      <Footer />
    </Container>
  );
};

export default UpdateMeal;
