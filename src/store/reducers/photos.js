import { RECEIVE_PHOTOS } from "../actions/photos";

export default function photos(state = {}, action) {
  switch (action.type) {
    case RECEIVE_PHOTOS:
      return {
        photos: [...action.photos]
      };
    default:
      return state;
  }
}
