import { FETCH_LEAN_CANVAS_FULFILLED, FETCH_LEAN_CANVAS_FAILED } from '../actions/leanCanvas';

const initialState = {
  data: {
    problem: '',
    solution: '',
    unique_value: '',
    advantage: '',
    customer_segments: '',
    existing: '',
    key_metrics: '',
    concept: '',
    channels: '',
    early_adopter: '',
    cost: '',
    revenue: '',
    service_name: '',
  },
  error: {
    state: null,
  }
};

const LeanCanvasReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_LEAN_CANVAS_FULFILLED:
      return Object.assign({}, state, { data: action.payload })
      break;

    case FETCH_LEAN_CANVAS_FAILED:
      return Object.assign({}, state, {
        error: {
          status: action.payload.status,
        }
      });
      break;
    default:
      return state;
  }
};

export default LeanCanvasReducer;
