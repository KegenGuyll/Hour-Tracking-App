import React, { useState, useEffect } from 'react';
import { Typography } from '@material-ui/core';
import moment from 'moment';

export const CurrentTime = () => {
  let [time, setTime] = useState(moment().format('h:mm:ss a'));

  useEffect(() => {
    const IntervalTime = setInterval(() => {
      setTime((time = moment().format('h:mm:ss a')));
    }, 1000);

    return () => {
      clearInterval(IntervalTime);
    };
  }, []);

  return (
    <div>
      <Typography style={{ padding: '5vh' }} variant='headline'>
        {time}
      </Typography>
    </div>
  );
};
