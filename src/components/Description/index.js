import { Stack, Typography } from '@mui/material';
import React from 'react';

const Description = ({
  icon = <>icon</>,
  title = 'title',
  description = 'description',
  style,
  align = 'left',
}) => {
  return (
    <Stack
      gap={2}
      style={{ ...style }}
      alignContent={align === 'left' ? 'flex-start' : 'flex-end'}
    >
      <Typography
        textAlign={align === 'left' ? 'left' : 'right'}
        variant="h1"
        color={'white.main'}
      >
        {title}
      </Typography>
      <Typography
        textAlign={align === 'left' ? 'left' : 'right'}
        variant="body"
        color={'#F2F2F2'}
      >
        {description}
      </Typography>
    </Stack>
  );
};

export default Description;
