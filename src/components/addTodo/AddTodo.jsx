import { useContext, useState } from "react";
import style from "./AddTodo.module.css";
import AuthContext from "../../store/auth-context";
import { MdDelete } from "react-icons/md";

const todo_category = [
  { name: "todoCategory", id: "personal", value: "Personal" },
  { name: "todoCategory", id: "official", value: "Official" },
  { name: "todoCategory", id: "others", value: "Others" },
];

const todo_status = [
  { name: "todoStatus", id: "completed", value: "Completed" },
  { name: "todoStatus", id: "inProgress", value: "In Progress..." },
  { name: "todoStatus", id: "todo", value: "TODO" },
];
const initialSubTask = {
  sub_Task: "",
  status: false,
};

const initialState = {
  todoTitle: "",
  addDate: "",
  todoDescription: "",
  todoCategory: "",
  todoStatus: "",
  subTask: [],
};

const AddTodo = () => {
  const [subTask, setSubTask] = useState(initialSubTask);
  const [todo, setTodo] = useState(initialState);

  // const auth = useContext(AuthContext);
  // console.log("auth", auth);

  const handleChangeSubTAsk = (event) => {
    // console.log(event);
    const { name, value } = event.target;
    setSubTask({ ...subTask, [name]: value });
  };

  const handleSubTask = (event) => {
    setTodo({ ...todo, subTask: [...todo.subTask, subTask] });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setTodo({
      ...todo,
      [name]: value,
    });
  };

  const handleDelete = () => {
    
  }

  const handleSubmit = () => {
    // auth.login();
    console.log("todo", todo);
  };

  const todo__category = todo_category.map((el, index) => {
    return (
      <div key={index}>
        <input
          type={"radio"}
          name={el.name}
          id={el.id}
          value={el.value}
          checked={todo.todoCategory === `${el.value}`}
          onChange={handleChange}
        />
        <label htmlFor={el.id}>{el.value}</label>
        <br />
      </div>
    );
  });

  const todo__status = todo_status.map((el, index) => {
    return (
      <div key={index}>
        <input
          type={"radio"}
          name={el.name}
          id={el.id}
          value={el.value}
          checked={todo.todoStatus === `${el.value}`}
          onChange={handleChange}
        />
        <label htmlFor={el.id}>{el.value}</label>
        <br />
      </div>
    );
  });

  const todoSubTask = todo.subTask.map((el, index) => {
    return (
      <div key={index} className={style.sub__task}>
        <label>{el.sub_Task}</label>
        <MdDelete style={{ color: "red", fontSize: "18px" }} onClick={handleDelete} />
      </div>
    );
  });

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

        {/*  */}

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
          <div>{todo.subTask.length > 0 ? todoSubTask : null}</div>
        </div>

        {/*  */}

        <div className={style.todo_category}>
          <div>
            <div>
              <p>Todo Category:</p>
              {todo__category}
            </div>

            {/*  */}

            <div>
              <p>Todo Status:</p>
              {todo__status}
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
