import {
  GET_PLANTS,
  GET_PLANTS_SUCCESS,
  GET_PLANTS_FAILURE
} from "../constants";

export const getPlants = () => {
  return {
    type: GET_PLANTS
  };
};

export const getPlantsSuccess = plant => {
  return {
    type: GET_PLANTS_SUCCESS,
    payload: plant
  };
};

export const getPlantsFailure = e => {
  return {
    type: GET_PLANTS_FAILURE,
    payload: e
  };
};
