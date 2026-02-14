// Khai báo một Scene mới, kế thừa từ Phaser.Scene
class MenuScene extends Phaser.Scene {

  // Constructor dùng để đặt tên cho Scene
  constructor() {
    super('MenuScene'); 
    // 'MenuScene' là ID của scene, dùng khi chuyển scene
  }

  // Hàm create() chạy 1 lần khi Scene được hiển thị
  create() {

    // Hiển thị tiêu đề ở đầu màn hình
    this.add.text(250, 40, 'Choose a Letter', {
      fontSize: '32px',
      color: '#000000'
    });

    // Tạo mảng chữ cái A–Z
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

    // Duyệt từng chữ cái để hiển thị lên màn hình
    letters.forEach((char, index) => {

      // Tính vị trí x theo cột (6 chữ mỗi hàng)
      const x = 100 + (index % 6) * 100;

      // Tính vị trí y theo hàng
      const y = 120 + Math.floor(index / 6) * 70;

      // Vẽ chữ cái lên màn hình
      const letterText = this.add.text(x, y, char, {
        fontSize: '32px',
        color: '#000000'
      });

      // BẮT BUỘC: cho phép chữ được click
      letterText.setInteractive();

      // Khi người dùng click vào chữ
      letterText.on('pointerdown', () => {

        // Chuyển sang GameScene
        // Đồng thời truyền dữ liệu (chữ cái đã chọn)
        this.scene.start('GameScene', {
          letter: char
        });
      });
    });
  }
}
