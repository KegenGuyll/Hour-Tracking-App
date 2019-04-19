import React from 'react';
import { CurrentTime } from '../Time/CurrentTime';
import { Login } from '../Login';

export const Home = () => (
  <div>
    <CurrentTime />
    <Login />
  </div>
);
