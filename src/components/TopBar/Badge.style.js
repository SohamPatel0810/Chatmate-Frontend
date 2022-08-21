import { styled } from '@mui/material/styles';

import {Badge,Box} from '@mui/material';

export const StyledBadge = styled(Badge)(({ theme }) => ({
    ' .MuiBadge-badge': {
      position: 'relative',
      backgroundColor: '#44b700',
      color: '#44b700',
      marginTop: '30px',
      marginLeft: '-2px',
      boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
      '&::after': {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        borderRadius: '50%',
        animation: 'ripple 1.2s infinite ease-in-out',
        border: '1px solid currentColor',
        content: '""',
      },
    },
    '@keyframes ripple': {
      '0%': {
        transform: 'scale(.8)',
        opacity: 1,
      },
      '100%': {
        transform: 'scale(2.4)',
        opacity: 0,
      },
    },
  }));

  export const StyledBox = styled(Box)(({theme}) => ({
    position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 300,
        backgroundColor: '#FFFFFF',
        boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
        borderRadius:'20px',
        padding: 15,
  }));