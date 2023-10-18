import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/auth/operations';
import { useAuth } from '../../hooks/useAuth';
import { useForm } from 'react-hook-form';
import { LoginBox, Input, SubmitButton } from './login.styled';
import { FormControl, InputAdornment } from '@mui/material';
import { Label, Container } from './login.styled';
import { IconButton } from '@mui/material';
import OnError from '../onError/onError';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const { error } = useAuth();
  const dispatch = useDispatch();
  
  const {
    register,
    handleSubmit,
    setError,
    clearErrors,
    formState: { errors },
  } = useForm({
    mode: 'onSubmit',
  });

  useEffect(() => {
    if (error?.status) {
      setError('email', { type: 'manual', message: error.message });
      setError('password', { type: 'manual', message: error.message });
    }
  }, [error, setError]);

  const handleClearError = () => {
    if (error?.status) {
      clearErrors('email');
      clearErrors('password');
    }
  };

  const handleLogin = data => {
    dispatch(logIn(data));
  };

  return (
    <Container>
      <LoginBox>
        <Label>Log In</Label>
        <FormControl
          sx={{ display: 'flex', p: 2, width: '100%' }}
          component="form"
          onSubmit={handleSubmit(data => handleLogin(data))}
          onChange={handleClearError}
        >
          <Input
            err={errors?.email}
            required
            label="Email"
            id="email"
            type="email"
            autoComplete="off"
            {...register('email', {
              required: 'required',
            })}
          />
          {errors?.email && (
            <OnError
              text={
                errors?.email?.message
                  ? errors.email.message
                  : 'Invalid email or password'
              }
            />
          )}
          <Input
            err={errors?.password}
            required
            id="password"
            {...register('password', {
              required: 'required',
            })}
            type={showPassword ? 'text' : 'password'}
            label="Password"
            autoComplete="true"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          {errors?.password && (
            <OnError
              text={
                errors?.password?.message
                  ? errors.password.message
                  : 'Invalid email or password'
              }
            />
          )}

          <SubmitButton type="submit" variant="contained">
            Log In
          </SubmitButton>
        </FormControl>
      </LoginBox>
    </Container>
  );
}
