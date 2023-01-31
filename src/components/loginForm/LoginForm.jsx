import { NavLink } from "react-router-dom";
import style from "./LoginForm.module.css";

const LoginForm = () => {
  return (
    <div className={style.main_login_div}>
      <div className={style.inside_div}>
        <div className={style.login_img_div}>
          <img
            src="https://cdn.dribbble.com/users/916023/screenshots/11474693/media/1d5d0b4a85720b6db79d6c6230e9df67.png?compress=1&resize=768x576&vertical=top"
            alt="cartoon_icon"
          />
        </div>
        <div className={style.form_div}>
          <form>
            <h2>Sign In</h2>
            <p>Welcome Again !</p>
            <label htmlFor="email">Enter Your Email Address</label>
            <br />
            <input
              type={"text"}
              id="email"
              placeholder="Enter E-mail Address"
            />
            <br />
            <label htmlFor="password">Enter Unique Password</label>
            <br />
            <input type="password" id="password" placeholder="Enter password" />
            <br />
            <button>Sign In</button>
          </form>
          <p>
            Don't have an acoount?<NavLink>Sign Up</NavLink>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
