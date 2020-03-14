import update from 'immutability-helper';
import {
  CHANGE_THEME,
  GET_DATA,
  GET_DATA_SUSEFUL,
  GET_DATA_ERROR
} from '../actions/main';

const defaultState = {
  theme: 'light',
  isWaitResponse: false
};

export default (state = defaultState, action: any) => {
  switch (action.type) {
    case CHANGE_THEME:
      return update(state, {
        theme: { $set: state.theme === 'light' ? 'dark' : 'light' }
      });
    case GET_DATA:
      return update(state, {
        isWaitResponse: { $set: true }
      });

    case GET_DATA_SUSEFUL:
      return update(state, {
        isWaitResponse: { $set: false }
      });

    case GET_DATA_ERROR:
      return update(state, {
        isWaitResponse: { $set: false }
      });
    default:
      return state;
  }
};
