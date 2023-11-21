import { Grid, Stack } from '@mui/material';
import React from 'react';

const SectionLayout = ({
  leftComponent = <div>Left Component</div>,
  rightComponent = <div>Right Component</div>,
  styles,
}) => {
  return (
    <Grid
      container
      gap={{ xs: 6, sm: 0 }}
      style={{ ...styles }}
      width={'100%'}
      justifyContent={'space-between'}
      alignItems={'center'}
    >
      {leftComponent}

      {rightComponent}
    </Grid>
  );
};

export default SectionLayout;
