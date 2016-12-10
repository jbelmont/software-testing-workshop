import * as constants from '../constants/constants.js';

const {
    GET_USERS,
    ADD_USER_DETAIL_INFO,
    ADD_NEW_USER
} = constants;

export function getusers({users}) {
  return {
    type: GET_USERS,
    users
  };
}

export function getUserInfo({email, firstName, lastName, gender, id}) {
  return {
    type: ADD_USER_DETAIL_INFO,
    email,
    firstName,
    lastName,
    gender,
    id
  };
}

export function addUserInfo({email, firstName, lastName, gender, id}) {
  return {
    type: ADD_NEW_USER,
    email,
    firstName,
    lastName,
    gender,
    id
  }
}