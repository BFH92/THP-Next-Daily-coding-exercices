import { FETCH_POSTS_REQUEST, FETCH_POSTS_SUCCESS, FETCH_POSTS_FAILED} from '../Types/MessagesListTypes'

export const FetchPostsRequest = () => {
  return{
    type: FETCH_POSTS_REQUEST
  }
}

export const FetchPostsSuccess = (messages) => {
  return{
    type: FETCH_POSTS_SUCCESS,
    messages
  }
}

export const FetchPostsFailed = (error) => {
  return{
    type: FETCH_POSTS_FAILED,
    error
  }
}
