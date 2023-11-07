import { Container, MenuContainer } from "./Menu.style";
import useLog from "../../hooks/useLog";

import { ruteAdmin } from "../../constants/rute";
import CardMeals from "../../common/Card/Cardmeals";

const Meals = () => {
  useLog("Salut", "err");
  const [menucard, setMenucard] = useState(undefined);
  const [menucardfiltered, setMenucardfiltered] = useState(undefined);
  const [error, setError] = useState(false);
  const { name } = useParams();
  console.log(name);

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
    if (name) {
      const filteredMenu = menucard?.filter((item) => item.name === name); // facem filter

      setMenucardfiltered(filteredMenu);
      console.log(filteredMenu);
    }
  }, [name, menucard]);

  console.log(menucardfiltered);

  return (
    <Container>
      <MenuContainer>
        <CardMeals />
      </MenuContainer>
    </Container>
  );
};

export default Meals;
