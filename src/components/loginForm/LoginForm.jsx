import { useState } from "react";
import { Link } from "react-router-dom";
import style from "./LoginForm.module.css";

const LoginForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const handleIsLogin = (event) => {
    event.preventDefault();
    setIsLogin(!isLogin);
    console.log("isLogin", isLogin);
  };
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
            <h2>{isLogin ? "Sign In" : "Sign Up"}</h2>
            <p>{isLogin ? "Welcome Again !" : "Create Your Account"}</p>
            <label htmlFor="email">
              {isLogin ? "Email Address" : "Enter Your Email Address"}
            </label>
            <br />
            <input
              type={"text"}
              id="email"
              placeholder="Enter E-mail Address"
            />
            <br />
            <label htmlFor="password">
              {isLogin ? "Enter Passwaord" : "Enter Unique Password"}
            </label>
            <br />
            <input type="password" id="password" placeholder="Enter password" />
            <br />
            <button>{isLogin ? "Sign In" : "Sign Up"}</button>
          </form>
          <p>
            {isLogin ? "Don't have an acoount?" : "Already have Account?"}
            <Link onClick={handleIsLogin}>
              {isLogin ? "Sign Up" : "Sign In"}
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
