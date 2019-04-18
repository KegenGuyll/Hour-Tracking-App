import React from 'react';
import { CurrentTime } from '../Time/CurrentTime';
import {ClockIn} from '../Clock/ClockIn'

export const Home = () => (
  <div>
    <CurrentTime />
    <ClockIn/>
  </div>
);
