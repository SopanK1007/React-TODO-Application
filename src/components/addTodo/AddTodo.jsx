import { useContext, useState } from "react";
import style from "./AddTodo.module.css";
import AuthContext from "../../store/auth-context";

const AddTodo = () => {
  const [subTask, setSubTask] = useState({ task: "", status: false });

  const auth = useContext(AuthContext);
  console.log("auth", auth.is_login);
  const handleSubmit = () => {
    auth.login();
  };

  const handleSubTask = (event) => {
    setSubTask()
  };

  const handleChange = () => {};
  return (
    <div className={style.todo_div}>
      <h2>Add Todo's</h2>
      <div className={style.form_div}>
        <div className={style.task}>
          <input
            type="text"
            id="task"
            placeholder="Todo Title"
            onChange={handleChange}
          />
          <br />
          <input type="date" name="" id="" />
          <br />
          <textarea
            name=""
            id="description"
            cols="30"
            rows="10"
            placeholder="Todo Description"
          ></textarea>
        </div>
        <div className={style.sub_task}>
          <input type="text" placeholder="Sub Task" />
          <br />
          <button onClick={handleSubTask}>ADD</button>
        </div>
        <div className={style.todo_category}>
          <div>
            <div>
              <p>Todo Category:</p>
              <input type="radio" name="todo_category" id="personal" />
              <label htmlFor="personal">Personal</label>
              <br />
              <input type="radio" name="todo_category" id="official" />
              <label htmlFor="official">Official</label>
              <br />
              <input type="radio" name="todo_category" id="others" />
              <label htmlFor="others">Others</label>
            </div>
            <div>
              <p>Todo Status:</p>
              <input type="radio" name="todo_status" id="completed" />
              <label htmlFor="completed">Completed</label>
              <br />
              <input type="radio" name="todo_status" id="inProgress" />
              <label htmlFor="inProgress">In Progress...</label>
              <br />
              <input type="radio" name="todo_status" id="todo" />
              <label htmlFor="todo">TODO</label>
            </div>
          </div>
        </div>
        <div className={style.add_todo_btn}>
          <img
            src="https://cdn.pixabay.com/photo/2020/05/04/15/54/list-5129676__340.jpg"
            alt="img"
          />
          <button onClick={handleSubmit}>ADD TODO</button>
        </div>
      </div>
    </div>
  );
};

export default AddTodo;
