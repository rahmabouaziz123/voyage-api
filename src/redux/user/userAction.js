
import axios from 'axios'
import { FETCH_USERS_FAILURE, FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS } from './userType'
// import {
//   FETCH_USERS_REQUEST,
//   FETCH_USERS_SUCCESS,
//   FETCH_USERS_FAILURE
// } from './userTypes'

export const fetchUsers =  () => {
  return (dispatch) => {
    dispatch(fetchUsersRequest())
   
    axios.get('https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=be544d4c4c48401ca7cbf63479281f30')
      .then(response => {
        // response.data is the users
        const users = response.data
        dispatch(fetchUsersSuccess(users))
      })
      .catch(error => {
        // error.message is the error message
        dispatch(fetchUsersFailure(error.message))
      })
  }
}

export const fetchUsersRequest = () => {
  return {
    type: FETCH_USERS_REQUEST
  }
}

export const fetchUsersSuccess = users => {
  return {
    type: FETCH_USERS_SUCCESS,
    payload: users
  }
}

export const fetchUsersFailure = error => {
  return {
    type: FETCH_USERS_FAILURE,
    payload: error
  }
}