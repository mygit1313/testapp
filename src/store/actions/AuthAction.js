import {SAVEDATA} from '../Types';

export const All_Data = val => {
  const data = {
    alldata: val,
  };
  return async dispatch => {
    dispatch({
      type: SAVEDATA,
      payload: data,
    });
  };
};
