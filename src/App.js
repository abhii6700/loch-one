import './App.css';
import { ThemeProvider, createTheme, styled } from '@mui/material';
import LandingPage from './pages/LandingPage';
import { Toaster } from 'react-hot-toast';

const theme = createTheme({
  palette: {
    primary: {
      main: '#7053FF',
    },
    secondary: {
      main: '#A495FD',
    },
    tertiary: {
      main: '#323232',
      light: '#4A4A68',
    },
    danger: {
      main: '#E65E69',
    },
    white: {
      main: '#FFFFFF',
    },
    grey: {
      main: '#B0B1B3',
    },
  },
  typography: {
    button: {
      fontSize: '0.7rem',
      textTransform: 'capitalize',
    },
    fontSize: 14,
    fontFamily: ['Montserrat', 'Rubik', 'Open Sans', 'Inter'].join(','),
    extraLarge: {
      fontFamily: 'Rubik',
      fontSize: '80px',
      fontWeight: 700,
      '@media (max-width:768px)': {
        fontSize: '24px',
      },
    },
    large: {
      fontFamily: 'Inter',
      fontSize: '40px',
      fontWeight: 500,
      '@media (max-width:768px)': {
        fontSize: '24px',
      },
    },
    h1: {
      fontFamily: 'Inter',
      fontSize: '34px',
      lineHeight: '120%',
      fontWeight: 500,
      '@media (max-width:768px)': {
        fontSize: '24px',
      },
    },
    h2: {
      fontFamily: 'Montserrat',
      fontSize: '18px',
      fontWeight: 600,
    },
    body: {
      fontFamily: 'Inter',
      fontSize: '16px',
      fontWeight: 500,
    },
    subtitle: {
      fontFamily: 'Montserrat',
      fontSize: '12px',
      fontWeight: 400,
    },
    label: {
      fontFamily: 'Montserrat',
      fontSize: '13px',
      fontWeight: 600,
      '@media (max-width:1450px)': {
        fontSize: '11px',
      },
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AppContainer>
        <LandingPage />
      </AppContainer>
      <Toaster
        position="top-center"
        containerStyle={{
          fontFamily: 'Montserrat',
          fontSize: '16px',
          fontWeight: 600,
        }}
      />
    </ThemeProvider>
  );
}

const AppContainer = styled('div')(({ theme }) => ({
  height: '100vh',
}));

export default App;
