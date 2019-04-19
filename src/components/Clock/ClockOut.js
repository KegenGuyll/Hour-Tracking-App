import React, { useState } from 'react';
import { Button, Typography } from '@material-ui/core';
import moment from 'moment';

export const ClockOut = () => {
  let [clockOut, setClockOut] = useState(null);

  const handleclockin = () => {
    setClockOut(moment().format('h:mm:ss a'));
  };

  return (
    <div>
      <Typography>{clockOut}</Typography>
      <Button onClick={handleclockin} variant="contained" color="primary">
        ClockOut
      </Button>
    </div>
  );
};
