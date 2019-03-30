import { 
  FETCH_PROJECTS_FULFILLED,
  CREATE_PROJECT_FULFILLED,
  UPDATE_PROJECT_FULFILLED, UPDATE_PROJECT_FAILED,
  EDIT_PROJECT_NAME,
  SELECT_PROJECT,
  FETCH_PROJECT_FULFILLED 
} from '../actions/project';
import { sortUpdateAtDesc } from '../utils/sort'

const ProjectReducer = (state = { item: {}, list: [], error: { status: null }}, action) => {
  console.log(action);
  switch (action.type) {
    case SELECT_PROJECT:
      return Object.assign({}, state, { 
        item: {...state.list.find(value => value.id === action.payload)},
      });
      break;
    case FETCH_PROJECT_FULFILLED:
      return Object.assign({}, state, { 
        item: action.payload,
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
    case UPDATE_PROJECT_FAILED:
      return Object.assign({}, state, {
        error: {
          status: action.payload.status,
        }
      });
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
