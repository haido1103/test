// Cấu hình chính của Phaser Game
const config = {

  // Phaser tự chọn WebGL hoặc Canvas
  type: Phaser.AUTO,

  // Kích thước game
  width: 800,
  height: 600,

  // Màu nền mặc định
  backgroundColor: '#ffffff',

  // Danh sách các Scene trong game
  scene: [
    MenuScene,   // Scene đầu tiên chạy
    GameScene
  ]
};

// Khởi tạo game
const game = new Phaser.Game(config);
