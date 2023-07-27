import { BrowserRouter } from "react-router-dom";
import Main from "./components/Main";

import "./styles/styles.scss";
function App() {
  return (
    <BrowserRouter>
      <Main />
    </BrowserRouter>
  );
}

export default App;
