import { NavLink } from "react-router-dom";
import {
  AiTwotoneHome,
  AiOutlineUnorderedList,
  AiFillAppstore,
} from "react-icons/ai";
import { BsFillBookmarkHeartFill, BsFillPencilFill } from "react-icons/bs";
import { GiOfficeChair } from "react-icons/gi";
import { FiLogIn, FiLogOut } from "react-icons/fi";
import style from "./Navbar.module.css";
import AuthContext from "../../store/auth-context";
import { useContext } from "react";

const Navbar = () => {
  const auth = useContext(AuthContext);

  const baseStyle = {};

  const activeStyle = {
    // color: "red",
    backgroundColor: "rgb(243, 201, 63)",
    textDecoration: "none",
    borderRadius: "5px",
  };

  const style3 = ({ isActive }) => (isActive ? activeStyle : baseStyle);

  return (
    <div className={style.navBar}>
      <NavLink to={"/home"}>
        <h2>TODO APP</h2>
      </NavLink>
      <hr />
      <div className={style.nav_div}>
        <NavLink style={style3} to={"/home"}>
          <AiTwotoneHome className={style.icon} />
          <span>Home</span>
        </NavLink>
        <NavLink style={style3} to={"/allTodos"}>
          <AiOutlineUnorderedList className={style.icon} />
          <span>All</span>
        </NavLink>
        <NavLink style={style3} to={"/personal"}>
          <BsFillBookmarkHeartFill className={style.icon} />
          <span>Personal</span>
        </NavLink>
        <NavLink style={style3} to={"/official"}>
          <GiOfficeChair className={style.icon} />
          <span>Official</span>
        </NavLink>
        <NavLink style={style3} to={"/others"}>
          <AiFillAppstore className={style.icon} />
          <span>Others</span>
        </NavLink>
        <NavLink style={style3} to={"/add-task"}>
          <BsFillPencilFill className={style.icon} />
          <span>Add Task</span>
        </NavLink>
        {auth.is_login && (
          <NavLink style={style3} to={"/login"}>
            <FiLogIn className={style.icon} />
            <span>Login</span>
          </NavLink>
        )}
        {auth.is_login && (
          <NavLink>
            <FiLogOut className={style.icon} />
            <span>Logout</span>
          </NavLink>
        )}
      </div>
    </div>
  );
};

export default Navbar;
