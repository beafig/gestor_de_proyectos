import { Routes, Route } from "react-router-dom";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import CreateProject from "./Main/CreateProject";
import Landing from "./Main/Landing";
import objectToExport from "../services/localStorage";
import { useLocation, matchPath } from "react-router-dom";

function App() {
  const projectsCard = objectToExport.get("cardsLs", []);

  const cardsToShow = projectsCard.slice(0, 4);
  console.log(cardsToShow);
  const { pathname } = useLocation();
  const routeData = matchPath("/card/:id", pathname);
  const cardId = routeData !== null ? routeData.params.id : "";
  console.log(cardId);

  const foundCard = cardsToShow.find((index) => index === cardId);

  return (
    <>
      <Header></Header>
      <Routes>
        <Route
          path="/create"
          element={<CreateProject projectsCard={projectsCard} />}
        />
        <Route path="/" element={<Landing foundCard={foundCard} />} />
      </Routes>
      <Footer></Footer>
    </>
  );
}

export default App;
