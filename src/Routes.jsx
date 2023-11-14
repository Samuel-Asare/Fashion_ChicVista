import { Routes, Route } from "react-router-dom";
import SignUp from "./Components/SignUp";
import Login from "./Components/Login";
import HomePage from "./Components/HomePage";

const MyRoutes = () => (
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/signup" element={<SignUp />} />
    <Route path="/login" element={<Login />} />
  </Routes>
);

export default MyRoutes;
