import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Cookies from "js-cookie";
import { useDispatch, useSelector } from "react-redux";
import uuid from "uuid";
import {SaveCurrentLike, DeleteCurrentLike} from "../../Redux/Actions/CurrentUserActions";
import { fetchPosts } from "../helpers/fetch";


const UserInformation = () => {
  const Token = Cookies.get("token");
  const [UserInfos, setUserInfos] = useState("");
  const [foundMessages, setFoundMessages] = useState("");
  const User = useParams();
  const UserId = Number(User.UserName);
  const messages = useSelector((state) => state.message.messages);
  const dispatch = useDispatch()
  const login = useSelector((state) => state.currentuser.logged);
  
  
  function fetchUsers(){
    const Token = Cookies.get("token");
    return () => {
      fetch(`http://localhost:1337/users/${UserId}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${Token}`,
        },
      })
        .then((response) => response.json())
        .then((response) => {
          if (response.error) {
            console.log(response);
          } else {
            console.log(response);
            setUserInfos(response);
          }
        });
    };
  };

  useEffect(() => {
    let selectedMessages = [];
    const found = messages.map((message) => {
      if (message.user.id === UserId) {
        selectedMessages.push(message);
      }
    });
    setFoundMessages(selectedMessages);
    dispatch(fetchUsers())// TODO: comportement bizarre
  }, [UserId ]);

  console.log(UserInfos);
  return (
    <>
    <div>
      {UserInfos.username}
      {UserInfos.description}
      {foundMessages? 
      foundMessages.map((message) => (
            <div key={uuid()}>
              <div>
                {message.text}
      
              </div>
            </div>
          ))
        : ""}
    </div>
  </>
  );
};

export default UserInformation;
