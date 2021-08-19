import React from 'react';
import Cookies from 'js-cookie'
import { useDispatch, useSelector } from 'react-redux';
import {FetchCurrentUserFailed, FetchCurrentUserSuccess, RegisterCurrentEmail,RegisterCurrentUserName,RegisterCurrentPassword, SaveCurrentToken } from '../../Redux';
import { useHistory, Link} from 'react-router-dom';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const LoginForm = () => {
  const email = useSelector(state => state.currentuser.email)
  const password = useSelector(state => state.currentuser.password)
  const history = useHistory()
  const dispatch = useDispatch();
  
  
  const saveEmail=(e) => {
    dispatch(RegisterCurrentEmail( e.target.value))
  }
  const savePassword=(e) => {
    dispatch(RegisterCurrentPassword(e.target.value))
  }
  const data = {
    'identifier':email,
    'password':password
  }
  const FetchToLogin =()=> {
    return ()=>{
    fetch('http://localhost:1337/auth/local', {
        method: 'POST',
        headers: {
          'Content-Type':'application/json'
        },
        body: JSON.stringify(data)
      })
      .then((response) => response.json())
      .then((response) => {
        if (response.error) {
          console.log(response)
          dispatch(FetchCurrentUserFailed(response.message));
        } else {
          console.log(response)
          Cookies.set('token',response.jwt)
          dispatch(FetchCurrentUserSuccess(response.user))
          Cookies.set('id',response.user.id)
          history.push("/")
          dispatch(SaveCurrentToken(response.user))
    
        }
      })
    }
  }
  
  const useStyles = makeStyles((theme) => ({
    paper: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }));
  const classes = useStyles();
  return (
    <>
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            onChange={saveEmail}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={savePassword}
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={()=>{dispatch(FetchToLogin())}}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link to="/register" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
      </div>
      <Box mt={8}>
    
      </Box>
    </Container>
  
  </>
  );
}

export default LoginForm;
