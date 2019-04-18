import { Grid } from '@material-ui/core';
import React from 'react';

export const Layout = props => (
  <Grid container justify='center' alignContent='center'>
    {props.children}
  </Grid>
);
