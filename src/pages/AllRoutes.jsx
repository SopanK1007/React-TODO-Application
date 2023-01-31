import { Routes, Route, Navigate } from "react-router-dom";
import AllTodos from "./AllTodos";
import Home from "./Home";
import Login from "./Login";
import Official from "./Official";
import Other from "./Other";
import Personal from "./Personal";

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navigate replace to="/home" />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/" element={<AllTodos />}></Route>
        <Route path="/allTodos" element={<AllTodos />}></Route>
        <Route path="/official" element={<Official />}></Route>
        <Route path="/personal" element={<Personal />}></Route>
        <Route path="/others" element={<Other />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="*" element={<Navigate replace to="/home" />}></Route>
      </Routes>
    </div>
  );
};

export default AllRoutes;
