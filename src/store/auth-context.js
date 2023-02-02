import React, { useState } from "react";

const AuthContext = React.createContext();

export const AuthContextProvider = (props) => {
  const [isLogin, setIsLogin] = useState(false);
  const [allSubTask, setAllSubTask] = useState([]);

  const loginHandler = () => {
    setIsLogin(!isLogin);
  };

  const subTaskHandler = (obj) => {
    setAllSubTask([...allSubTask, obj]);
  };

  const contextValue = {
    is_login: isLogin,
    login: loginHandler,
    subTaskHandler: subTaskHandler,
  };
  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
