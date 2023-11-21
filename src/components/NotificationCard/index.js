import React from 'react';
import { Paper, Stack, Typography, styled } from '@mui/material';

const NotificationCard = ({
  icon = <></>,
  actionItem = <></>,
  footerItem = <></>,
}) => {
  return (
    <NotificationCardWrapper>
      <Stack
        gap={1}
        width={'100%'}
        height={'100%'}
        justifyContent={'space-between'}
      >
        <Stack
          direction={'row'}
          alignItems={'center'}
          justifyContent={'space-between'}
          gap={1}
        >
          {icon}
          {actionItem}
        </Stack>
        {footerItem}
      </Stack>
    </NotificationCardWrapper>
  );
};

const NotificationCardWrapper = styled(Paper)(({ theme }) => ({
  borderRadius: '12px',
  padding: '16px',
  height: '160px',
  width: '160px',

  '@media (max-width:768px)': {
    height: '120px',
    width: '120px',
  },
}));

export default NotificationCard;
