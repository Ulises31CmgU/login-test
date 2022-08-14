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
      maxWidth="400px"
      direction="row"
      justifyContent="center"
      alignItems="center"
    >
      <Grid
        xs={2}
        item
      >
        <Avatar
          src={avatar}
          sx={{ width: 60, height: 60 }}
        />
      </Grid>
      <Grid
        xs={10}
        item
        container
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
