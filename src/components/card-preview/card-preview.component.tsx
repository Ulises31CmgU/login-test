import { Grid } from '@mui/material';
import React from 'react';
// eslint-disable-next-line import/no-unresolved
import { CardComponent } from '..';

export function CardPreviewComponent(props: any) {
  const { data } = props;

  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      spacing={2}
    >
      {data.map((item: any) => (
        <CardComponent key={item.id} item={item} />
      ))}
    </Grid>
  );
}

export default CardPreviewComponent;
