// src/light-theme.ts

import { createTheme } from '@mui/material/styles';
import type { ThemeOptions } from '@mui/material';

// globals.css の :root (Light Mode) の値に基づいてマッピング
const colors = {
  // Primary - globals.css の --primary
  primary: {
    main: '#0F4C81',
    light: '#4A759C', // mainを明るく
    dark: '#0A355A',  // mainを暗く
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
    elevated: '#FFFFFF',
  },
  // Status colors (globals.css から)
  success: '#2E7D32',
  error: '#D32F2F',   // --destructive
  warning: '#F57C00',
  info: '#0BC5EA',    // (ダークテーマから流用)
};

// Typography system (ダークテーマから流用)
const typography = {
  fontFamily: '"Inter", "Noto Sans JP", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
  // ... (h1, h2, ... body1, body2, button など、lolThemeと同じ定義を推奨)
  // ... (もし lolTheme から typography を export しているなら、それをインポートして使うのがベスト)
};

// Create the light theme
export const lightTheme = createTheme({
  palette: {
    mode: 'light', // 1. モードを 'light' に変更
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
      primary: '#1A1A1A',   // --foreground
      secondary: '#6B6B6B', // --muted-foreground
      disabled: '#A0A0A0',
    },
    divider: 'rgba(15, 76, 129, 0.2)', // --border
  },
  typography, // (lolThemeと共通化推奨)
  shape: {
    borderRadius: 8,
  },
  spacing: 8,
  // ... (コンポーネントのオーバーライドは、ライト用に調整が必要な場合があります)
  // ... (例: MuiButton の contained スタイルなど)
} as ThemeOptions);