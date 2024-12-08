import { forwardRef } from 'react';
import clsx from 'clsx';
import { styled } from '@mui/system';
import { useButton } from '@mui/base/useButton';
import Button from '@mui/material/Button';

const CustomButton = forwardRef(function CustomButton(props, ref) {
  const { children } = props;
  const { active, focusVisible, getRootProps } = useButton({
    ...props,
    rootRef: ref,
  });

  return (
    <CustomButtonRoot
      {...getRootProps()}
      {...props}
      className={clsx({
        active,
        focusVisible,
      })}
      sx={theme => ({
        fontSize: {
          xs: 13,
          md: 14,
          lg: 15,
        },
        backgroundColor: 'transparent',
        border:
          theme.palette.mode !== 'dark'
            ? '1px solid white'
            : `1px solid ${theme.palette.primary.dark}`,
        outline: 'transparent',
      })}
    >
      {children}
    </CustomButtonRoot>
  );
});

const CustomButtonRoot = styled(Button)(
  ({ theme }) => `
  // font-family: 'IBM Plex Sans', sans-serif;
  font-weight: 500;
  font-size: 0.875rem;
  line-height: 1.5;
  background-color: ${theme.palette.primary.main};
  padding: 0px;
  border-radius: 8px;
  color: white;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, 
  box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, 
  border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, 
  color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  cursor: pointer;
  // border: 1px solid ${blue[500]};
  box-shadow: 0 2px 1px ${
    theme.palette.mode === 'dark'
      ? 'rgba(0, 0, 0, 0.5)'
      : 'rgba(45, 45, 60, 0.2)'
  }, inset 0 1.5px 1px ${blue[400]}, inset 0 -2px 1px ${blue[600]};
  

  &:hover {
    background-color: ${theme.palette.primary.dark};
  }

  &.active {
    background-color: '#032C39',;
    box-shadow: none;
    transform: scale(0.99);
  }

  &.focusVisible {
    box-shadow: 0 0 0 4px ${
      theme.palette.mode === 'dark' ? '#0CBAF2' : '#31C5F5'
    };
   
  }

  &.disabled {
    background-color: ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
    color: ${theme.palette.mode === 'dark' ? grey[200] : grey[700]};
    border: 0;
    cursor: default;
    box-shadow: none;
    transform: scale(1);
  }
`
);

const blue = {
  200: '#17c4fe',
  300: '#0db3ea',
  400: '#0a9ccd',
  500: '#087EA4',
  600: '#066989',
  700: '#054f68',
};

const grey = {
  50: '#F3F6F9',
  100: '#E5EAF2',
  200: '#DAE2ED',
  300: '#C7D0DD',
  400: '#B0B8C4',
  500: '#9DA8B7',
  600: '#6B7A90',
  700: '#434D5B',
  800: '#303740',
  900: '#1C2025',
};

export default CustomButton;
