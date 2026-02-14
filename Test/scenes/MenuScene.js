// khai báo scene, kế thừa từ Phaser.Scene
class MenuScene extends Phaser.Scene {
  //đặt tên cho scene
  constructor() {
    super('MenuScene'); 
    
  }
  create() {
    this.add.text(250, 40, 'Choose a Letter', {
      fontSize: '32px',
      color: '#000000'
    });
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    //duyệt chữ cái để hiển thị lên màn hình
    letters.forEach((char, index) => {
      const x = 100 + (index % 6) * 100;
      const y = 120 + Math.floor(index / 6) * 70;
      //hiển thị chữ cái lên màn hình
      const letterText = this.add.text(x, y, char, {
        fontSize: '32px',
        color: '#000000'
      });
      //cho phép chữ được click
      letterText.setInteractive();
      //người dùng click vào chữ
      letterText.on('pointerdown', () => {
        // chuyển sang GameScene
        // truyền dữ liệu (chữ đã chọn)
        this.scene.start('GameScene', {
          letter: char
        });
      });
    });
  }
}
