import { GET_PROJECTS, GET_PROJECT } from '../actions/project';

const ProjectReducer = (state = { item: {}, list: [] }, action) => {
  console.log('ProjectReducer')
  switch (action.type) {
    case GET_PROJECT:
      return state.item = action.payload;
      break;
    case GET_PROJECTS:
      return Object.assign({}, state, {
        list: [...action.payload],
      });
      break;
    default:
      return state;
  }
};

export default ProjectReducer;
