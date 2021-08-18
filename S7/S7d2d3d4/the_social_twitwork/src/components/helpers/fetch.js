import { FetchPostsSuccess,FetchPostsFailed } from '../../Redux/Actions/MessagesListActions';
import Cookies from 'js-cookie'
import { useDispatch, useSelector } from 'react-redux';
import {SaveCurrentLike, DeleteCurrentLike} from "../../Redux/Actions/CurrentUserActions";

const Token = Cookies.get("token");
export const fetchPosts = () => {
  
  return (dispatch) => {
    
    
    fetch('http://localhost:1337/posts', {
      method: 'GET',
      headers: {
        'Content-Type':'application/json'
      }
    })
      .then((response) => response.json())
      .then((response) => {
        if (response.error) {
          console.log(response)
          dispatch(FetchPostsFailed(response.message));
        } else {
          console.log(response)
          dispatch(FetchPostsSuccess(response));
          
        }
      })
  }
}

export const OnDeletePost = (id) => {
  const dispatch = useDispatch()
  

  return () => {
    fetch(`http://localhost:1337/posts/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${Token}`,
      },
    })
      .then((response) => response.json())
      .then((response) => {
        if (response.error) {
          console.log("error");
        } else {
          console.log("success");
          dispatch(fetchPosts());
        }
      });
  };
};


