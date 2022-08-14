import {
  FormHelperText, Grid, MenuItem, Select,
} from '@mui/material';
import React from 'react';

function CustomSelectComponent(props: any) {
  const {
    value, handleChange, displayOptions, helpText,
  } = props;
  return (
    <Grid
      container
      direction="column"
      alignItems="stretch"
    >
      <Select
        value={value as any}
        size="small"
        onChange={handleChange}
        variant="standard"
      >
        {displayOptions.map((option:any) => (
          <MenuItem key={option} value={option}>{option}</MenuItem>
        ))}
      </Select>
      <FormHelperText>{helpText}</FormHelperText>
    </Grid>
  );
}

export default CustomSelectComponent;
