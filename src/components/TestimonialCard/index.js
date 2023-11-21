import { Paper, Stack, Typography } from '@mui/material';
import React from 'react';

const TestimonialCard = ({ name = '', designation = '', testimonial = '' }) => {
  return (
    <Paper
      style={{
        borderRadius: '12px',
        padding: '16px',
        height: '100px',
        width: 'fit-content',
      }}
    >
      <Stack gap={2} width={'100%'}>
        <Stack direction={'row'} alignItems={'center'} gap={1}>
          <Typography variant="body">{name}</Typography>
          <Typography variant="label" color={'tertiary.light'}>
            {designation}
          </Typography>
        </Stack>
        <Typography variant="subtitle">{testimonial}</Typography>
      </Stack>
    </Paper>
  );
};

export default TestimonialCard;
