import React from 'react';
import SignupSection from '../../components/SignupSection';
import { Grid, styled } from '@mui/material';
import InfoSection from '../../components/InfoSection';

const LandingPage = () => {
  return (
    <LandingPageWrapper container>
      <Grid item xs={12} sm={7} height={'100%'}>
        <InfoSection />
      </Grid>
      <Grid item xs={12} sm={5} height={'100%'}>
        <SignupSection />
      </Grid>
    </LandingPageWrapper>
  );
};

const LandingPageWrapper = styled(Grid)(({ theme }) => ({
  height: '100%',
}));

export default LandingPage;
