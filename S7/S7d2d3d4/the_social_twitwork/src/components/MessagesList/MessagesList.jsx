import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import uuid from "uuid";
import { fetchPosts, OnDeletePost} from "../helpers/fetch";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";
import {SaveCurrentLike, DeleteCurrentLike} from "../../Redux/Actions/CurrentUserActions";

const MessagesList = () => {
  const Token = Cookies.get("token");
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);
  const UserId = useSelector((state) => state.currentuser.id);
  const messages = useSelector((state) => state.message.messages);
  const login = useSelector((state) => state.currentuser.logged);
  const PostLikes = new Set(useSelector((state) => state.currentuser.currentLike));

  const OnPostLike = (id, like) => {
  
    return () => {
      const data = {
      like: PostLikes.has(id)? like-1:like+1
    };
      fetch(`http://localhost:1337/posts/${id}`, {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${Token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((response) => response.json())
        .then((response) => {
          if (response.error) {
            console.log(response);
          } else {
            console.log(response);
            dispatch(fetchPosts());
            if (PostLikes.has(id)){
              PostLikes.delete(id)
              dispatch(DeleteCurrentLike(PostLikes))
            }else{
              PostLikes.add(id)
              dispatch(SaveCurrentLike(PostLikes))
            }
          }
        });
    };
  };
  return (
    <div>
      {messages
        .sort((a, b) => b.id - a.id)
        .map((message) => (
          <div key={uuid()}>

            {message.text}
          
            --
            {login ? (
              <Link to={`/users/${message.user.id}`}>
                {message.user.username}
              </Link>
            ) : (
              ""
            )}
            --
            {login ? (
              <button onClick={OnPostLike(message.id, message.like)}>{message.like} </button>
            ) : (
              ""
            )}
            --
            {login && message.user.id === UserId ? (
              <button onClick={OnDeletePost(message.id)}>Delete Post</button>
            ) : (
              ""
            )}
          </div>
        ))}
    </div>
  );
};

export default MessagesList;
