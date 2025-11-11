import { createTheme } from '@mui/material/styles';
import type { ThemeOptions } from '@mui/material';
// LoL inspired color palette
const colors = {
  // Primary - LoL Gold
  gold: {
    main: '#C8AA6E',
    light: '#F0E6D2',
    dark: '#A09B8C',
  },
  // Background - Dark Blue/Navy
  background: {
    default: '#010A13',
    paper: '#0A1428',
    elevated: '#0F1C2E',
  },
  // Accent colors
  blue: {
    main: '#0BC5EA',
    light: '#5ACBE8',
    dark: '#0891B2',
  },
  // Status colors
  success: '#0BC5EA',
  error: '#DC2626',
  warning: '#F59E0B',
  info: '#0BC5EA',
};

// Typography system
const typography = {
  fontFamily: '"Inter", "Noto Sans JP", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
  
  // Headings
  h1: {
    fontSize: '3rem',
    fontWeight: 700,
    lineHeight: 1.2,
    letterSpacing: '-0.02em',
  },
  h2: {
    fontSize: '2.25rem',
    fontWeight: 700,
    lineHeight: 1.3,
    letterSpacing: '-0.01em',
  },
  h3: {
    fontSize: '1.875rem',
    fontWeight: 600,
    lineHeight: 1.4,
  },
  h4: {
    fontSize: '1.5rem',
    fontWeight: 600,
    lineHeight: 1.4,
  },
  h5: {
    fontSize: '1.25rem',
    fontWeight: 600,
    lineHeight: 1.5,
  },
  h6: {
    fontSize: '1rem',
    fontWeight: 600,
    lineHeight: 1.5,
  },
  
  // Body text
  body1: {
    fontSize: '1rem',
    lineHeight: 1.6,
  },
  body2: {
    fontSize: '0.875rem',
    lineHeight: 1.6,
  },
  
  // UI text
  button: {
    fontSize: '0.875rem',
    fontWeight: 600,
    textTransform: 'none' as const,
    letterSpacing: '0.02em',
  },
  caption: {
    fontSize: '0.75rem',
    lineHeight: 1.5,
  },
  overline: {
    fontSize: '0.75rem',
    fontWeight: 600,
    textTransform: 'uppercase' as const,
    letterSpacing: '0.1em',
  },
};

// Create the theme
export const lolTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: colors.gold.main,
      light: colors.gold.light,
      dark: colors.gold.dark,
    },
    secondary: {
      main: colors.blue.main,
      light: colors.blue.light,
      dark: colors.blue.dark,
    },
    background: {
      default: colors.background.default,
      paper: colors.background.paper,
    },
    success: {
      main: colors.success,
    },
    error: {
      main: colors.error,
    },
    warning: {
      main: colors.warning,
    },
    info: {
      main: colors.info,
    },
    text: {
      primary: '#F0F0F0',
      secondary: '#A0A0A0',
      disabled: '#5A5A5A',
    },
    divider: 'rgba(200, 170, 110, 0.12)',
  },
  typography,
  shape: {
    borderRadius: 8,
  },
  spacing: 8,
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: colors.background.default,
          backgroundImage: `
            radial-gradient(at 0% 0%, rgba(14, 165, 233, 0.15) 0px, transparent 50%),
            radial-gradient(at 100% 0%, rgba(139, 92, 246, 0.15) 0px, transparent 50%),
            radial-gradient(at 100% 100%, rgba(14, 165, 233, 0.15) 0px, transparent 50%),
            radial-gradient(at 0% 100%, rgba(139, 92, 246, 0.15) 0px, transparent 50%)
          `,
          backgroundAttachment: 'fixed',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          padding: '10px 20px',
          fontWeight: 600,
          textTransform: 'none',
          boxShadow: 'none',
          '&:hover': {
            boxShadow: 'none',
          },
        },
        contained: {
          background: `linear-gradient(135deg, ${colors.gold.main} 0%, ${colors.gold.dark} 100%)`,
          color: colors.background.default,
          '&:hover': {
            background: `linear-gradient(135deg, ${colors.gold.light} 0%, ${colors.gold.main} 100%)`,
          },
        },
        outlined: {
          borderColor: colors.gold.main,
          color: colors.gold.main,
          '&:hover': {
            borderColor: colors.gold.light,
            backgroundColor: 'rgba(200, 170, 110, 0.08)',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: colors.background.paper,
          backgroundImage: 'none',
          border: `1px solid rgba(200, 170, 110, 0.2)`,
          borderRadius: 12,
          transition: 'all 0.3s ease',
          '&:hover': {
            borderColor: 'rgba(200, 170, 110, 0.4)',
            boxShadow: '0 8px 24px rgba(200, 170, 110, 0.15)',
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
        },
        elevation1: {
          backgroundColor: colors.background.paper,
          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.3)',
        },
        elevation2: {
          backgroundColor: colors.background.elevated,
          boxShadow: '0 4px 16px rgba(0, 0, 0, 0.4)',
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            backgroundColor: colors.background.elevated,
            '& fieldset': {
              borderColor: 'rgba(200, 170, 110, 0.3)',
            },
            '&:hover fieldset': {
              borderColor: 'rgba(200, 170, 110, 0.5)',
            },
            '&.Mui-focused fieldset': {
              borderColor: colors.gold.main,
            },
          },
        },
      },
    },
    MuiAlert: {
      styleOverrides: {
        root: {
          borderRadius: 8,
        },
        standardError: {
          backgroundColor: 'rgba(220, 38, 38, 0.1)',
          borderLeft: `4px solid ${colors.error}`,
          color: colors.error,
        },
        standardWarning: {
          backgroundColor: 'rgba(200, 170, 110, 0.1)',
          borderLeft: `4px solid ${colors.gold.main}`,
          color: colors.gold.main,
        },
        standardInfo: {
          backgroundColor: 'rgba(11, 197, 234, 0.1)',
          borderLeft: `4px solid ${colors.blue.main}`,
          color: colors.blue.main,
        },
        standardSuccess: {
          backgroundColor: 'rgba(11, 197, 234, 0.1)',
          borderLeft: `4px solid ${colors.success}`,
          color: colors.success,
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          backgroundColor: 'rgba(200, 170, 110, 0.1)',
          color: colors.gold.light,
          borderColor: 'rgba(200, 170, 110, 0.3)',
        },
        outlined: {
          borderColor: 'rgba(200, 170, 110, 0.3)',
        },
      },
    },
    MuiTabs: {
      styleOverrides: {
        root: {
          borderBottom: `1px solid rgba(200, 170, 110, 0.2)`,
        },
        indicator: {
          backgroundColor: colors.gold.main,
          height: 3,
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontWeight: 600,
          color: '#A0A0A0',
          '&.Mui-selected': {
            color: colors.gold.main,
          },
        },
      },
    },
    MuiDialog: {
      styleOverrides: {
        paper: {
          backgroundColor: colors.background.paper,
          backgroundImage: 'none',
          border: `1px solid rgba(200, 170, 110, 0.3)`,
        },
      },
    },
    MuiDialogTitle: {
      styleOverrides: {
        root: {
          fontSize: '1.5rem',
          fontWeight: 600,
          color: colors.gold.main,
        },
      },
    },
  },
} as ThemeOptions);

// Export colors for direct use
export { colors };
