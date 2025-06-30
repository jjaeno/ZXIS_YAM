// index.js

const express = require('express');
const app = express();
const PORT = 3000;

// 기본 라우터
app.get('/', (req, res) => {
  res.send('✅ YAM 백엔드 서버가 정상 작동 중입니다!');
});

// 서버 시작
app.listen(PORT, () => {
  console.log(`🚀 서버가 http://localhost:${PORT} 에서 실행 중입니다.`);
});
