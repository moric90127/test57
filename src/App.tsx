import './App.css'

// src/App.tsx

import { ThemeProvider, CssBaseline, Button, Typography, Box } from '@mui/material';
import { lolTheme } from './mui-theme'; // 1. 配置したテーマをインポート

function App() {
  return (
    // 2. ThemeProviderで全体を囲み、theme={lolTheme} を渡す
    <ThemeProvider theme={lolTheme}>
      {/* 3. CssBaselineを追加 */}
      <CssBaseline />
      
      {/* ===== ↓テーマが適用されたか確認するためのテスト用コード↓ ===== */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '100vh',
          gap: 2, // 要素間のスペース
          bgcolor: 'background.default', // テーマの背景色
        }}
      >
        <Typography variant="h4" color="primary">
          LoLテーマ適用テスト
        </Typography>
        <Typography color="text.secondary">
          mui-theme.ts のスタイルが適用されています
        </Typography>
        
        {/* MuiButtonは lolTheme のスタイル（金色）になるはず */}
        <Button variant="contained">
          テーマ適用済みボタン (Contained)
        </Button>
        <Button variant="outlined">
          テーマ適用済みボタン (Outlined)
        </Button>
      </Box>
      {/* ===== ↑テスト用コードここまで↑ ===== */}
    </ThemeProvider>
  );
}

export default App;