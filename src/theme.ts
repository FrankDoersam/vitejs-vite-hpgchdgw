import { extendTheme } from '@mui/joy/styles';

export const theme = extendTheme({
  colorSchemes: {
    light: {
      palette: {
        primary: {
          50: '#e8f0fe',
          100: '#d2e3fc',
          200: '#aecbfa',
          300: '#8ab4f8',
          400: '#669df6',
          500: '#4285F4', // Google Blue
          600: '#1a73e8',
          700: '#1967d2',
          800: '#185abc',
          900: '#174ea6',
        },
      },
    },
  },
  fontFamily: {
    body: 'Inter, Roboto, sans-serif',
    display: 'Inter, Roboto, sans-serif',
  },
  components: {
    JoyTab: {
      styleOverrides: {
        root: ({ theme }) => ({
          borderRadius: 0,
          fontWeight: 500,
          fontSize: '0.875rem',
          minHeight: 40,
          paddingInline: 16,
          color: theme.vars.palette.text.secondary,
          '&:hover': {
            backgroundColor: theme.vars.palette.primary[50],
          },
          "&[aria-selected='true']": {
            color: theme.vars.palette.primary[600],
            backgroundColor: 'transparent',
          },
        }),
      },
    },
    JoyTabList: {
      styleOverrides: {
        root: ({ theme }) => ({
          borderBottom: `1px solid ${theme.vars.palette.divider}`,
          '--Tabs-indicatorThickness': '2px',
          '--Tabs-indicatorColor': theme.vars.palette.primary[600],
        }),
      },
    },
  },
});
