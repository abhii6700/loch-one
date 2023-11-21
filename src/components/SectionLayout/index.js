import { Stack } from '@mui/material';
import React from 'react';

const SectionLayout = ({
  leftComponent = <div>Left Component</div>,
  rightComponent = <div>Right Component</div>,
}) => {
  return (
    <Stack
      direction={'row'}
      width={'100%'}
      justifyContent={'space-between'}
      alignItems={'center'}
    >
      {leftComponent}
      {rightComponent}
    </Stack>
  );
};

export default SectionLayout;
