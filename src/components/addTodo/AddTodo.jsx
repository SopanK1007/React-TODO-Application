import { useContext, useState } from "react";
import style from "./AddTodo.module.css";
import AuthContext from "../../store/auth-context";

const initialSubTask = {
  sub_Task: "",
  status: false,
};

const initialState = {
  todoTitle: "",
  addDate: "",
  todoDescription: "",
  todoCategory: {
    todo_category: "",
    selected: false,
  },
  todoStatus: {
    todo_status: "",
    selected: false,
  },
  subTask: [
    {
      sub_Task: "",
      status: false,
    },
  ],
};

const AddTodo = () => {
  const [subTask, setSubTask] = useState(initialSubTask);
  const [todo, setTodo] = useState(initialState);

  const auth = useContext(AuthContext);
  // console.log("auth", auth);

  const handleSubmit = () => {
    auth.login();
  };

  const handleChangeSubTAsk = (event) => {
    const [name, value] = event.target;
    setSubTask({ ...subTask, [name]: value });
  };

  const handleSubTask = (event) => {
    // auth.subTaskHandler(subTask);
    todo.subTask.push(subTask);
    console.log("todo", todo);
  };

  const handleChange = (event) => {
    console.log(event);
  };

  console.log("allSubTask", auth.allSubTask);
  return (
    <div className={style.todo_div}>
      <h2>Add Todo's</h2>
      <div className={style.form_div}>
        <div className={style.task}>
          <input
            type="text"
            id="task"
            placeholder="Todo Title"
            value={todo.todoTitle}
            name={"todoTitle"}
            onChange={handleChange}
          />
          <br />
          <input
            type="date"
            value={todo.addDate}
            name={"addDate"}
            onChange={handleChange}
          />
          <br />
          <textarea
            id="description"
            cols="30"
            rows="10"
            placeholder="Todo Description"
            value={todo.todoDescription}
            name={"todoDescription"}
            onChange={handleChange}
          ></textarea>
        </div>
        <div className={style.sub_task}>
          <input
            type="text"
            placeholder="Sub Task"
            value={subTask.sub_Task}
            name={"sub_Task"}
            onChange={handleChangeSubTAsk}
          />
          <br />
          <button onClick={handleSubTask}>ADD</button>
        </div>

        {/*  */}

        <div className={style.todo_category}>
          <div>
            <div>
              <p>Todo Category:</p>
              <input
                type="radio"
                name="todo_category"
                id="personal"
                value={"Personal"}
                checked={todo.todoCategory.selected}
                onChange={handleChange}
              />
              <label htmlFor="personal">Personal</label>
              <br />
              <input
                type="radio"
                name="todo_category"
                id="official"
                value={"Official"}
                checked={todo.todoCategory.selected}
                onChange={handleChange}
              />
              <label htmlFor="official">Official</label>
              <br />
              <input
                type="radio"
                name="todo_category"
                id="others"
                value={"Others"}
                checked={todo.todoCategory.selected}
                onChange={handleChange}
              />
              <label htmlFor="others">Others</label>
            </div>

            {/*  */}

            <div>
              <p>Todo Status:</p>
              <input
                type="radio"
                name="todo_status"
                id="completed"
                value={"Completed"}
                checked={todo.todoStatus.selected}
                onChange={handleChange}
              />
              <label htmlFor="completed">Completed</label>
              <br />
              <input
                type="radio"
                name="todo_status"
                id="inProgress"
                value={"In Progress..."}
                checked={todo.todoStatus.selected}
                onChange={handleChange}
              />
              <label htmlFor="inProgress">In Progress...</label>
              <br />
              <input
                type="radio"
                name="todo_status"
                id="todo"
                value={"TODO"}
                checked={todo.todoStatus.selected}
                onChange={handleChange}
              />
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
