import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { SaveCurrentToken } from "../../Redux";
import Cookies from "js-cookie";
import "./index.css";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";

const NavBar = () => {
  const login = useSelector((state) => state.currentuser.logged);
  const dispatch = useDispatch();
  const logOut = () => {
    Cookies.remove("token");
    Cookies.remove("id");
    dispatch(SaveCurrentToken());
  };
  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }));
  //<div>
  //<Link to="/">Home</Link>
  //</div>
  //<div>
  //<Link to="/profile">Profile</Link>
  //</div>
  //<div>
  //{login?<button onClick={logOut}>Logout</button> : <div><Link to="/login">LOGIN</Link> / <Link to="/register">SIGNUP</Link></div> }
  //</div>

  //
  const classes = useStyles();
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
          <Link className="a" to="/">Home</Link> 
          </Typography>
          {login? 
          <>
            <div>
          <Link className="a" to="/profile">
            Profile
          </Link>
          </div>
          ----
          <div>
          <Link  onClick={logOut} className="a" >
          Logout
        </Link>
        </div>
        </>
          :
          <>
          <div>
          <Link className="a" to="/login">
            Login
          </Link>
          </div>
           / 
          <div>
          <Link className="a" to="/register">
          Signup
        </Link>
        </div>
        </>
          }
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavBar;
