import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  typography: {
    fontFamily: [
      'Open Sans',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
  palette: {
    primary: {
      main: '#213555',
      light: '#4F709C',
      subsidiary: '#0a9396',
      w: '#94d2bd',
      info: '#E5D283',
      accent: '#ee9b00',
      hot: '#F46145',
      dim: '#f5f6fa',
      text: '#221f1f',
      neutral: '#F0F0F0',
      badge: '#939393',
      iconbtn: '#ffffff33',
    },
  },
  components: {
    MuiTextField: {
      styleOverrides: {
        root: ({ theme }) => ({
          '.MuiInputBase-input.MuiOutlinedInput-input': {
            color: theme.palette.primary.text,
          },
          '.MuiOutlinedInput-notchedOutline': {
            borderColor: theme.palette.primary.light,
          },

          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: theme.palette.primary.light,
          },
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: theme.palette.primary.light,
          },
        }),
      },
    },

    MuiOutlinedInput: {
      styleOverrides: {
        root: ({ theme }) => ({
          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: theme.palette.primary.light,
          },
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: theme.palette.primary.light,
          },
          '&.MuiOutlinedInput': {
            zIndex: 2,
          },
        }),
      },
    },

    MuiInputLabel: {
      styleOverrides: {
        root: ({ theme }) => ({
          color: theme.palette.primary.text,
        }),

        shrink: ({ theme }) => ({
          color: `${theme.palette.primary.text} !important`,
        }),
      },
    },

    MuiSelect: {
      styleOverrides: {
        select: ({ theme }) => ({
          color: `${theme.palette.primary.dim} !important`,
        }),
        root: ({ theme }) => ({
          '.MuiOutlinedInput-notchedOutline': {
            borderColor: theme.palette.primary.dim,
          },
          '&:hover': {
            '.MuiSvgIcon-root ': {
              fill: theme.palette.primary.accent,
              transform: 'scale(1.1)',
            },
          },
          '&:hover .MuiOutlinedInput-notchedOutline ': {
            borderColor: theme.palette.primary.light,
          },
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: theme.palette.primary.light,
          },
        }),
        icon: ({ theme }) => ({
          fill: theme.palette.primary.dim,
        }),
      },
    },

    MuiMenuItem: {
      styleOverrides: {
        root: ({ theme }) => ({
          '&:hover': {
            backgroundColor: theme.palette.primary.dim,
          },
          '&:active': {
            backgroundColor: theme.palette.primary.light,
          },
          '&.MuiMenuItem-root.Mui-selected': {
            backgroundColor: theme.palette.primary.light,
          },
        }),
      },
    },

    MuiCheckbox: {
      styleOverrides: {
        root: ({ theme }) => ({
          color: theme.palette.primary.light,
          '&.Mui-checked': {
            '& svg': {
              color: theme.palette.primary.light,
            },
          },
        }),
      },
    },

    MuiPagination: {
      styleOverrides: {
        root: ({ theme }) => ({
          ul: {
            '& .MuiPaginationItem-root.Mui-selected': {
              backgroundColor: theme.palette.primary.light,
              color: '#fff',
            },
            '& svg': {
              color: theme.palette.primary.light,
            },
          },
        }),
      },
    },

    MuiSpeedDial: {
      styleOverrides: {
        root: ({ theme }) => ({
          '& .MuiFab-primary': {
            width: 46,
            height: 46,
            backgroundColor: theme.palette.primary.light,
          },
        }),
      },
    },

    MuiTypography: {
      styleOverrides: {
        root: ({ theme }) => ({
          color: theme.palette.primary.text,
        }),
        paragraph: ({ theme }) => ({
          color: theme.palette.primary.text,
        }),
        h1: ({ theme }) => ({
          color: theme.palette.primary.text,
        }),
        h2: ({ theme }) => ({
          color: theme.palette.primary.text,
        }),
        h3: ({ theme }) => ({
          color: theme.palette.primary.text,
        }),
        h4: ({ theme }) => ({
          color: theme.palette.primary.text,
        }),
        h5: ({ theme }) => ({
          color: theme.palette.primary.text,
        }),
        h6: ({ theme }) => ({
          color: theme.palette.primary.text,
        }),
      },
    },

    MuiTab: {
      styleOverrides: {
        root: ({ theme }) => ({
          '&.Mui-selected': {
            backgroundColor: theme.palette.primary.dim,
            color: theme.palette.primary.light,
          },
        }),
      },
    },

    MuiIconButton: {
      styleOverrides: {
        root: ({ theme }) => ({
          '&:hover': {
            backgroundColor: theme.palette.primary.iconbtn,
          },
        }),
      },
    },
    MuiButton: {
      styleOverrides: {
        root: ({ theme }) => ({
          '&:hover': {
            color: theme.palette.primary.accent,
          },
        }),
      },
    },
  },
});
