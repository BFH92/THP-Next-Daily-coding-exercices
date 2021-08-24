import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import uuid from "uuid";
import { fetchPosts, OnDeletePost} from "../helpers/fetch";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";
import {SaveCurrentLike, DeleteCurrentLike} from "../../Redux/Actions/CurrentUserActions";
import Message from "./message";
import MessageContext from "../../Context/MessageContext";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import DeleteIcon from '@material-ui/icons/Delete';
import withMessage from "../../Context/withMessage";

const MessagesList = () => {
  const Token = Cookies.get("token");
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);
  const UserId = useSelector((state) => state.currentuser.id);
  const messages = useSelector((state) => state.message.messages);
  const login = useSelector((state) => state.currentuser.logged);
  const [getlikes, setGetLike] = useState(["B"])//useSelector((state) => state.currentuser.currentLike)
  console.log("CHECK")
  const useStyles = makeStyles((theme) => ({
    root: {
      display: "flex",
      maxHeight: 100,
    },
    media: {
      height: 0,
      paddingTop: "56.25%", // 16:9
    },
    expand: {
      transform: "rotate(0deg)",
      marginLeft: "auto",
      transition: theme.transitions.create("transform", {
        duration: theme.transitions.duration.shortest,
      }),
    },

    avatar: {
      backgroundColor: red[500],
    },
  }));
  const classes = useStyles();
  let likes = new Set (getlikes)
  console.log(likes)

  
  const OnPostLike = async(id, like) => {
  
    return () => {
      const data = {
      like: likes.has(id)? like-1:like+1,  
    };
      setGetLike(likes)
      const response = await fetch(`http://localhost:1337/posts/${id}`, {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${Token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        const json = await response.json()
        const displayLike = await likePost(json)
      
      //function likePost (response) => {
      //    if (response.error) {
      //      console.log("ERROR LIKE");
      //    } else {
      //      console.log("SUCCESS LIKE");
      //      dispatch(fetchPosts());
      //      if (likes.has(id)){
      //        likes.delete(id)
      //        console.log("HEYEEYEYEY")
      //        console.log (likes)
      //        setGetLike(likes)
      //    
      //      }else{
      //        likes.add(id)
      //        console.log("ADDDDIn")
      //        console.log(likes)
      //        setGetLike(likes)
    
      //      }
      //    }
      };
    };
  };
  
  return (
    <div>
    
      {messages
        .sort((a, b) => b.id - a.id)
        .map((message) => (
          
          <div key={uuid()}>
          <Card className={classes.root}>
          <CardHeader subheader={login ? <Link className="bodyLink" to={`/users/${message.user.id}`}>{message.user.username}</Link> : ""} />

          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
            {message.text}
            </Typography>
          </CardContent>
          <IconButton aria-label="add to favorites" onClick={OnPostLike(message.id, message.like)}>
          {login?  
        
          <Avatar aria-label="recipe" className={classes.avatar}>
           <FavoriteIcon /> 
            </Avatar> 
            
        
           :"" }

          </IconButton>
          
          {login? message.like:""}
          <IconButton aria-label="add to favorites" onClick={OnDeletePost(message.id)}>
          {login && message.user.id === UserId ?  <Avatar aria-label="recipe" className={classes.avatar}>
           <DeleteIcon />
            </Avatar>:""}
          </IconButton>
        </Card>
          
          </div>
        
        ))}
      
      
    </div>
  );
};

export default MessagesList;
