import React from 'react';
import { Modal, Box, Typography, useTheme, Alert } from '@mui/material';

interface NoMncModalProps {
  appName: string;
  open: boolean;
  onClose: () => void;
}

const NoMncModal: React.FC<NoMncModalProps> = ({ appName, open, onClose }) => {
  const theme = useTheme();

  const [isSafari, setIsSafari] = React.useState(false);
  React.useEffect(() => {
    if (typeof navigator === 'undefined') return;
    const ua = navigator.userAgent || '';
    // Detect Safari while excluding Chrome/Chromium/Edge/Opera/Firefox variants, including iOS variants.
    const isSafariCandidate = /Safari/i.test(ua) &&
      !/Chrome|Chromium|CriOS|Edg|EdgiOS|OPR|OPiOS|FxiOS|Firefox|SamsungBrowser/i.test(ua);
    setIsSafari( isSafariCandidate );
  }, []);

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.default',
    border: `2px solid ${theme.palette.mode === 'dark' ? '#fff' : '#000'}`,
    boxShadow: 24,
    p: 4,
    outlineWidth: 0,
  };

  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby='modal-modal-title'
      aria-describedby='modal-modal-description'
    >
      <Box sx={style}>
        <Typography id='modal-modal-title' variant='h6' component='h2'>
          {appName ? appName : 'This app'} requires the MetaNet Client
        </Typography>
        {isSafari && (
          <Alert severity='warning' sx={{ mt: 2 }}>
            For the best experience, please use Google Chrome or Firefox instead of Safari.
          </Alert>
        )}
        <Typography id='modal-modal-description' sx={{ mt: 2 }}>
          If you don't have it yet, it can be downloaded{' '}
          <a
            href='https://getmetanet.com/'
            target='_blank'
            rel='noopener noreferrer'
          >
            here
          </a>
          .
        </Typography>
      </Box>
    </Modal>
  );
};

export default NoMncModal
