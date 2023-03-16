import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../../redux/store/reducers/auth";
import { useNavigate } from 'react-router-dom';



// material-ui
import {
  Button,
  Checkbox,
  Divider,
  FormControlLabel,
  FormHelperText,
  Grid,
  Link,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Stack,
  Typography,
} from "@mui/material";

// third party
import * as Yup from "yup";
import { Formik } from "formik";

// project import
import FirebaseSocial from "./FirebaseSocial";
import AnimateButton from "components/@extended/AnimateButton";

// assets
import { EyeOutlined, EyeInvisibleOutlined } from "@ant-design/icons";

// ============================|| FIREBASE - LOGIN ||============================ //

const AuthLogin = () => {
  const dispatch = useDispatch();
    const navigate = useNavigate();


    const auth = useSelector((state) => state.auth);
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      await dispatch(login(values));
        navigate("/dashboard/default");
    } catch (error) {
      console.error(error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
      <>
        <Formik
            initialValues={{
              email: "",
              password: "",
            }}
            validationSchema={Yup.object().shape({
              email: Yup.string()
                  .email("Must be a valid email")
                  .max(255)
                  .required("Email is required"),
              password: Yup.string().max(255).required("Password is required"),
            })}
            onSubmit={handleSubmit}
        >
          {({
              errors,
              handleBlur,
              handleChange,
              handleSubmit,
              isSubmitting,
              touched,
              values,
            }) => (
              <form noValidate onSubmit={handleSubmit}>
                <Grid container spacing={3}>
                  <Grid item xs={12}>
                    <Stack spacing={1}>
                      <InputLabel htmlFor="email-login">Email Address</InputLabel>
                      <OutlinedInput
                          fullWidth
                          error={Boolean(touched.email && errors.email)}
                          id="email-login"
                          type="email"
                          value={values.email}
                          name="email"
                          onBlur={handleBlur}
                          onChange={handleChange}
                          endAdornment={
                            <InputAdornment position="end">
                              <IconButton
                                  aria-label="toggle password visibility"
                                  onClick={handleClickShowPassword}
                                  onMouseDown={handleMouseDownPassword}
                                  edge="end"
                                  size="large"
                              >
                                {showPassword ? (
                                    <EyeOutlined />
                                ) : (
                                    <EyeInvisibleOutlined />
                                )}
                              </IconButton>
                            </InputAdornment>
                          }
                      />
                      {touched.email && errors.email && (
                          <FormHelperText
                              error
                              id="standard-weight-helper-text-email-login"
                          >
                            {errors.email}
                          </FormHelperText>
                      )}
                    </Stack>
                  </Grid>
                  <Grid item xs={12}>
                    <Grid container justifyContent="flex-end">
                      <Grid item>
                        <Link href="#" variant="body2">
                          Forgot password?
                        </Link>
                      </Grid>
                    </Grid>
                  </Grid>
                    <Grid item xs={12}>
                        <Stack spacing={1}>
                            <InputLabel htmlFor="password-login">Password</InputLabel>
                            <OutlinedInput
                                  fullWidth
                                    error={Boolean(touched.password && errors.password)}
                                    id="password-login"
                                    type={showPassword ? "text" : "password"}
                                    value={values.password}
                                    name="password"
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    endAdornment={
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label="toggle password visibility"
                                                onClick={handleClickShowPassword}
                                                onMouseDown={handleMouseDownPassword}
                                                edge="end"
                                                size="large"
                                            >
                                                {showPassword ? (
                                                    <EyeOutlined />
                                                ) : (
                                                    <EyeInvisibleOutlined />
                                                )}
                                            </IconButton>
                                        </InputAdornment>
                                    }
                            />
                            {touched.password && errors.password && (
                                <FormHelperText
                                    error
                                    id="standard-weight-helper-text-password-login"
                                >
                                    {errors.password}
                                </FormHelperText>
                            )}
                        </Stack>
                    </Grid>
                    <Grid item xs={12}>
                        <FormControlLabel
                            control={<Checkbox value="remember" color="primary" />}
                            label="Remember me"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <AnimateButton>
                            <Button

                                  fullWidth
                                    size="large"
                                    type="submit"
                                    variant="contained"
                                    disabled={isSubmitting}
                            >
                                  Sign in
                            </Button>
                        </AnimateButton>
                    </Grid>
                    <Grid item xs={12}>
                        <Divider sx={{ my: 3 }} />
                    </Grid>
                    <Grid item xs={12}>
                        <FirebaseSocial />
                    </Grid>
                </Grid>
                </form>
            )}
        </Formik>
        <Grid container justifyContent="flex-end">
            <Grid item>

                  <Link href="#" variant="body2">

                          Don't have an account? Sign up
                    </Link>
            </Grid>
        </Grid>
    </>
    );
};

export default AuthLogin;