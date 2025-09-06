import React from 'react';
import { Box, Container, Typography, Button, IconButton } from '@mui/material';
import TwitterIcon from '@mui/icons-material/Twitter';
import TelegramIcon from '@mui/icons-material/Telegram';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { SvgIcon } from '@mui/material';
import Logo from './Logo';

// --- Type Definition ---
type LandingPageProps = {
  onLaunch: () => void;
};

// --- Updated & Correct SVG Icons ---
const OfficialDiscordIcon = (props: any) => (
  <SvgIcon {...props} viewBox="0 0 24 24">
    <path fill="currentColor" d="M20.317 4.36981C18.7915 3.72559 17.1858 3.28494 15.524 3.00049C15.4194 3.26438 15.3379 3.55132 15.281 3.84711C13.7393 3.44304 12.1402 3.44304 10.5985 3.84711C10.5416 3.55132 10.4601 3.26438 10.3555 3.00049C8.69375 3.28494 7.08803 3.72559 5.5625 4.36981C2.32734 8.54633 1.18919 12.5786 1.01855 16.6C2.94477 17.6343 4.7901 18.3374 6.60203 18.7302C6.98509 17.9839 7.31112 17.199 7.57598 16.381C6.91891 16.1557 6.27344 15.8978 5.64417 15.6074C5.84155 15.4216 6.03347 15.2304 6.21992 15.0337C9.72973 16.9632 14.1481 16.9632 17.6579 15.0337C17.8443 15.2304 18.0363 15.4216 18.2336 15.6074C17.6044 15.8978 16.9589 16.1557 16.3018 16.381C16.5667 17.199 16.8927 17.9839 17.2758 18.7302C19.0877 18.3374 20.933 17.6343 22.8592 16.6C22.7169 12.5401 21.5787 8.50781 20.317 4.36981ZM8.0202 13.3321C7.31023 13.3321 6.72142 12.6953 6.72142 11.9443C6.72142 11.1932 7.31023 10.5564 8.0202 10.5564C8.73018 10.5564 9.31899 11.1932 9.31899 11.9443C9.31899 12.6953 8.73018 13.3321 8.0202 13.3321ZM15.8584 13.3321C15.1484 13.3321 14.5596 12.6953 14.5596 11.9443C14.5596 11.1932 15.1484 10.5564 15.8584 10.5564C16.5684 10.5564 17.1572 11.1932 17.1572 11.9443C17.1572 12.6953 16.5684 13.3321 15.8584 13.3321Z" />
  </SvgIcon>
);

const OfficialMediumIcon = (props: any) => (
  <SvgIcon {...props} viewBox="0 0 24 24">
    <path fill="currentColor" d="M7.45 2.684H4.218v18.632h3.232V2.684zM24 2.684H12.29v3.085h3.04V21.316h3.24V5.77h3.43V2.685zM.004 2.684v18.632h3.232V2.684H.004z" />
  </SvgIcon>
);


const LandingPage: React.FC<LandingPageProps> = ({ onLaunch }) => {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        position: 'relative', // Context for the top-right button
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        overflow: 'hidden', // Prevents button from causing scrollbars
      }}
    >
      {/* --- New Top-Right Launch Button --- */}
      <Box sx={{ position: 'absolute', top: 24, right: 24 }}>
        <Button
          variant="outlined"
          color="primary"
          onClick={onLaunch}
          endIcon={<ArrowForwardIcon />}
        >
          Launch App
        </Button>
      </Box>

      <Container maxWidth="md">
        {/* --- Logo and Title Section --- */}
        <Box sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          mb: 4 // Margin below the whole group
        }}>
          <Box mb={2}> {/* Reduced margin between logo and title */}
            <Logo width={180} />
          </Box>
          <Typography
            variant="h2"
            component="h1"
            sx={{ fontWeight: '900', color: 'text.primary' }}
          >
            Navigate Hyperliquid with{' '}
            <Typography component="span" variant="inherit" color="primary">
              Absolute Clarity
            </Typography>
          </Typography>
        </Box>

        <Typography
          variant="h5"
          color="text.secondary"
          sx={{ maxWidth: '700px', mx: 'auto', mb: 4 }}
        >
          HyperCompass is your real-time data map. Discover opportunities in Vaults, Markets, Staking, and more, all in one place, no wallet signature required.
        </Typography>

        {/* --- Main Center Button --- */}
        <Button
          variant="contained"
          color="primary"
          size="large"
          onClick={onLaunch}
          sx={{ py: 1.5, px: 5, fontSize: '1.1rem' }}
        >
          Explore Data
        </Button>
        
        {/* --- Social Icons Section --- */}
        <Box sx={{ mt: 8 }}>
          <IconButton href="#" target="_blank" aria-label="X (Twitter)" sx={{ color: 'text.secondary' }}><TwitterIcon /></IconButton>
          <IconButton href="#" target="_blank" aria-label="Discord" sx={{ color: 'text.secondary' }}><OfficialDiscordIcon /></IconButton>
          <IconButton href="#" target="_blank" aria-label="Telegram" sx={{ color: 'text.secondary' }}><TelegramIcon /></IconButton>
          <IconButton href="#" target="_blank"aria-label="Medium" sx={{ color: 'text.secondary' }}><OfficialMediumIcon /></IconButton>
        </Box>
      </Container>
    </Box>
  );
};

export default LandingPage;

