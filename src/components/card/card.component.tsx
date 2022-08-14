/* eslint-disable camelcase */
import { Avatar, Grid, Typography } from '@mui/material';
import React from 'react';

function CardComponent({ item }:{item:any}) {
  const {
    email, first_name, last_name, avatar,
  } = item;

  return (
    <Grid
      container
      minWidth="300px"
      direction="row"
      justifyContent="flex-start"
      alignItems="center"
    >
      <Grid
        width="30%"
        item
      >
        <Avatar
          src={avatar}
          sx={{ width: 60, height: 60 }}
        />
      </Grid>
      <Grid
        item
        container
        width="70%"
        direction="column"
        alignItems="flex-start"
      >
        <Typography variant="h6">
          {`${first_name} ${last_name}`}
        </Typography>
        <Typography variant="body2">
          {email}
        </Typography>
      </Grid>
    </Grid>
  );
}

export default CardComponent;
