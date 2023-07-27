import { Route, Routes } from "react-router-dom";
import Login from "./Login"
import Register from "./Register"
import Welcome from "./Welcome/Welcome";
const Main = () => {
  return(
    <main>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </main>
  );
};

export default Main;
