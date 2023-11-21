import { Button, Stack, Typography, styled } from '@mui/material';
import React, { useRef } from 'react';
import toast from 'react-hot-toast';

const SignupSection = () => {
  const email = useRef();

  const validateEmail = () => {
    const trimEmail = email.current.value.trim();

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (trimEmail === '' || !emailPattern.test(trimEmail)) {
      toast.error('Please enter a valid email');
      return false;
    } else {
      return true;
    }
  };

  const handleClick = () => {
    if (!validateEmail()) {
      return;
    }

    window.location.href = 'https://app.loch.one/welcome';
  };

  return (
    <SignupSectionWrapper>
      <Stack style={{ width: window.innerWidth > 768 ? '50%' : '90%' }} gap={3}>
        <Typography variant="large" color={'grey'}>
          Sign up for exclusive access.
        </Typography>
        <FormInput ref={email} placeholder="Your email address" type="email" />
        <Button
          onClick={handleClick}
          variant="contained"
          style={{ background: 'black' }}
        >
          <Typography variant="body">Get Started</Typography>
        </Button>
        <Typography variant="subtitle" mx={'auto'}>
          You’ll receive an email with an invite link to join.
        </Typography>
      </Stack>
    </SignupSectionWrapper>
  );
};

const SignupSectionWrapper = styled('div')(({ theme }) => ({
  height: '100%',
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  boxShadow:
    '0px 14px 64px -4px rgba(24, 39, 75, 0.12), 0px 8px 22px -6px rgba(24, 39, 75, 0.12)',

  '@media (max-width:768px)': {
    height: '400px',
  },
}));

export const FormInput = styled('input')(({ theme }) => ({
  borderRadius: '8px',
  border: '1px solid #E5E5E6',
  boxShadow:
    '0px 1px 1px 0px rgba(0, 0, 0, 0.04), 0px 4px 10px 0px rgba(0, 0, 0, 0.04)',
  fontSize: '16px',
  padding: '14px 20px',
  outline: 'none',

  '&:focus': {
    border: `1px solid ${theme.palette.primary.main}`,
  },
}));

export default SignupSection;
