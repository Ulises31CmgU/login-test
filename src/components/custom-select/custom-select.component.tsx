import {
  FormHelperText, Grid, MenuItem, Select,
} from '@mui/material';
import React from 'react';

function CustomSelectComponent(props: any) {
  const {
    value, handleChange, displayOptions, label, helpText,
  } = props;
  return (
    <Grid
      container
      direction="column"
      alignItems="stretch"
    >
      <Select
        value={value as any}
        label={label}
        size="small"
        onChange={handleChange}
      >
        {displayOptions.map((option:any) => (
          <MenuItem value={option}>{option}</MenuItem>
        ))}
      </Select>
      <FormHelperText>{helpText}</FormHelperText>
    </Grid>
  );
}
// Amount of users to display

export default CustomSelectComponent;
