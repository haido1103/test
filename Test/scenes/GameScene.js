class GameScene extends Phaser.Scene {
  constructor() {
    super('GameScene');
  }

  //data là chữ mà người chơi chọn được gửi từ MenuScene
  create(data) {
    //lưu chữ được chọn
    this.selectedLetter = data.letter;
    // hiển thị khung chữ để người chơi tô 
    this.add.text(400, 200, this.selectedLetter, {
      fontSize: '200px',
      color: '#cccccc'
    }).setOrigin(0.5); 
    //căn giữa chữ

    //tạo đối tượng Graphics để vẽ
    this.graphics = this.add.graphics();

    //biến kiểm soát trạng thái vẽ
    this.isDrawing = false;

    //mảng lưu các điểm đã vẽ (dùng để chấm điểm)
    this.drawPoints = [];

    //nhấn chuột 
    this.input.on('pointerdown', () => {
      this.isDrawing = true;
    });
    //nhả chuột
    this.input.on('pointerup', () => {
      this.isDrawing = false;
    });
    //di chuyển chuột
    this.input.on('pointermove', (pointer) => {
      //không đang vẽ thì bỏ qua
      if (!this.isDrawing) return;
      // màu vẽ (đen)
      this.graphics.fillStyle(0x000000, 1);
      // Vẽ 1 hình tròn nhỏ tại vị trí chuột
      this.graphics.fillCircle(pointer.x, pointer.y, 6);
      //lưu lại điểm đã vẽ
      this.drawPoints.push({
        x: pointer.x,
        y: pointer.y
      });
    });
    //reset btn
    const resetBtn = this.add.text(650, 520, 'Reset', {
      fontSize: '24px',
      color: '#ff0000'
    });
    resetBtn.setInteractive();
    resetBtn.on('pointerdown', () => {
      //xóa nét
      this.graphics.clear();
      //xóa dữ liệu
      this.drawPoints = [];
    });
    //score btn
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
  //hàm chấm điểm
  calculateScore() {
    //không vẽ=0 điểm
    if (this.drawPoints.length === 0) return 0;
    let correctPoints = 0;
    //giả sử chữ mẫu nằm ở (400, 200)
    this.drawPoints.forEach(point => {
      const dx = point.x - 400;
      const dy = point.y - 200;
      //khoảng cách từ điểm vẽ đến trung tâm chữ
      const distance = Math.sqrt(dx * dx + dy * dy);
      //nếu vẽ gần chữ → tính là đúng
      if (distance < 120) {
        correctPoints++;
      }
    });
    //% điểm đúng
    return Math.floor(
      (correctPoints / this.drawPoints.length) * 100
    );
  }
}
