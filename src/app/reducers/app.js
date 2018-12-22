import { fromJS } from 'immutable';
export const SAMPLE_CONSTANTS = 'SAMPLE_CONSTANST';
const initialState = fromJS({});

export default (state = initialState, action) => {
  switch (action.type) {
    case SAMPLE_CONSTANTS:
      return state
    default:
      return state;
  }
};

export const sampleAction = () => dispatch =>
  new Promise(resolve => {
    dispatch({
      type: SAMPLE_CONSTANTS,
      payload: {}
    });
    resolve();
  });
