import React, { useEffect } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';

import { Link } from 'react-router-dom';
import FormContainer from '../../Components/FormContainer';

import * as yup from 'yup';
import { useFormik } from 'formik';

import useStyles from './styles';
import loginSvg from '../../assets/login.svg';
import { LinearProgress } from '@material-ui/core';
import { Alert } from '@material-ui/lab';

const SignInScreen = ({ location, history }) => {
    const classes = useStyles();
    // const [loginData, setLoginData] = useState({
    //   email: "",
    //   password: "",
    // });

    const validationSchema = yup.object({
        email: yup
            .string()
            .email('Enter a valid email')
            .required('Email is required'),
        password: yup
            .string()
            .min(8, 'Password should be of minimum 8 characters length')
            .required('Password is required'),
    });

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            //   signInUser(values.email, values.password);
        },
    });

    //   const { signInUser } = useAction();
    //   const { data, error, loading } = useTypedSelector((state) => state.userLogin);
    //   const redirect = location.search ? location.search.split("=")[1] : "/";

    //   useEffect(() => {
    //     if (data) history.push(redirect);
    //   }, [redirect, history, data]);

    // const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    //   e.preventDefault();
    //   signInUser(loginData.email, loginData.password);
    // };

    return (
        <>
            {/* {loading && (
        <LinearProgress
          style={{ marginTop: "4px", marginBottom: "4px" }}
          color="primary"
        />
      )} */}
            <FormContainer image={loginSvg}>
                <div className={classes.paper}>
                    <Avatar className={classes.avatar}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign in
                    </Typography>
                    {/* {error && (
            <Alert
              style={{ marginTop: "8px", width: "100%" }}
              variant="outlined"
              severity="error"
            >
              {error}
            </Alert>
          )} */}
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            formik.handleSubmit();
                        }}
                        className={classes.form}
                        noValidate
                        autoComplete="off"
                    >
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            error={
                                formik.touched.email &&
                                Boolean(formik.errors.email)
                            }
                            helperText={
                                formik.touched.email && formik.errors.email
                            }
                            autoFocus
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            value={formik.values.password}
                            onChange={formik.handleChange}
                            error={
                                formik.touched.password &&
                                Boolean(formik.errors.password)
                            }
                            helperText={
                                formik.touched.password &&
                                formik.errors.password
                            }
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                        />
                        <FormControlLabel
                            control={
                                <Checkbox value="remember" color="primary" />
                            }
                            label="Remember me"
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                        >
                            Sign In
                        </Button>
                        <Grid container>
                            <Grid item>
                                <Link
                                    to="/register"
                                    style={{
                                        textDecoration: 'none',
                                        color: 'primary',
                                    }}
                                >
                                    <Typography variant="body2" component="p">
                                        Don't have an account?{' '}
                                        <span
                                            style={{
                                                textDecoration: 'underline',
                                            }}
                                        >
                                            Sign Up
                                        </span>
                                    </Typography>
                                </Link>
                            </Grid>
                        </Grid>
                    </form>
                </div>
            </FormContainer>
        </>
    );
};

export default SignInScreen;
