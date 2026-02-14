1.Bài test xây dựng một mini-game giáo dục đơn giản cho phép người chơi:

-Chọn một chữ cái (A–Z)

-Quan sát chữ mẫu

-Vẽ/tô chữ theo khuôn chữ 

-Nhận điểm đánh giá mức độ đúng của nét vẽ/tô

2. Kiến trúc 

-Bài test được xây dựng bằng Phaser 3, theo mô hình Scene-based.

-Gồm 2 Scene chính:

MenuScene: màn hình chính để chọn chữ bắt đầu trò chơi

GameScene: màn hình tô và chấm điểm

3. Luồng hoạt động của game

Luồng hoạt động của game diễn ra theo thứ tự sau:

-Trình duyệt load index.html

-main.js khởi tạo Phaser.Game

-Phaser tạo canvas và game loop

-MenuScene được chạy đầu tiên

-Người dùng chọn một chữ cái

-Game chuyển sang GameScene và hiển thị khung chữ đã chọn

-Người dùng tô chữ bằng chuột hoặc touch

-Dữ liệu nét vẽ được lưu lại

-Khi người dùng bấm “Score”, hệ thống tính toán và hiển thị điểm

4.Cơ chế vẽ

-Phaser tạo một canvas để render toàn bộ game

-Nét vẽ của người dùng được thực hiện bằng đối tượng Graphics

-Mỗi lần chuột/touch di chuyển khi đang vẽ:

-Game vẽ một điểm tròn nhỏ tại vị trí con trỏ

-Lưu tọa độ điểm đó vào một mảng dữ liệu (drawPoints)

-Nhiều điểm liên tiếp tạo thành nét vẽ

5. Cơ chế chấm điểm

Chám điểm dựa trên khoảng cách từ vị trí nét vẽ đến vị trí của khung chữ mẫu

6. Giới hạn

Thuật toán hiện tại có một số giới hạn được chấp nhận trong phạm vi bài test:

Không kiểm tra độ bao phủ của chữ

Không phát hiện thiếu nét

Không so khớp hình dạng chữ chính xác

7. Phát triển

Hệ thống có thể được cải thiện bằng:

Mask chữ để so khớp pixel

Chấm điểm theo lưới 


   
