const ADD_TASK = "ADD_TASK";
const DELETE_TASK = "DELETE_TASK";
const DO_TASK = "DO_TASK";

export const addTask = (title, body) => {
  return {
    type: ADD_TASK,
    title,
    body,
  };
};

export const delTask = (id) => {
  return {
    type: DELETE_TASK,
    id,
  };
};

export const doTask = (id) => {
  return {
    type: DO_TASK,
    id,
  };
};

const initialState = {
  tasks: [{ id: 0, title: "initial", body: "", isDone: false }],
  tID: 1,
};

const task = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      return {
        tID: state.tID + 1,
        tasks: [
          ...state.tasks,
          {
            id: state.tID,
            title: action.title,
            body: action.body,
            isDone: false,
          },
        ],
      };
    case DELETE_TASK:
      return {
        tID: state.tID,
        tasks: state.tasks.filter((task) => task.id !== action.id),
      };
    case DO_TASK:
      const newTask = state.tasks.filter((task) => task.id === action.id)[0];
      newTask.isDone = !newTask.isDone;
      return {
        tID: state.tID,
        tasks: [
          ...state.tasks.filter((task) => task.id !== action.id),
          newTask,
        ],
      };
    default:
      return state;
  }
};

export default task;
