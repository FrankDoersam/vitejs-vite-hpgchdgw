import { extendTheme } from '@mui/joy/styles';

/**
 * Enterprise SaaS Theme – Hausverwaltung
 *
 * Inspired by SAP Fiori Horizon, Salesforce Lightning, and modern
 * property-management tools. The palette anchors on a calm teal-blue
 * primary with warm neutrals for backgrounds and a controlled set of
 * semantic colors for status feedback.
 *
 * Color budget: 5 colors
 *   1. Primary  – #0A6ED1  (Fiori-blue, trust & professionalism)
 *   2. Neutral  – #354A5F  (shell text, headings)
 *   3. Surface  – #F5F6F7  (page canvas, cards)
 *   4. Success  – #107E3E  (positive status)
 *   5. Danger   – #BB0000  (critical / destructive)
 */

const theme = extendTheme({
  // ─────────────────────────────────────────────
  //  COLOR PALETTE
  // ─────────────────────────────────────────────
  colorSchemes: {
    light: {
      palette: {
        // ── Primary (Fiori Blue) ──
        primary: {
          50: '#E5F0FA',
          100: '#BDD8F2',
          200: '#91BDE9',
          300: '#64A2E0',
          400: '#428DD9',
          500: '#0A6ED1',
          600: '#0854A0',
          700: '#074078',
          800: '#052D54',
          900: '#031B33',
          solidBg: '#0A6ED1',
          solidHoverBg: '#0854A0',
          solidActiveBg: '#074078',
          softBg: '#E5F0FA',
          softColor: '#0854A0',
          softHoverBg: '#BDD8F2',
          softActiveColor: '#074078',
          outlinedBorder: '#91BDE9',
          outlinedColor: '#0854A0',
          outlinedHoverBg: '#E5F0FA',
          plainColor: '#0A6ED1',
          plainHoverBg: '#E5F0FA',
        },

        // ── Neutral (Shell / Text) ──
        neutral: {
          50: '#F5F6F7',
          100: '#EAECEE',
          200: '#D9DCDF',
          300: '#C4C8CC',
          400: '#89919A',
          500: '#687078',
          600: '#54606B',
          700: '#354A5F',
          800: '#223548',
          900: '#12222F',
          solidBg: '#354A5F',
          solidHoverBg: '#223548',
          solidActiveBg: '#12222F',
          outlinedBorder: '#D9DCDF',
          plainColor: '#354A5F',
          plainHoverBg: '#F5F6F7',
        },

        // ── Success ──
        success: {
          50: '#E6F4EC',
          100: '#B8E0C8',
          200: '#8ACDA5',
          300: '#5CBA82',
          400: '#2DAA68',
          500: '#107E3E',
          600: '#0D6432',
          700: '#094B25',
          800: '#063219',
          900: '#03190C',
          solidBg: '#107E3E',
          solidHoverBg: '#0D6432',
          softBg: '#E6F4EC',
          softColor: '#0D6432',
          softHoverBg: '#B8E0C8',
        },

        // ── Danger ──
        danger: {
          50: '#FFEAF4',
          100: '#FFD5DE',
          200: '#FFADBD',
          300: '#FF8598',
          400: '#E5404A',
          500: '#BB0000',
          600: '#960000',
          700: '#710000',
          800: '#4C0000',
          900: '#280000',
          solidBg: '#BB0000',
          solidHoverBg: '#960000',
          solidActiveBg: '#710000',
          softBg: '#FFEAF4',
          softColor: '#960000',
          softHoverBg: '#FFD5DE',
        },

        // ── Warning ──
        warning: {
          50: '#FFF8E1',
          100: '#FFECB3',
          200: '#FFE082',
          300: '#FFD54F',
          400: '#FFCA28',
          500: '#E9730C',
          600: '#C65E00',
          700: '#A44E00',
          800: '#7A3A00',
          900: '#502600',
          solidBg: '#E9730C',
          solidHoverBg: '#C65E00',
          softBg: '#FFF8E1',
          softColor: '#C65E00',
          softHoverBg: '#FFECB3',
        },

        // ── Background / Surface ──
        background: {
          body: '#F5F6F7',
          surface: '#FFFFFF',
          popup: '#FFFFFF',
          level1: '#EAECEE',
          level2: '#D9DCDF',
          level3: '#C4C8CC',
        },

        // ── Text ──
        text: {
          primary: '#223548',
          secondary: '#54606B',
          tertiary: '#89919A',
          icon: '#687078',
        },

        // ── Divider ──
        divider: '#D9DCDF',

        // ── Focus ring ──
        focusVisible: '#0A6ED1',
      },
    },
  },

  // ─────────────────────────────────────────────
  //  TYPOGRAPHY
  // ─────────────────────────────────────────────
  fontFamily: {
    body: '"72", "72full", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
    display:
      '"72", "72full", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
    code: '"Fira Code", "Fira Mono", "JetBrains Mono", Menlo, Consolas, monospace',
  },
  fontSize: {
    xs: '0.75rem',   // 12 px
    sm: '0.8125rem', // 13 px
    md: '0.875rem',  // 14 px  – Fiori base
    lg: '1rem',      // 16 px
    xl: '1.125rem',  // 18 px
    xl2: '1.375rem', // 22 px
    xl3: '1.75rem',  // 28 px
    xl4: '2.25rem',  // 36 px
  },
  fontWeight: {
    sm: 400,
    md: 500,
    lg: 600,
    xl: 700,
  },
  lineHeight: {
    xs: '1rem',
    sm: '1.25rem',
    md: '1.5rem',
    lg: '1.75rem',
    xl: '2rem',
  },
  letterSpacing: {
    sm: '-0.01em',
    md: '0em',
    lg: '0.025em',
  },

  // ─────────────────────────────────────────────
  //  RADIUS
  // ─────────────────────────────────────────────
  radius: {
    xs: '4px',
    sm: '6px',
    md: '8px',
    lg: '12px',
    xl: '16px',
  },

  // ─────────────────────────────────────────────
  //  SHADOW
  // ─────────────────────────────────────────────
  shadow: {
    xs: '0 1px 2px 0 rgba(0,0,0,0.04)',
    sm: '0 1px 3px 0 rgba(0,0,0,0.06), 0 1px 2px -1px rgba(0,0,0,0.04)',
    md: '0 4px 6px -1px rgba(0,0,0,0.06), 0 2px 4px -2px rgba(0,0,0,0.04)',
    lg: '0 10px 15px -3px rgba(0,0,0,0.06), 0 4px 6px -4px rgba(0,0,0,0.04)',
    xl: '0 20px 25px -5px rgba(0,0,0,0.06), 0 8px 10px -6px rgba(0,0,0,0.04)',
  },

  // ─────────────────────────────────────────────
  //  Z-INDEX
  // ─────────────────────────────────────────────
  zIndex: {
    badge: 1,
    table: 10,
    popup: 1000,
    modal: 1300,
    snackbar: 1400,
    tooltip: 1500,
  },

  // ─────────────────────────────────────────────
  //  COMPONENT OVERRIDES
  // ─────────────────────────────────────────────
  components: {
    // ── Button ──────────────────────────────
    JoyButton: {
      styleOverrides: {
        root: ({ theme: t }) => ({
          fontWeight: 600,
          letterSpacing: '0.015em',
          borderRadius: t.radius.sm,
          textTransform: 'none' as const,
          transition: 'all 150ms cubic-bezier(0.4,0,0.2,1)',
          boxShadow: 'none',
          '&:hover': {
            boxShadow: 'none',
          },
        }),
      },
      defaultProps: {
        size: 'sm',
      },
    },

    // ── Input ───────────────────────────────
    JoyInput: {
      styleOverrides: {
        root: ({ theme: t }) => ({
          borderRadius: t.radius.sm,
          '--Input-focusedThickness': '2px',
          '--Input-focusedHighlight': t.vars.palette.primary[500],
          backgroundColor: t.vars.palette.background.surface,
          border: `1px solid ${t.vars.palette.neutral[200]}`,
          transition: 'border-color 150ms ease, box-shadow 150ms ease',
          '&:hover:not(.Mui-focused)': {
            borderColor: t.vars.palette.neutral[400],
          },
        }),
      },
      defaultProps: {
        size: 'sm',
      },
    },

    // ── Sheet ───────────────────────────────
    JoySheet: {
      styleOverrides: {
        root: ({ theme: t }) => ({
          backgroundColor: t.vars.palette.background.surface,
          borderRadius: t.radius.md,
          border: `1px solid ${t.vars.palette.divider}`,
        }),
      },
    },

    // ── Tabs ────────────────────────────────
    JoyTabs: {
      styleOverrides: {
        root: ({ theme: t }) => ({
          backgroundColor: t.vars.palette.background.surface,
          borderRadius: t.radius.md,
        }),
      },
    },

    JoyTabList: {
      styleOverrides: {
        root: ({ theme: t }) => ({
          backgroundColor: 'transparent',
          borderBottom: `1px solid ${t.vars.palette.divider}`,
          gap: 0,
          padding: '0 16px',
          '--ListItem-radius': '0px',
          '--List-gap': '0px',
        }),
      },
    },

    JoyTab: {
      styleOverrides: {
        root: ({ theme: t }) => ({
          fontWeight: 500,
          fontSize: t.fontSize.sm,
          color: t.vars.palette.text.secondary,
          padding: '10px 16px',
          borderRadius: 0,
          position: 'relative' as const,
          transition: 'color 150ms ease',
          '&::after': {
            content: '""',
            position: 'absolute' as const,
            bottom: '-1px',
            left: 0,
            right: 0,
            height: '2px',
            backgroundColor: 'transparent',
            borderRadius: '2px 2px 0 0',
            transition: 'background-color 150ms ease',
          },
          '&:hover': {
            color: t.vars.palette.text.primary,
            backgroundColor: 'transparent',
          },
          '&.Mui-selected': {
            color: t.vars.palette.primary[500],
            fontWeight: 600,
            backgroundColor: 'transparent',
            '&::after': {
              backgroundColor: t.vars.palette.primary[500],
            },
          },
        }),
      },
    },

    // ── Breadcrumbs ─────────────────────────
    JoyBreadcrumbs: {
      styleOverrides: {
        root: ({ theme: t }) => ({
          fontSize: t.fontSize.sm,
          padding: 0,
          '--Breadcrumbs-gap': '4px',
        }),
      },
    },

    // ── Link ────────────────────────────────
    JoyLink: {
      styleOverrides: {
        root: ({ theme: t }) => ({
          fontWeight: 500,
          textDecorationColor: 'transparent',
          transition: 'color 150ms ease, text-decoration-color 150ms ease',
          '&:hover': {
            textDecorationColor: t.vars.palette.primary[500],
          },
        }),
      },
    },

    // ── Typography ──────────────────────────
    JoyTypography: {
      styleOverrides: {
        root: {
          // tighter tracking for headings
          '&[data-level="h1"], &[data-level="h2"], &[data-level="h3"]': {
            letterSpacing: '-0.01em',
          },
        },
      },
    },

    // ── Modal ───────────────────────────────
    JoyModalDialog: {
      styleOverrides: {
        root: ({ theme: t }) => ({
          borderRadius: t.radius.lg,
          boxShadow: t.shadow.xl,
          border: `1px solid ${t.vars.palette.divider}`,
          padding: '24px',
        }),
      },
    },

    // ── Chip ────────────────────────────────
    JoyChip: {
      styleOverrides: {
        root: ({ theme: t }) => ({
          borderRadius: t.radius.xs,
          fontWeight: 600,
          letterSpacing: '0.01em',
        }),
      },
    },

    // ── Table ───────────────────────────────
    JoyTable: {
      styleOverrides: {
        root: ({ theme: t }) => ({
          '--TableCell-headBackground': t.vars.palette.background.level1,
          '--TableCell-selectedBackground': t.vars.palette.primary.softBg,
          '& thead th': {
            fontWeight: 600,
            fontSize: t.fontSize.xs,
            textTransform: 'uppercase' as const,
            letterSpacing: '0.06em',
            color: t.vars.palette.text.secondary,
            borderBottom: `2px solid ${t.vars.palette.divider}`,
            padding: '10px 16px',
          },
          '& tbody td': {
            fontSize: t.fontSize.sm,
            padding: '12px 16px',
            borderBottom: `1px solid ${t.vars.palette.neutral[100]}`,
          },
          '& tbody tr:last-of-type td': {
            borderBottom: 'none',
          },
          '& tbody tr:hover': {
            backgroundColor: t.vars.palette.neutral[50],
          },
        }),
      },
    },

    // ── Divider ─────────────────────────────
    JoyDivider: {
      styleOverrides: {
        root: ({ theme: t }) => ({
          backgroundColor: t.vars.palette.divider,
        }),
      },
    },

    // ── Avatar ──────────────────────────────
    JoyAvatar: {
      styleOverrides: {
        root: ({ theme: t }) => ({
          fontWeight: 600,
          fontSize: t.fontSize.xs,
          border: `2px solid ${t.vars.palette.background.surface}`,
          boxShadow: t.shadow.xs,
        }),
      },
    },

    // ── Card ────────────────────────────────
    JoyCard: {
      styleOverrides: {
        root: ({ theme: t }) => ({
          borderRadius: t.radius.md,
          boxShadow: t.shadow.sm,
          border: `1px solid ${t.vars.palette.divider}`,
          backgroundColor: t.vars.palette.background.surface,
          '--Card-padding': '20px',
          transition: 'box-shadow 200ms ease, border-color 200ms ease',
          '&:hover': {
            boxShadow: t.shadow.md,
          },
        }),
      },
    },

    // ── Tooltip ─────────────────────────────
    JoyTooltip: {
      styleOverrides: {
        root: ({ theme: t }) => ({
          borderRadius: t.radius.sm,
          fontSize: t.fontSize.xs,
          fontWeight: 500,
          padding: '6px 10px',
        }),
      },
    },

    // ── Select ──────────────────────────────
    JoySelect: {
      styleOverrides: {
        root: ({ theme: t }) => ({
          borderRadius: t.radius.sm,
          border: `1px solid ${t.vars.palette.neutral[200]}`,
          backgroundColor: t.vars.palette.background.surface,
          '&:hover': {
            borderColor: t.vars.palette.neutral[400],
          },
        }),
      },
    },

    // ── Textarea ────────────────────────────
    JoyTextarea: {
      styleOverrides: {
        root: ({ theme: t }) => ({
          borderRadius: t.radius.sm,
          border: `1px solid ${t.vars.palette.neutral[200]}`,
          backgroundColor: t.vars.palette.background.surface,
          '--Textarea-focusedThickness': '2px',
          '--Textarea-focusedHighlight': t.vars.palette.primary[500],
        }),
      },
    },

    // ── Alert ───────────────────────────────
    JoyAlert: {
      styleOverrides: {
        root: ({ theme: t }) => ({
          borderRadius: t.radius.sm,
          fontWeight: 500,
          fontSize: t.fontSize.sm,
          alignItems: 'flex-start',
          gap: '12px',
        }),
      },
    },

    // ── LinearProgress ──────────────────────
    JoyLinearProgress: {
      styleOverrides: {
        root: ({ theme: t }) => ({
          borderRadius: t.radius.xl,
          '--LinearProgress-thickness': '6px',
        }),
      },
    },

    // ── Switch ──────────────────────────────
    JoySwitch: {
      styleOverrides: {
        root: ({ theme: t }) => ({
          '--Switch-trackRadius': t.radius.xl,
          '--Switch-thumbRadius': t.radius.xl,
        }),
      },
    },

    // ── Checkbox ────────────────────────────
    JoyCheckbox: {
      styleOverrides: {
        root: {
          fontWeight: 500,
        },
        checkbox: ({ theme: t }) => ({
          borderRadius: t.radius.xs,
        }),
      },
    },

    // ── Radio ───────────────────────────────
    JoyRadio: {
      styleOverrides: {
        root: {
          fontWeight: 500,
        },
      },
    },

    // ── Menu / Dropdown ─────────────────────
    JoyMenu: {
      styleOverrides: {
        root: ({ theme: t }) => ({
          borderRadius: t.radius.md,
          boxShadow: t.shadow.lg,
          border: `1px solid ${t.vars.palette.divider}`,
          padding: '4px',
          '--ListItem-radius': t.radius.sm,
        }),
      },
    },

    JoyMenuItem: {
      styleOverrides: {
        root: ({ theme: t }) => ({
          fontSize: t.fontSize.sm,
          fontWeight: 500,
          padding: '8px 12px',
          borderRadius: t.radius.sm,
          transition: 'background-color 100ms ease',
        }),
      },
    },

    // ── Snackbar ────────────────────────────
    JoySnackbar: {
      styleOverrides: {
        root: ({ theme: t }) => ({
          borderRadius: t.radius.md,
          boxShadow: t.shadow.lg,
        }),
      },
    },

    // ── Drawer ──────────────────────────────
    JoyDrawer: {
      styleOverrides: {
        content: ({ theme: t }) => ({
          boxShadow: t.shadow.xl,
        }),
      },
    },

    // ── IconButton ──────────────────────────
    JoyIconButton: {
      styleOverrides: {
        root: ({ theme: t }) => ({
          borderRadius: t.radius.sm,
          transition: 'background-color 150ms ease',
        }),
      },
    },

    // ── FormLabel ───────────────────────────
    JoyFormLabel: {
      styleOverrides: {
        root: ({ theme: t }) => ({
          fontWeight: 600,
          fontSize: t.fontSize.xs,
          textTransform: 'uppercase' as const,
          letterSpacing: '0.04em',
          color: t.vars.palette.text.secondary,
        }),
      },
    },

    // ── Autocomplete ────────────────────────
    JoyAutocomplete: {
      styleOverrides: {
        root: ({ theme: t }) => ({
          borderRadius: t.radius.sm,
          border: `1px solid ${t.vars.palette.neutral[200]}`,
          backgroundColor: t.vars.palette.background.surface,
        }),
      },
    },

    // ── CircularProgress ────────────────────
    JoyCircularProgress: {
      styleOverrides: {
        root: {
          '--CircularProgress-size': '36px',
          '--CircularProgress-trackThickness': '3px',
          '--CircularProgress-progressThickness': '3px',
        },
      },
    },

    // ── Badge ───────────────────────────────
    JoyBadge: {
      styleOverrides: {
        root: {
          '--Badge-ringSize': '2px',
        },
        badge: ({ theme: t }) => ({
          fontWeight: 700,
          fontSize: '10px',
          borderRadius: t.radius.xl,
        }),
      },
    },

    // ── Skeleton ────────────────────────────
    JoySkeleton: {
      defaultProps: {
        animation: 'wave',
      },
    },
  },
});

export default theme;
