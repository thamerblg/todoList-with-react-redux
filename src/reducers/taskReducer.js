import {
  ADDTASK,
  DELETTASK,
  EDITTASK,
  TOGGLECOMPLETEDTASK,
  SETCURRENTTASK,
  FILTERTASK,
} from "../actions/types";

const initialState = {
  todos: [],
  currentItem: null,
  filtredTasks: [],
};
const taskReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADDTASK:
      return {
        ...state,
        todos: [...state.todos, payload],
      };
    case DELETTASK:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== payload),
      };
    case TOGGLECOMPLETEDTASK:
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === payload ? { ...todo, isDone: !todo.isDone } : todo
        ),
      };
    case SETCURRENTTASK:
      return {
        ...state,
        currentItem: payload,
      };
    case EDITTASK:
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === payload.id
            ? { ...todo, description: payload.description }
            : todo
        ),
      };
    case FILTERTASK:
      return {
        ...state,
        filtredTasks:
          payload.toLowerCase() === "completed"
            ? state.todos.filter((todo) => todo.isDone)
            : payload.toLowerCase() === "uncompleted"
            ? state.todos.filter((todo) => !todo.isDone)
            : state.todos,
      };

    default:
      return state;
  }
};

export default taskReducer;
