import {
  ADDTASK,
  DELETTASK,
  EDITTASK,
  SETCURRENTTASK,
  TOGGLECOMPLETEDTASK,
  FILTERTASK,
} from "./types";

export const addTask = (payload) => {
  return {
    type: ADDTASK,
    payload,
  };
};
export const deleteTask = (payload) => {
  return {
    type: DELETTASK,
    payload,
  };
};
export const toggleCompletedTask = (payload) => {
  return {
    type: TOGGLECOMPLETEDTASK,
    payload,
  };
};
export const setCurrentTask = (payload) => {
  return {
    type: SETCURRENTTASK,
    payload,
  };
};
export const editTask = (payload) => {
  return {
    type: EDITTASK,
    payload,
  };
};
export const filterTask = (payload) => {
  return {
    type: FILTERTASK,
    payload,
  };
};
