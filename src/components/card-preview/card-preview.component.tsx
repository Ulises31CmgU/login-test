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
      justifyContent="space-between"
      alignItems="center"
      spacing={1}
    >
      {data.map((item: any) => (
        <Grid item key={item.id}>
          <CardComponent item={item} />
        </Grid>
      ))}
    </Grid>
  );
}

export default CardPreviewComponent;
