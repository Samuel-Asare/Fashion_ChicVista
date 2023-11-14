import { BrowserRouter } from "react-router-dom";
import MyRoutes from "./Routes";
import Nav from "./Components/Nav";

const App = () => (
  <>
    <BrowserRouter>
      <Nav />
      <MyRoutes />
    </BrowserRouter>
  </>
);

export default App;
