import { GET_LEAN_CANVAS_LIST, GET_LEAN_CANVAS } from '../actions/leanCanvas'

const LeanCanvasReducer = (state = { item: {}, list: [] }, action) => {
  switch (action.type) {
    case GET_LEAN_CANVAS:
      return state.item = action.payload;
      break;
    case GET_LEAN_CANVAS_LIST:
      return Object.assign({}, state, {
          list: [...action.payload]
      });
      break;
    default:
      return state
  }
};

export default LeanCanvasReducer