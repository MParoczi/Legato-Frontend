import * as types from "./actionTypes";
import * as postApi from "../../api/postApi";
import { apiCallError, beginApiCall } from "./apiStatusActions";

function addPostSuccess(post) {
  return { type: types.ADD_POST_SUCCESS, post };
}

function getUserPostsSuccess(posts) {
  return { type: types.GET_USER_POSTS_SUCCESS, posts };
}

function deletePostSuccess(post) {
  return { type: types.DELETE_POST_SUCCESS, post };
}

function updatePostSuccess(post) {
  return { type: types.UPDATE_POST_SUCCESS, post };
}

export function addPost(post, token) {
  return function(dispatch) {
    dispatch(beginApiCall());
    return postApi
      .addPost(post, token)
      .then(post => dispatch(addPostSuccess(post)))
      .catch(error => {
        dispatch(apiCallError());
        throw error;
      });
  };
}

export function getUserPosts(user) {
  return function(dispatch) {
    dispatch(beginApiCall());
    return postApi
      .getUserPosts(user)
      .then(posts => dispatch(getUserPostsSuccess(posts)))
      .catch(error => {
        dispatch(apiCallError());
        throw error;
      });
  };
}

export function deletePost(token, postId) {
  return function(dispatch) {
    dispatch(beginApiCall());
    return postApi
      .deletePost(token, postId)
      .then(post => dispatch(deletePostSuccess(post)))
      .catch(error => {
        dispatch(apiCallError());
        throw error;
      });
  };
}

export function updatePost(post, token) {
  return function(dispatch) {
    dispatch(beginApiCall());
    return postApi
      .updatePost(post, token)
      .then(post => dispatch(updatePostSuccess(post)))
      .catch(error => {
        dispatch(apiCallError());
        throw error;
      });
  };
}
