import axios from 'axios';
import {MY_APP_URL} from '../../Services';

export const Get_Data = () => async dispatch => {
  try {
    var res = await axios.get(`${MY_APP_URL}`);

    return res.data;
  } catch (err) {
    console.log('err', err);
  }
};
export const Search_Api = value => async dispatch => {
  try {
    var res = await axios.get(`${MY_APP_URL}?type=${value}`);

    return res.data;
  } catch (err) {
    console.log('err', err);
  }
};

export const filter_Data =
  (participants, price, minPrice, maxPrice, type) => async dispatch => {
    try {
      var res = await axios.get(
        `${MY_APP_URL}?type=${type}&participants=${participants}&price=${price}`,
      );

      return res.data;
    } catch (err) {
      console.log('err', err);
    }
  };
