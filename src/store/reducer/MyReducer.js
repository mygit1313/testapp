import {SAVEDATA} from '../Types';

const intialState = {
  myalldata: [],
};

export default (state = intialState, action) => {
  switch (action.type) {
    case SAVEDATA:
      return {
        ...state,
        myalldata: [...state.myalldata, action.payload],
      };

    default:
      return state;
  }
};
