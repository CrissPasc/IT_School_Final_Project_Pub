import { Container, MenuContainer } from "../components/menu/Menu.style";
import useLog from "../hooks/useLog";

import { ruteAdmin } from "../constants/rute";
import UpdateCardAdmin from "../common/Card/UpdateCardAdmin";

const UpdateMeal = () => {
  useLog("Salut", "err");
  return (
    <Container>
      <MenuContainer>
        <UpdateCardAdmin />
      </MenuContainer>
    </Container>
  );
};

export default UpdateMeal;
