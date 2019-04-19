import { Grid } from '@material-ui/core';
import React from 'react';

export const Layout = props => (
  <Grid container spacing={24}>
    <Grid item xs={12}>
      {props.children}
    </Grid>
  </Grid>
);
