import { FETCH_PROJECTS_FULFILLED, GET_PROJECT } from '../actions/project';

const ProjectReducer = (state = { item: {}, list: [] }, action) => {
  switch (action.type) {
    case GET_PROJECT:
      return state.item = action.payload;
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
