// src/App.tsx

import React, { useState } from 'react'; // 1. useState をインポート
import { ThemeProvider, CssBaseline, Button, Typography, Box } from '@mui/material';

// 2. 2つのテーマファイルをインポート
import { lolTheme } from './mui-theme';     // ダークテーマ
import { lightTheme } from './light-theme'; // ライトテーマ

function App() {
  // 3. テーマのモードを記憶する状態を定義 (初期値: 'dark')
  const [mode, setMode] = useState<'light' | 'dark'>('dark');

  // 4. 現在の 'mode' に応じて、使用するテーマを決定する
  const activeTheme = mode === 'dark' ? lolTheme : lightTheme;

  // 5. モードを切り替えるための関数
  const toggleTheme = () => {
    setMode((prevMode) => (prevMode === 'dark' ? 'light' : 'dark'));
  };

  return (
    // 6. 決定した 'activeTheme' を ThemeProvider に渡す
    <ThemeProvider theme={activeTheme}>
      <CssBaseline />
      
      {/* ===== ↓テーマ切り替えと確認用のテスト用コード↓ ===== */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '100vh',
          gap: 2,
          bgcolor: 'background.default', // テーマの背景色 (自動で切り替わる)
          color: 'text.primary',       // テーマの文字色 (自動で切り替わる)
        }}
      >
        {/* 7. 切り替えボタン */}
        <Button 
          variant="contained" 
          onClick={toggleTheme} // ボタンクリックで関数を実行
          sx={{ position: 'absolute', top: 16, right: 16 }}
        >
          {mode === 'dark' ? 'ライトモードに切替' : 'ダークモードに切替'}
        </Button>
        
        <Typography variant="h4" color="primary">
          LoLテーマ適用テスト
        </Typography>
        <Typography color="text.secondary">
          現在のモード: {mode}
        </Typography>
        
        {/* これらのボタンは、テーマに応じて色が変わるはず */}
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