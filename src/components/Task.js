import { FaCheck, FaEdit, FaTrash } from "react-icons/fa";
import { useDispatch } from "react-redux";
import {
  deleteTask,
  setCurrentTask,
  toggleCompletedTask,
} from "../actions/taskAction";

const Task = ({ todo: { id, description, isDone } }) => {
  const dispatch = useDispatch();

  const handelDeleteTask = (e) => {
    dispatch(deleteTask(id));
  };
  const handelToggle = (e) => {
    dispatch(toggleCompletedTask(id));
  };
  const handelEditTask = (e) => {
    dispatch(setCurrentTask({ id, description, isDone }));
  };
  return (
    <div>
      <li className="list-unstyled bg-light py-2 px-3 rounded ">
        <div className="d-flex justify-content-between align-items-center">
          <p className={`mb-0 ${isDone && "completed"}`}>{description}</p>
          <div className="icons">
            <FaCheck
              size={22}
              className={`mx-2 text-${isDone ? "success" : "secondary"}`}
              onClick={handelToggle}
            />
            <FaEdit
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
              size={22}
              className="mx-2 "
              onClick={handelEditTask}
            />
            <FaTrash
              onClick={handelDeleteTask}
              className="text-danger"
              size={22}
            />
          </div>
        </div>
      </li>
    </div>
  );
};

export default Task;
