const initialState = {
  servers: [],
  tasks: [],
  nextId: 1,
};

export const taskManager = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_SERVER':
      let newServer = {
        index: state.nextId,
        serverAvailable: true,
        taskProgress: 0,
      };
      return {
        ...state,
        servers: [...state.servers, newServer],
        nextId: state.nextId + 1,
      };
    case 'ALLOCATE_SERVER':
      let server = state.servers.filter(
        (itrServer) => itrServer.index === action.payload.index
      );
      server.serverAvailable = false;
      state.servers.splice(action.payload.index, 1);
      return {
        ...state,
        servers: [...state.servers, server],
      };
    case 'REMOVE_SERVER':
      let index = action.payload;
      state.servers.splice(index, 1);
      return {
        ...state,
        servers: [...state.servers],
      };

    case 'ADD_TASK':
      let newTask = {
        index: state.nextId,
        taskCompleted: false,
        progress: 0,
        serverAllocated: action.payload.serverAllocated,
      };
      return {
        ...state,
        tasks: [...state.tasks, newTask],
        nextId: state.nextId + 1,
      };

    case 'REMOVE_TASK':
      state.tasks.splice(action.payload, 1);

      return {
        ...state,
        tasks: [...state.tasks],
      };

    default:
      return state;
  }
};
