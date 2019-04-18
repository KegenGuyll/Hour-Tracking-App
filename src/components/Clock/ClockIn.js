import React, {useState} from 'react'
import { Button, Typography } from '@material-ui/core';
import moment from 'moment'

export const ClockIn = () => {
    let [clockIn, SetclockIn] = useState(null)

    const handleclockin = () => {
        SetclockIn(moment().format('h:mm:ss a'))
    }

    return(
        <div>
            <Typography>{clockIn}</Typography>
            <Button onClick={handleclockin} variant="contained" color="primary">Clockin</Button>
        </div>
    );
}