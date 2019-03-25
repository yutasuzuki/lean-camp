import { 
  FETCH_PROJECTS_FULFILLED,
  CREATE_PROJECT_FULFILLED,
  UPDATE_PROJECT_FULFILLED,
  GET_PROJECT 
} from '../actions/project';

const ProjectReducer = (state = { item: {}, list: [] }, action) => {
  console.log('ProjectReducer:action', action);
  switch (action.type) {
    case GET_PROJECT:
      return state.item = action.payload;
      break;
    case UPDATE_PROJECT_FULFILLED:
      break;
    case CREATE_PROJECT_FULFILLED:
      return Object.assign({}, state, {
        list: [action.payload, ...state.list],
      });
      break;
    case FETCH_PROJECTS_FULFILLED:
      return Object.assign({}, state, {
        list: [...action.payload],
      });
      break;
    default:
      return state;
  }
};

export default ProjectReducer;
