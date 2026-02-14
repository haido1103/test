// Tạo Scene chơi game
class GameScene extends Phaser.Scene {

  constructor() {
    super('GameScene');
  }

  // data là object được gửi từ MenuScene
  create(data) {

    // Lưu chữ cái được chọn
    this.selectedLetter = data.letter;

    // Hiển thị chữ mẫu (màu xám, to)
    this.add.text(400, 200, this.selectedLetter, {
      fontSize: '200px',
      color: '#cccccc'
    }).setOrigin(0.5); 
    // setOrigin(0.5) giúp căn giữa chữ

    // Tạo đối tượng Graphics để vẽ
    this.graphics = this.add.graphics();

    // Biến kiểm soát trạng thái vẽ
    this.isDrawing = false;

    // Mảng lưu các điểm đã vẽ (dùng để chấm điểm)
    this.drawPoints = [];

    // Khi nhấn chuột (hoặc chạm)
    this.input.on('pointerdown', () => {
      this.isDrawing = true;
    });

    // Khi nhả chuột
    this.input.on('pointerup', () => {
      this.isDrawing = false;
    });

    // Khi di chuyển chuột
    this.input.on('pointermove', (pointer) => {

      // Nếu không đang vẽ thì bỏ qua
      if (!this.isDrawing) return;

      // Thiết lập màu vẽ (đen)
      this.graphics.fillStyle(0x000000, 1);

      // Vẽ 1 hình tròn nhỏ tại vị trí chuột
      this.graphics.fillCircle(pointer.x, pointer.y, 6);

      // Lưu lại điểm đã vẽ
      this.drawPoints.push({
        x: pointer.x,
        y: pointer.y
      });
    });

    // ===== NÚT RESET =====
    const resetBtn = this.add.text(650, 520, 'Reset', {
      fontSize: '24px',
      color: '#ff0000'
    });

    resetBtn.setInteractive();

    resetBtn.on('pointerdown', () => {
      // Xóa toàn bộ nét vẽ
      this.graphics.clear();
      // Xóa dữ liệu vẽ
      this.drawPoints = [];
    });

    // ===== NÚT CHẤM ĐIỂM =====
    const scoreBtn = this.add.text(50, 520, 'Score', {
      fontSize: '24px',
      color: '#0000ff'
    });

    scoreBtn.setInteractive();

    scoreBtn.on('pointerdown', () => {
      const score = this.calculateScore();
      alert('Score: ' + score + '%');
    });
  }

  // ===== HÀM CHẤM ĐIỂM =====
  calculateScore() {

    // Nếu chưa vẽ gì → 0 điểm
    if (this.drawPoints.length === 0) return 0;

    let correctPoints = 0;

    // Giả sử chữ mẫu nằm ở (400, 200)
    this.drawPoints.forEach(point => {

      const dx = point.x - 400;
      const dy = point.y - 200;

      // Khoảng cách từ điểm vẽ đến trung tâm chữ
      const distance = Math.sqrt(dx * dx + dy * dy);

      // Nếu vẽ gần chữ → tính là đúng
      if (distance < 120) {
        correctPoints++;
      }
    });

    // Tính % điểm đúng
    return Math.floor(
      (correctPoints / this.drawPoints.length) * 100
    );
  }
}
