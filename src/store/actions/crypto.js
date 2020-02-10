import axios from 'axios';

import { apiBaseURL, FETCHING_COIN_DATA, FETCHING_COIN_DATA_FAIL, FETCHING_COIN_DATA_SUCCESS } from '../types';

export default function fetchCoinData() {
  return async dispatch => {
    dispatch({ type: FETCHING_COIN_DATA });
    return axios
      .get(`${apiBaseURL}v1/ticker/?limit=10`)
      .then(res => {
        dispatch({ type: FETCHING_COIN_DATA_SUCCESS, payload: res.data });
      })
      .catch(err => {
        dispatch({ type: FETCHING_COIN_DATA_FAIL, payload: err.data });
      });
  };
}
