import EqualizerRoundedIcon from '@mui/icons-material/EqualizerRounded';
import NotificationsNoneTwoToneIcon from '@mui/icons-material/NotificationsNoneTwoTone';
import QueryBuilderRoundedIcon from '@mui/icons-material/QueryBuilderRounded';
import { Box, Checkbox, Grid, Stack, Typography, styled } from '@mui/material';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Cohort from '../../assets/images/Cohorts.webp';
import Loch from '../../assets/images/loch.png';
import Description from '../Description';
import SectionLayout from '../SectionLayout';
import TestimonialCard from '../TestimonialCard';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import NotificationCard from '../NotificationCard';
import { FormInput } from '../SignupSection';
const InfoSection = () => {
  return (
    <InfoSectionWrapper gap={'54px'}>
      <SectionLayout
        leftComponent={
          <Grid tem xs={12} md={4}>
            <Description
              title="Get notified when a highly correlated whale makes a move"
              description="Find out when a certain whale moves more than any preset amount on-chain or when a dormant whale you care about becomes active."
            />
          </Grid>
        }
        rightComponent={
          <Grid tem xs={12} md={6}>
            <Swiper
              slidesPerView={2}
              autoHeight={true}
              spaceBetween={10}
              freeMode={true}
              grabCursor={true}
              loop={true}
              className="mySwiper"
              style={{
                margin: 0,
                paddingRight: '10px',
              }}
            >
              <SwiperSlide>
                <NotificationCard
                  icon={<NotificationsNoneTwoToneIcon />}
                  actionItem={<Typography variant="label">Save</Typography>}
                  footerItem={
                    <>
                      <Typography variant="body">
                        We’ll be sending notifications to you here
                      </Typography>
                      <FormInput
                        style={{ padding: '8px 16px', fontSize: '12px' }}
                        value={'hello@gmail.com'}
                      />
                    </>
                  }
                />
              </SwiperSlide>
              <SwiperSlide>
                <NotificationCard
                  icon={<EqualizerRoundedIcon />}
                  actionItem={
                    <Checkbox
                      style={{ padding: 0, color: '#0071E3' }}
                      checked
                    />
                  }
                  footerItem={
                    <Stack gap={1}>
                      <Typography variant="subtitle">
                        Notify me when any wallets move more than
                      </Typography>
                      <Box
                        style={{
                          backgroundColor: 'rgba(229, 229, 230, 0.50)',
                          padding: '4px 16px',
                          borderRadius: '8px',
                          width: 'fit-content',
                        }}
                      >
                        <Typography variant="label">$ 1,000,00</Typography>
                      </Box>
                    </Stack>
                  }
                />
              </SwiperSlide>
              <SwiperSlide>
                <NotificationCard
                  icon={<QueryBuilderRoundedIcon />}
                  actionItem={
                    <Checkbox
                      style={{ padding: 0, color: '#0071E3' }}
                      checked
                    />
                  }
                  footerItem={
                    <Stack gap={1}>
                      <Typography variant="subtitle">
                        Notify me when any wallet dormant for
                      </Typography>
                      <Box
                        style={{
                          backgroundColor: 'rgba(229, 229, 230, 0.50)',
                          padding: '4px 16px',
                          borderRadius: '8px',
                          width: 'fit-content',
                        }}
                      >
                        <Typography variant="label">{'> 30 days'}</Typography>
                      </Box>
                      <Typography variant="subtitle">becomes active</Typography>
                    </Stack>
                  }
                />
              </SwiperSlide>
            </Swiper>
          </Grid>
        }
      />
      <SectionLayout
        leftComponent={
          <Grid tem xs={12} md={5}>
            <img src={Cohort} width={'85%'}></img>
          </Grid>
        }
        rightComponent={
          <Grid tem xs={12} md={5}>
            <Description
              align="right"
              title="Watch what the whales are doing"
              description="All whales are not equal. Know exactly what the whales impacting YOUR portfolio are doing."
            />
          </Grid>
        }
      />
      <Typography
        variant="h1"
        color={'white.main'}
        textAlign={'right'}
        style={{
          borderBottom: '1px solid rgba(229, 229, 230, 0.50)',
          paddingBottom: '8px',
          paddingRight: '24px',
          fontSize: '24px',
        }}
      >
        Testimonials
      </Typography>

      <SectionLayout
        leftComponent={
          <Grid item xs={12} md={2}>
            <img width={'60px'} style={{ marginTop: '40px' }} src={Loch}></img>
          </Grid>
        }
        rightComponent={
          <Grid tem xs={12} md={10}>
            <Swiper
              style={{ margin: 0, paddingRight: '18px' }}
              slidesPerView={2}
              autoHeight={true}
              spaceBetween={30}
              freeMode={true}
              grabCursor={true}
              className="mySwiper"
            >
              <SwiperSlide>
                <TestimonialCard
                  name="Jack F"
                  designation="Ex Blackrock PM"
                  testimonial="“Love how Loch integrates portfolio analytics and whale watching into one unified app.”"
                />
              </SwiperSlide>
              <SwiperSlide>
                <TestimonialCard
                  name="Yash P"
                  designation="Research, 3poch Crypto Hedge Fund"
                  testimonial="“I use Loch everyday now. I don't think I could analyze crypto whale trends markets without it. I'm addicted!”"
                />
              </SwiperSlide>
              <SwiperSlide>
                <TestimonialCard
                  name="Shiv S"
                  designation="Co-Founder Magik Labs"
                  testimonial="“Managing my own portfolio is helpful and well designed. What’s really interesting is watching the whales though. No one else has made whale tracking so simple.”"
                />
              </SwiperSlide>
            </Swiper>
          </Grid>
        }
      />
    </InfoSectionWrapper>
  );
};

const InfoSectionWrapper = styled(Stack)(({ theme }) => ({
  height: '-webkit-fill-available',
  padding: '48px 0 32px 48px',
  background:
    'radial-gradient(92.19% 89.74% at 20.27% 91.27%, rgba(31, 169, 17, 0.81) 17.21%, #2F15D0 64.58%, rgba(0, 0, 0, 0.00) 100%)',
  backgroundColor: '#19191a',

  '@media (max-width:768px)': {
    padding: '24px',
  },
}));

export default InfoSection;
