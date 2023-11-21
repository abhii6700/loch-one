import { Stack, Typography, styled } from '@mui/material';
import React from 'react';
import SectionLayout from '../SectionLayout';
import Description from '../Description';
import Cohort from '../../assets/images/Cohorts.webp';

const InfoSection = () => {
  return (
    <InfoSectionWrapper gap={'54px'}>
      <SectionLayout
        leftComponent={
          <Description
            style={{ width: '40%' }}
            title="Get notified when a highly correlated whale makes a move"
            description="Find out when a certain whale moves more than any preset amount on-chain or when a dormant whale you care about becomes active."
          />
        }
      />
      <SectionLayout
        leftComponent={<img src={Cohort} width={'40%'}></img>}
        rightComponent={
          <Description
            align="right"
            style={{ width: '35%' }}
            title="Watch what the whales are doing"
            description="All whales are not equal. Know exactly what the whales impacting YOUR portfolio are doing."
          />
        }
      />
      <Typography
        variant="h1"
        color={'white.main'}
        textAlign={'right'}
        style={{
          borderBottom: '1px solid rgba(229, 229, 230, 0.50)',
          paddingBottom: '8px',
        }}
      >
        Testimonials
      </Typography>
    </InfoSectionWrapper>
  );
};

const InfoSectionWrapper = styled(Stack)(({ theme }) => ({
  height: '-webkit-fill-available',
  padding: '48px 32px',
  background:
    'radial-gradient(92.19% 89.74% at 20.27% 91.27%, rgba(31, 169, 17, 0.81) 17.21%, #2F15D0 64.58%, rgba(0, 0, 0, 0.00) 100%)',
  backgroundColor: '#19191a',
}));

export default InfoSection;
