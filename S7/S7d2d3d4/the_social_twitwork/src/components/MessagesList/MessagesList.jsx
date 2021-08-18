import React from 'react';
import Author from './Author';
import LikeButton from './LikeButton';
import { useSelector } from 'react-redux';
import { FetchPostsSuccess,FetchPostsRequest,FetchPostsFailed } from '../../Redux/Actions/MessagesListActions';
import { useDispatch } from 'react-redux';
import Cookies from 'js-cookie'
const MessagesList = () => {

  const dispatch = useDispatch();
  const data = {
    "text":"blahblah",
    "user":"3"
  }
  const Token = Cookies.get('token')
  console.log(Token)

  const fetchPosts = () => {
    return (dispatch) => {
      dispatch(FetchPostsRequest());
      fetch('http://localhost:1337/users/me', {
        method: 'get',
        headers: {
          'Authorization': `Bearer ${Token}`,
          'Content-Type':'application/json'
        }
        //body: JSON.stringify(data)
      })
        .then((response) => response.json())
        .then((response) => {
          console.log(response)
        //  if (response.status === "error") {
        //    dispatch(FetchPostsFailed(response.json));
        //  } else {
        //    dispatch(FetchPostsSuccess(response.posts));
        //  }
        })
    }
  }

  const message = useSelector(state => state.messages);
  
  return (
    <div>
      <button onClick={()=>{dispatch(fetchPosts())}}>fetch</button>
      {message}
    </div>
  );
}

export default MessagesList;
