import {
  FetchPostsSuccess,
  FetchPostsFailed,
} from "../../Redux/Actions/MessagesListActions";
import Cookies from "js-cookie";
import { useDispatch, useSelector } from "react-redux";
import {
  FetchCurrentUserFailed,
  FetchCurrentUserRequest,
  FetchCurrentUserSuccess,
  RegisterCurrentUserName,
  RegisterCurrentDescription,
} from "../../Redux";
import { useState } from "react";
import { useHistory} from "react-router-dom";

const Token = Cookies.get("token");
export const fetchPosts = () => {
  return (dispatch) => {
    fetch("http://localhost:1337/posts", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((response) => {
        if (response.error) {
          console.log(response);
          dispatch(FetchPostsFailed(response.message));
        } else {
          console.log(response);
          dispatch(FetchPostsSuccess(response));
        }
      });
  };
};

export const OnDeletePost = (id) => {
  const dispatch = useDispatch();

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

export const UpdateUserProfile = () => {
  const username = useSelector((state) => state.currentuser.username);
  const description = useSelector((state) => state.currentuser.description);

  const history = useHistory();
  const [UserNameInput, setUsernameInput] = useState(username);
  const [DescriptionInput, setDescriptionInput] = useState(description);

  const data = {
    username: UserNameInput,
    description: DescriptionInput,
  };
  return (dispatch) => {
    dispatch(RegisterCurrentUserName(UserNameInput));
    dispatch(RegisterCurrentDescription(DescriptionInput));
    dispatch(FetchCurrentUserRequest());

    fetch("http://localhost:1337/users/me", {
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
          dispatch(FetchCurrentUserFailed(response.message));
        } else {
          console.log(response);
          dispatch(FetchCurrentUserSuccess(response));
          history.push("/profile");
        }
      });
  };
};


