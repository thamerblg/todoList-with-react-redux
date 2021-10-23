import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../actions/taskAction";

const AddTask = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const AddNewTask = () => {
    const newTask = {
      id: Math.floor(Math.random() * 100),
      description: text,
      isDone: false,
    };
    if (text.length > 0) {
      dispatch(addTask(newTask));
      setText("");
    }
  };

  return (
    <div className="d-flex mb-4">
      <input
        type="text"
        className="form-control"
        placeholder="Enter your new task"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button className="btn-primary" onClick={AddNewTask}>
        Add
      </button>
    </div>
  );
};

export default AddTask;
