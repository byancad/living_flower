import {
  getPlants,
  getPlantsFailure,
  getPlantsSuccess
} from "../actions/plants";

import { getAllPlants } from "../../services/api";

export const getPlantThunk = () => {
  return async dispatch => {
    dispatch(getPlants());
    try {
      const response = await getAllPlants();
      dispatch(getPlantsSuccess(response));
    } catch (e) {
      dispatch(getPlantsFailure(e.message));
    }
  };
};
