import { getPhotos } from "../services/api";

export const RECEIVE_PHOTOS = "RECEIVE_PHOTOS";

export function receivePhotos(photos) {
  return {
    type: RECEIVE_PHOTOS,
    photos
  };
}

export function handleReceivePhotos() {
  return dispatch => {
    return getPhotos().then(photos => dispatch(receivePhotos(photos)));
  };
}
