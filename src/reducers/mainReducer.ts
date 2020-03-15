import update from 'immutability-helper';
import {
  CHANGE_THEME,
  GET_DATA,
  GET_DATA_SUSEFUL,
  GET_DATA_ERROR
} from '../actions/main';

const defaultState = {
  theme: 'light',
  isWaitResponse: false,
  mainMsg: { state: false, text: '', type: 'error' }
};

export default (state = defaultState, action: any) => {
  switch (action.type) {
    case CHANGE_THEME:
      return update(state, {
        theme: { $set: state.theme === 'light' ? 'dark' : 'light' }
      });
    case GET_DATA:
      return update(state, {
        isWaitResponse: { $set: true },
        mainMsg: { $set: defaultState.mainMsg }
      });

    case GET_DATA_SUSEFUL:
      return update(state, {
        isWaitResponse: { $set: false }
      });

    case GET_DATA_ERROR:
      return update(state, {
        isWaitResponse: { $set: false },
        mainMsg: { $set: { state: true, text: action.payload, type: 'sdfsdf' } }
      });
    default:
      return state;
  }
};
