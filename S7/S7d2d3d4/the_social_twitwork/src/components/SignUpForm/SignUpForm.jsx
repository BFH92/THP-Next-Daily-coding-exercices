import React from 'react';
import Cookies from 'js-cookie'
import { useDispatch, useSelector } from 'react-redux';
import {FetchCurrentUserFailed, FetchCurrentUserRequest, FetchCurrentUserSuccess, RegisterCurrentEmail,RegisterCurrentUserName,RegisterCurrentPassword} from '../../Redux';
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
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
const SignUpForm = () => {
  const dispatch = useDispatch();
  const email = useSelector(state => state.currentuser.email)
  const username = useSelector(state => state.currentuser.username)
  const password = useSelector(state => state.currentuser.password)
  const history = useHistory()
    const data = {
      'username':username,
      'email': email,
      'password':password
    }
    const saveEmail=(e) => {
      dispatch(RegisterCurrentEmail( e.target.value)) //TODO: voir comment le rendre + propre
    }
    const saveUserName=(e) => {
      dispatch(RegisterCurrentUserName( e.target.value))
    }
    const savePassword=(e) => {
      dispatch(RegisterCurrentPassword( e.target.value))
    }
    const FetchSignUp =()=> {
      return (dispatch)=>{
      
      fetch('http://localhost:1337/auth/local/register', {
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
            console.log(response.status)
            Cookies.set('token',response.jwt)
            dispatch(FetchCurrentUserSuccess(response.user))
            history .push("/")
            //dispatch(SaveCurrentToken(true))
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
          Sign up
        </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} >
              <TextField
                variant="outlined"
                required
                fullWidth
                id="userName"
                label="userName"
                name="userName"
                autoComplete="username"
                onChange={saveUserName}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                onChange={saveEmail}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={savePassword}
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="I want to receive inspiration, marketing promotions and updates via email."
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={()=>{dispatch(FetchSignUp())}}
          >
            Sign Up
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
            <Link to="/login" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
      </div>
      <Box mt={5}>
      </Box>
    </Container>
  
    </>
  );
}

export default SignUpForm;
