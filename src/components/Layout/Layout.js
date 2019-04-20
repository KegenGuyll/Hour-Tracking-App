import { Grid } from '@material-ui/core';
import React from 'react';

export const Layout = props => (
  <Grid justify='center' container>
    {props.children}
  </Grid>
);
