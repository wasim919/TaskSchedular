const initialState = {
  servers: [],
  tasks: [],
  nextId: 0,
};

const taskManager = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_SERVER':
      newServer = {
        index: state.nextId,
        serverAvailable: true,
      };

      return {
        ...state,
        servers: [...servers, newServer],
        nextId: nextId + 1,
      };

    case 'ADD_TASK':
      newTask = {
        index: state.nextId,
        taskCompleted: false,
      };

      return {
        ...state,
        tasks: [...tasks, newTask],
        nextId: nextId + 1,
      };

    case 'REMOVE_TASK':
      const index = action.payload;
      state.tasks.splice(index, 1);

      return {
        ...state,
        tasks: [...state.tasks],
      };

    case 'REMOVE_SERVER':
      const index = action.payload;
      state.servers.splice(index, 1);

      return {
        ...state,
        servers: [...state.servers],
      };

    default:
      return state;
  }
};
