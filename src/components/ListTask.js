import { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import Task from "./Task";

const ListTask = () => {
  const [taskList, setTaskList] = useState([]);
  const todos = useSelector((state) => state.todos);

  const filtredTasks = useSelector((state) => state.filtredTasks);

  useEffect(() => {
    setTaskList(todos);
  }, [todos]);
  useEffect(() => {
    setTaskList(filtredTasks);
  }, [filtredTasks]);

  return (
    <div>
      <ul className="px-0">
        {taskList.length > 0 ? (
          taskList.map((todo) => <Task todo={todo} key={todo.id} />)
        ) : (
          <p className="text-center">
            <strong>There is not task to show</strong>
          </p>
        )}
      </ul>
    </div>
  );
};

export default ListTask;
