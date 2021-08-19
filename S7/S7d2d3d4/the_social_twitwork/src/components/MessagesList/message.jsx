import React from "react";
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
import MessageContext from "../../Context/MessageContext";
import { useContext, useState } from "react";
import { useSelector} from "react-redux";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import './index.css'
const Message = () => {
  const MessageProps = useContext(MessageContext); 
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
  const login = useSelector((state) => state.currentuser.logged);
  const UserId = useSelector((state) => state.currentuser.id);
  

  return (
    <>
      <div>
        <Card className={classes.root}>
          <CardHeader subheader={login ? MessageProps.message.user.username : ""} />

          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
            {MessageProps.message.user.username}
            </Typography>
          </CardContent>
          <IconButton aria-label="add to favorites">
          {login?  <Avatar aria-label="recipe" className={classes.avatar}>
           <FavoriteIcon onClick={()=>{MessageProps.onLike()}}/> 
           {MessageProps.message.like}
            </Avatar>:"" }
          </IconButton>
          <IconButton aria-label="add to favorites">
          {login && MessageProps.message.user.id === UserId ?  <Avatar aria-label="recipe" className={classes.avatar}>
           <DeleteIcon onClick={()=>{MessageProps.onDelete(MessageProps.message.id)}} />
            </Avatar>:""}
          </IconButton>
        </Card>
      
      {MessageProps.message.text}
        
        --
        {login ? (
          <Link to={`/users/${MessageProps.message.user.id}`}>
            {MessageProps.message.user.username}
          </Link>
        ) : (
          ""
        )}
        --
        {login ? (
          <button onClick={MessageProps.onLike(MessageProps.message.id, MessageProps.message.like)}>{MessageProps.message.like} </button>
        ) : (
          ""
        )}
        --
        {login && MessageProps.message.user.id === UserId ? (
          <button onClick={MessageProps.onDelete(MessageProps.message.id)}>Delete Post</button>
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default Message;
