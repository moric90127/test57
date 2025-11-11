import { createTheme } from '@mui/material/styles';
import type { ThemeOptions } from '@mui/material';

// globals.css の :root (Light Mode) の値に基づいてマッピング
const colors = {
  // Primary - globals.css の --primary
  primary: {
    main: '#0F4C81',
    light: '#4A759C',
    dark: '#0A355A',
  },
  // Secondary - globals.css の --accent (LoL Gold)
  secondary: {
    main: '#C8AA6E',
    light: '#F0E6D2',
    dark: '#A09B8C',
  },
  // Background - globals.css の --background と --card
  background: {
    default: '#F5F5F7', // --background
    paper: '#FFFFFF',   // --card
    elevated: '#FFFFFF', // paperと同じか、ごく薄いグレー
  },
  // Status colors (globals.css から)
  success: '#2E7D32',
  error: '#D32F2F',   // --destructive
  warning: '#F57C00',
  info: '#0BC5EA', // (ダークテーマから流用)
  // テキストカラー
  text: {
    primary: '#1A1A1A',   // --foreground
    secondary: '#6B6B6B', // --muted-foreground
    disabled: '#A0A0A0',
  },
};

// Typography system (mui-theme.ts/lolTheme からコピー)
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

// Create the light theme
export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: colors.primary.main,
      light: colors.primary.light,
      dark: colors.primary.dark,
    },
    secondary: {
      main: colors.secondary.main,
      light: colors.secondary.light,
      dark: colors.secondary.dark,
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
      primary: colors.text.primary,
      secondary: colors.text.secondary,
      disabled: colors.text.disabled,
    },
    divider: 'rgba(15, 76, 129, 0.2)', // --border (PrimaryのBlueベース)
  },
  typography, // mui-theme.ts と同一
  shape: { // mui-theme.ts と同一
    borderRadius: 8,
  },
  spacing: 8, // mui-theme.ts と同一
  
  // mui-theme.ts の components 定義を light-theme の colors でマッピング
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: colors.background.default,
          // radial-gradient はダークテーマ専用のため削除
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
        // mui-theme (lolTheme) は primary (ゴールド) を使用
        // light-theme では primary (ブルー) を使用
        contained: {
          background: `linear-gradient(135deg, ${colors.primary.main} 0%, ${colors.primary.dark} 100%)`,
          color: colors.background.paper, // ブルーに映える白系の色
          '&:hover': {
            background: `linear-gradient(135deg, ${colors.primary.light} 0%, ${colors.primary.main} 100%)`,
          },
        },
        // mui-theme (lolTheme) は primary (ゴールド) を使用
        // light-theme では primary (ブルー) を使用
        outlined: {
          borderColor: colors.primary.main,
          color: colors.primary.main,
          '&:hover': {
            borderColor: colors.primary.light,
            backgroundColor: 'rgba(15, 76, 129, 0.08)', // ブルー系の hover 色
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: colors.background.paper,
          backgroundImage: 'none',
          border: `1px solid 'rgba(15, 76, 129, 0.2)'`, // divider の色
          borderRadius: 12,
          transition: 'all 0.3s ease',
          boxShadow: '0 4px 12px rgba(15, 76, 129, 0.05)', // light 用に調整
          '&:hover': {
            borderColor: 'rgba(15, 76, 129, 0.4)', // divider の hover 色
            boxShadow: '0 8px 24px rgba(15, 76, 129, 0.1)', // light 用に調整
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
          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)', // light 用に調整
        },
        elevation2: {
          backgroundColor: colors.background.elevated,
          boxShadow: '0 4px 16px rgba(0, 0, 0, 0.08)', // light 用に調整
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            backgroundColor: colors.background.paper, // elevated ではなく paper
            '& fieldset': {
              borderColor: 'rgba(15, 76, 129, 0.3)', // divider の色
            },
            '&:hover fieldset': {
              borderColor: 'rgba(15, 76, 129, 0.5)',
            },
            '&.Mui-focused fieldset': {
              borderColor: colors.primary.main, // primary (ブルー)
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
          backgroundColor: 'rgba(211, 47, 47, 0.1)', // error 色ベース
          borderLeft: `4px solid ${colors.error}`,
          color: '#B71C1C', // light 用に濃いテキスト
        },
        // mui-theme (lolTheme) は warning に primary (ゴールド) を使用
        // light-theme では warning (オレンジ) を使用
        standardWarning: {
          backgroundColor: 'rgba(245, 124, 0, 0.1)', // warning 色ベース
          borderLeft: `4px solid ${colors.warning}`,
          color: '#E65100', // light 用に濃いテキスト
        },
        // mui-theme (lolTheme) は info に secondary (ブルー) を使用
        // light-theme では info (ブルー) を使用
        standardInfo: {
          backgroundColor: 'rgba(11, 197, 234, 0.1)', // info 色ベース
          borderLeft: `4px solid ${colors.info}`,
          color: '#006064', // light 用に濃いテキスト
        },
        standardSuccess: {
          backgroundColor: 'rgba(46, 125, 50, 0.1)', // success 色ベース
          borderLeft: `4px solid ${colors.success}`,
          color: '#1B5E20', // light 用に濃いテキスト
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        // mui-theme (lolTheme) は primary (ゴールド) ベース
        // light-theme では primary (ブルー) ベース
        root: {
          backgroundColor: 'rgba(15, 76, 129, 0.1)',
          color: colors.primary.dark,
          borderColor: 'rgba(15, 76, 129, 0.3)',
        },
        outlined: {
          borderColor: 'rgba(15, 76, 129, 0.3)',
        },
      },
    },
    MuiTabs: {
      styleOverrides: {
        // mui-theme (lolTheme) は primary (ゴールド) ベース
        // light-theme では primary (ブルー) ベース
        root: {
          borderBottom: `1px solid rgba(15, 76, 129, 0.2)`,
        },
        indicator: {
          backgroundColor: colors.primary.main,
          height: 3,
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontWeight: 600,
          color: colors.text.secondary,
          '&.Mui-selected': {
            color: colors.primary.main, // primary (ブルー)
          },
        },
      },
    },
    MuiDialog: {
      styleOverrides: {
        paper: {
          backgroundColor: colors.background.paper,
          backgroundImage: 'none',
          border: `1px solid rgba(15, 76, 129, 0.3)`, // divider
        },
      },
    },
    MuiDialogTitle: {
      styleOverrides: {
        root: {
          fontSize: '1.5rem',
          fontWeight: 600,
          color: colors.primary.main, // primary (ブルー)
        },
      },
    },
  },
} as ThemeOptions);

// Export colors for direct use
export { colors };