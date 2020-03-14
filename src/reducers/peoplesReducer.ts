import update from 'immutability-helper';
import { GET_PEOPLE_SUCCESS } from '../actions/people';

const defaultState = {
  peoplesList: []
};

export default (state = defaultState, action: any) => {
  console.log(action);

  switch (action.type) {
    case GET_PEOPLE_SUCCESS:
      return update(state, {
        peoplesList: { $set: action.payload }
      });
    default:
      return state;
  }
};
