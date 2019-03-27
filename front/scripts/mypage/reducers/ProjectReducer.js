import { 
  FETCH_PROJECTS_FULFILLED,
  CREATE_PROJECT_FULFILLED,
  UPDATE_PROJECT_FULFILLED,
  EDIT_PROJECT_NAME,
  SELECT_PROJECT,
  GET_PROJECT 
} from '../actions/project';
import { sortUpdateAtDesc } from '../utils/sort'

const ProjectReducer = (state = { item: {}, list: [] }, action) => {
  switch (action.type) {
    case SELECT_PROJECT:
      return Object.assign({}, state, { 
        item: {...state.list.find(value => value.id === action.payload)},
      });
      break;
    case EDIT_PROJECT_NAME:
      const projects = Object.assign({}, state);
      projects.item.name = action.payload;
      return projects;
      break;
    case CREATE_PROJECT_FULFILLED:
      return Object.assign({}, state, {
        list: [action.payload, ...state.list].sort(sortUpdateAtDesc),
      });
      break;
    case UPDATE_PROJECT_FULFILLED:
      const list = state.list.map(value => {
        if (value.id === action.payload.id) {
          return action.payload;
        } else {
          return value;
        }
      }).sort(sortUpdateAtDesc);
      return Object.assign({}, state, { list });
      break;
    case FETCH_PROJECTS_FULFILLED:
      return Object.assign({}, state, {
        list: [...action.payload].sort(sortUpdateAtDesc),
      });
      break;
    default:
      return state;
  }
};

export default ProjectReducer;
