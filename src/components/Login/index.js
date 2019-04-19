import React, { useState } from 'react';
import {
  Input,
  InputAdornment,
  IconButton,
  InputLabel,
  FormControl
} from '@material-ui/core';
import { Visibility, VisibilityOff } from '@material-ui/icons';

export const Login = () => {
  let [email, setEmail] = useState('');
  let [password, setPassword] = useState('');
  let [showPassword, setShowPassword] = useState(false);

  const handleEmail = event => {
    setEmail((email = event.target.value));
  };

  const handlePassword = event => {
    setPassword((password = event.target.value));
  };

  const ShowPassword = () => {
    setShowPassword((showPassword = !showPassword));
  };

  return (
    <div>
      <FormControl>
        <InputLabel htmlFor="email">Email</InputLabel>
        <Input
          id="email"
          value={email}
          label="Email"
          type="email"
          onChange={handleEmail}
        />
      </FormControl>
      <br />
      <FormControl>
        <InputLabel htmlFor="adornment-password">Password</InputLabel>
        <Input
          id="adornment-password"
          value={password}
          type={showPassword ? 'text' : 'password'}
          onChange={handlePassword}
          endAdornment={
            <InputAdornment>
              <IconButton
                aria-label="Toggle password visibility"
                onClick={ShowPassword}
              >
                {showPassword ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            </InputAdornment>
          }
        />
      </FormControl>
    </div>
  );
};
