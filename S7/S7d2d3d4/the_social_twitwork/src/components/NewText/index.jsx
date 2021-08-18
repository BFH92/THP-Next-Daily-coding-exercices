import React from 'react';
import Cookies from 'js-cookie'
import { useDispatch, useSelector } from 'react-redux';
import { FetchPostsSuccess,FetchPostsFailed } from '../../Redux/Actions/MessagesListActions';
import { useEffect } from 'react';
import { useState } from 'react';
import { fetchPosts } from '../helpers/fetch';

const NewText = () => {
  const login= useSelector(state => state.currentuser.logged);

  const [newPost, setNewPost] = useState(false)
  const UserID = Cookies.get('id')
  console.log(UserID)
  const dispatch = useDispatch();
  
  const data = {
    text :newPost,
    user :UserID
  }
  const OnSavePost = (e) => {
  
    setNewPost(e.target.value)
  }
  const OnCreatePost =() => {
    return (dispatch) => {
      newPost? fetch('http://localhost:1337/posts', {
      method: 'POST', 
      headers: {
        'Authorization': `Bearer ${Token}`,
        'Content-Type':'application/json'
      },
      body: JSON.stringify(data)
    })
    .then((response) => response.json())
    .then((response) => {
      if (response.error) {
        console.log(response)
        dispatch(FetchPostsFailed(response.message));
      } else {
        console.log(response)
        dispatch(fetchPosts());
        
      }
    })

    :alert("Post is empty ! ")}
    }
    
    const Token = Cookies.get('token')

  return (
    <div>
      {login?
      <>
      <input type="text-area" placeholder="Spread news here " onChange={OnSavePost}/>
      <button action="submit" onClick={()=>{dispatch(OnCreatePost())}}>spread the news</button>
      </>
    :""}
    </div>
  );
}

export default NewText;
