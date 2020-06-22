import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function postReducer(state = initialState.posts, action) {
  switch (action.type) {
    case types.ADD_POST_SUCCESS:
      return [...state, action.post];
    case types.GET_USER_POSTS_SUCCESS:
      return action.posts;
    default:
      return state;
  }
}
