import React from 'react'
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

export default function Homepage(props) {
  return <Grid container>
    <Paper>
      <Typography variant="title" color ="inherit">
          Click on the Client List in the nav bar to know more about your clients.
  
      </Typography>
    </Paper>
  </Grid>
}