import { extendTheme } from '@mui/joy/styles';

const adminTheme = extendTheme({
  colorSchemes: {
    light: {
      palette: {
        primary: {
          // Ein professionelles Blau (Mischung aus Google & Shopify)
          50: '#f0f7ff',
          100: '#e0effe',
          200: '#bae0fd',
          300: '#7cc4fa',
          400: '#47a3f6',
          500: '#1a73e8', // Google Primary Blue
          600: '#155db1',
          700: '#10468a',
          800: '#0c3565',
          900: '#072242',
        },
        neutral: {
          // Shopify-artige Grautöne für Hintergründe und Rahmen
          50: '#F6F6F7', // Hintergrund für Page Body
          100: '#EDEEEF',
          200: '#E1E3E5', // Standard Border Color
          300: '#BABFC3',
          400: '#8C9196',
          500: '#5C5F62',
          600: '#454749',
          700: '#202223',
          800: '#111213',
          900: '#000000',
        },
        background: {
          body: 'var(--joy-palette-neutral-50)',
          surface: '#FFFFFF',
        },
      },
    },
  },
  fontFamily: {
    // Inter ist der Standard für moderne Admin-Interfaces (ähnlich wie Shopify)
    body: '"Inter", var(--joy-fontFamily-fallback)',
    display: '"Inter", var(--joy-fontFamily-fallback)',
  },
  components: {
    JoyButton: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          fontWeight: 500,
          borderRadius: '6px', // Shopify Style
          ...(ownerState.variant === 'solid' && {
            boxShadow: '0 1px 0 rgba(0, 0, 0, 0.05)',
          }),
        }),
      },
    },
    JoyInput: {
      styleOverrides: {
        root: {
          borderRadius: '6px',
          boxShadow: 'none',
          '&:focus-within': {
            ring: '2px solid var(--joy-palette-primary-200)',
          },
        },
      },
    },
    JoyTabs: {
      styleOverrides: {
        root: {
          backgroundColor: 'transparent',
        },
      },
    },
    JoyTabList: {
      styleOverrides: {
        root: {
          backgroundColor: 'transparent',
          gap: '24px',
          padding: 0,
          '&:before': {
            display: 'none', // Entfernt den Standard-Unterstrich von Joy
          },
        },
      },
    },
    JoyTab: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          padding: '12px 4px',
          fontWeight: 500,
          fontSize: '0.875rem',
          color: 'var(--joy-palette-neutral-500)',
          backgroundColor: 'transparent',
          transition: 'color 0.2s ease',
          '&:hover': {
            backgroundColor: 'transparent',
            color: 'var(--joy-palette-neutral-700)',
          },
          [`&.Mui-selected`]: {
            color: 'var(--joy-palette-primary-500)',
            backgroundColor: 'transparent',
            '&:after': {
              content: '""',
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              height: '2px',
              backgroundColor: 'var(--joy-palette-primary-500)',
            },
          },
        }),
      },
    },
  },
});

export default adminTheme;