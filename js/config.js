// ============================================================
// CẤU HÌNH RIÊNG CHO KHÁCH: phanh
// Điền nội dung vào đây rồi chạy:  python3 tools/build_customer.py phanh
// Ảnh để trong customers/phanh/assets/photos/ và trỏ tới bằng
// đường dẫn "assets/photos/<tên file>" (script tự thu nhỏ khi build).
// ============================================================

// ---------- thương hiệu ----------
export const GAME_TITLE = "MADE FOR US";
export const GAME_SUBTITLE = "Our love journey";
export const WINDOW_NAME = "MADE_FOR_US.EXE"; // chữ trên thanh tiêu đề cửa sổ

// ---------- lời thoại & văn bản ----------
export const TEXT = {
  // câu nhân vật nam nói khi tìm thấy cô ấy
  manLine: "Found you.",
  // dòng chữ trên màn hình bầu trời sao sau khi gặp nhau
  meetText: "I'm on my solo mission but the stars guide me to you",
  // hộp thoại "System Message" ở chiếc hòm hồng
  systemMessage: "The next level is not unlocked yet.\nWould you like to continue the journey?",
  envelopeLabel: "Highly confidential document",
  // lá thư: thay bằng lời của bạn (xuống dòng bằng \n hoặc dùng chuỗi nhiều dòng)
  letterTitle: "Your love letter",
  letter: `Gửi babi iu của em,

Vậy là chúng mình đã quen biết nhau gần 4 năm rồi. Nghĩ lại mới thấy trong khoảng thời gian ấy, hai đứa đã cùng nhau trải qua thật nhiều chuyện. Từ những ngày đầu còn chưa hiểu hết về nhau, đến bây giờ, mình đã cùng đi qua không biết bao nhiêu nơi, cùng ăn bao nhiêu món ngon, cùng có những chuyến đi vui vẻ và cả những lúc mệt mỏi, cáu gắt với nhau. Có những chuyện lúc xảy ra chẳng nghĩ sẽ nhớ, vậy mà sau này nhìn lại lại thấy đó đều là những kỷ niệm rất đáng quý.
Em thích nhất là cảm giác được có anh bên cạnh trong những hành trình ấy. Đi đâu không quan trọng bằng đi cùng ai. Có những nơi có thể sau này em sẽ quên tên, nhưng chắc em vẫn sẽ nhớ mình đã từng ở đó cùng anh, đã cười và vui ver như thế nào.
Anh còn là người khiến em nhận ra mình có thể thích những thứ mà trước đây em từng nghĩ là mình sẽ chẳng bao giờ thích. Ví dụ như cà phê đen =))))) Ngày trước em thật sự không thích vị đắng của nó, thế mà chẳng hiểu từ lúc nào, em lại có thể ngồi uống một ly Espresso và thấy nó ngon. Có lẽ vì những điều mình trải qua cùng nhau đã khiến những thứ bình thường trở nên đặc biệt hơn.
Cảm ơn anh vì gần 4 năm qua đã luôn ở bên, lắng nghe, chia sẻ và cùng em đi qua cả những ngày vui lẫn những lúc không dễ dàng. Em biết hai đứa đều có những lúc chưa đủ kiên nhẫn, chưa đủ tinh tế, nhưng em trân trọng việc sau tất cả, chúng mình vẫn chọn hiểu nhau và tiếp tục cùng nhau.
Em chỉ mong tình yêu của mình sau này vẫn luôn giữ được nhiệt tình yêu như thuở ban đầu — vẫn háo hức khi gặp nhau, vẫn muốn kể cho nhau nghe những chuyện nhỏ xíu trong ngày, vẫn muốn cùng nhau đi đâu đó dù chẳng cần một lý do đặc biệt.
Chúng mình đã cùng nhau đi qua một chặng đường dài, nhưng em hy vọng đây chỉ mới là phần mở đầu của rất nhiều năm sau nữa. Mong rằng mình sẽ còn cùng nhau đi thật nhiều nơi, thử thật nhiều điều mới và có thêm thật nhiều câu chuyện để kể về sau.
Cảm ơn anh vì đã cùng em đi đến hôm nay. Và em mong trên những chặng đường sắp tới, người đồng hành bên cạnh em vẫn luôn là anh.
Em iu của anh 🌵`,
  // hiện khi chưa có file video
  videoMissing: "Wait for your video 🎬",
  // chữ trong khung ảnh còn trống
  photoPlaceholder: "(insert pictures here)",
  // nhắc xoay ngang trên điện thoại / máy tính bảng
  rotateTitle: "Please rotate to landscape",
  rotateText: "This journey is made for a sideways screen.",
  rotateTip: "⟳ Hold your device sideways to play",
  // Hướng dẫn thêm vào màn hình chính (chỉ hiện trên điện thoại / máy tính bảng).
  // Để trống thì dùng chuỗi mặc định tiếng Anh trong js/install.js.
  install: {},
};

// ---------- ảnh & video của khách ----------
// Ảnh polaroid: đặt file vào assets/photos/ rồi điền đường dẫn vào từng mốc bên dưới.
// Video: đặt file .mp4 vào assets/video/ rồi điền tên vào đây (nên dưới 15MB).
export const VIDEO_SRC = "assets/video/video.mp4"; // khách gửi .MOV dọc 1080x1920 36MB → avconvert Preset960x540 (18MB); bản gốc ở _source/
// Nhạc nền: đặt file .mp3 vào assets/audio/ rồi điền tên vào đây. Để "" thì không có nhạc nền
// (vẫn còn đủ hiệu ứng nhảy/bấm nút). Tự tắt khi phát video, tự nhỏ lại một chút mỗi lần nhảy.
export const MUSIC_SRC = "assets/audio/bgm.mp3";
// Ảnh ở màn hình mở đầu (ảnh dọc kiểu photobooth rất hợp). Để "" thì hiện khung trống.
export const TITLE_PHOTO = "assets/photos/00 Title.jpg"; // ảnh dọc khách gửi cho màn mở đầu
// true  = luôn vẽ khung ảnh trống kèm chữ hướng dẫn (dùng cho bản demo)
// false = mốc nào chưa có ảnh thì không treo khung
export const SHOW_EMPTY_PHOTO_FRAMES = false; // bản khách: mốc chưa có ảnh thì không treo khung

// Ảnh xe chở đôi. Để [] = dùng bộ 4 khung chạy xe mặc định. Chỉ có 1 ảnh thì ghi 1 file —
// game tự thêm hiệu ứng chạy (rung máy, khói, bụi, vệt gió) nên xe vẫn trông đang chạy.
//   export const COUPLE_FRAMES = ["assets/characters/Couple-Bike-Side-01.png"];
export const COUPLE_FRAMES = ["assets/characters/Couple-Bike-Side-01.png"];

// ---------- 5 món quà của chặng solo ----------
// icon: để trống ("") thì game tự vẽ hình thay thế.
// Khách có 5 icon riêng (cắt từ Props.png trong assets/characters/_source/).
export const GIFTS = [
  { id: "matcha", label: "Film Roll", icon: "assets/characters/Item-FilmRoll-01.png" },
  { id: "chocolate", label: "Film Camera", icon: "assets/characters/Item-FilmCamera-01.png" },
  { id: "flower", label: "Blue Flower", icon: "assets/characters/Item-BlueFlower-01.png" },
  { id: "lipstick", label: "Coffee", icon: "assets/characters/Item-Coffee-01.png" },
  { id: "letter", label: "Gift Box", icon: "assets/characters/Item-GiftBox-01.png" },
];

// ---------- các mốc của chặng đi đôi ----------
// Mỗi mốc là một khung polaroid treo trên nền, theo thứ tự thời gian.
//   date, name : chú thích in dưới khung ảnh
//   photo      : đường dẫn ảnh (để "" nếu chưa có)
//   sky        : hai màu gradient bầu trời [trên, dưới]
//   event      : "rain"  → trời mưa, nhảy chướng ngại để nhặt ô rồi mới đi tiếp
//                "chest" → hòm hồng: System Message → Level Unlocked → lá thư
//                "gift"  → hòm quà rơi từ trời → video
// Ba mốc có event là phần kịch bản, nên giữ nguyên thứ tự ở cuối danh sách.
export const MILESTONES = [
  { date: "22.07.23", name: "Hải Phòng", sky: ["#dfe9ff", "#f6c7d8"], photo: "assets/photos/01 Hai Phong 22.07.23.jpg" },
  { date: "22.12.23", name: "Tam Đảo", sky: ["#3b2a5a", "#b57aa8"], photo: "assets/photos/02 Tam Dao 22.12.23.jpg" },
  { date: "27.01.24", name: "Ninh Bình", sky: ["#bcd7ff", "#ffd9e8"], photo: "assets/photos/03 Ninh Binh 27.01.24.jpg" },
  { date: "30.11.24", name: "Tà Xùa", sky: ["#3b2a5a", "#b57aa8"], photo: "assets/photos/04 Ta Xua 30.11.24.jpg" },
  { date: "30.03.25", name: "Sóc Sơn", sky: ["#e3d3dc", "#b391a6"], photo: "assets/photos/05 Soc Son 30.03.25.jpg" },
  { date: "28.06.25", name: "Quan Lạn", sky: ["#ffe6c9", "#ffd9e8"], photo: "assets/photos/06 Quan Lan 28.06.25.jpg" },
  { date: "09.08.25", name: "Ba Vì", sky: ["#cfe6ff", "#ffe6c9"], photo: "assets/photos/07 Ba Vi 09.08.25.jpg" },
  { date: "05.04.26", name: "Huế", sky: ["#ffd9c4", "#ffe7ef"], photo: "assets/photos/08 Hue 05.04.26.jpg" },
  { date: "13.06.26", name: "Hoà Bình", sky: ["#e7d6ea", "#f6d3de"], photo: "assets/photos/09 Hoa Binh 13.06.26.jpg" },
  { date: "26.09.26", name: "Ninh Bình", sky: ["#ffd9e0", "#ffe9d6"], photo: "assets/photos/10 Ninh Binh 26.09.26.jpg" },
  {
    date: "", name: "", sky: ["#7fb7d9", "#cfe7f2"], photo: "",
    event: "rain",
    blocks: [{ x: 300 }, { x: 520, h: 2 }],
    platforms: [{ x: 640, w: 2, y: 110 }],
    itemAt: { x: 664, y: 166 },
  },
  { date: "", name: "", sky: ["#ffd9c4", "#ffe7ef"], photo: "", event: "chest" },
  { date: "", name: "", sky: ["#bfe0f2", "#e8f3ee"], photo: "", event: "gift" },
];

// ---------- nền parallax riêng (tuỳ chọn) ----------
// Để trống = dùng bộ nền 3 lớp mặc định (Hồ Gươm ban ngày + hoàng hôn, xem js/assets.js).
// Muốn nền riêng: bỏ ảnh vào customers/<slug>/assets/scenes/<id>/ rồi khai báo lớp (xa → gần)
// + tốc độ trôi (0 = đứng yên, 1 = trôi cùng đường). id: "ho-guom" (đi bộ, solo, gặp nhau),
// "ho-tay" (đi đôi). Ví dụ:
//   "ho-guom": { layers: ["L1.png", "L2.png", "L3.png"], speeds: [0.05, 0.16, 0.4] },
export const SCENE_LAYERS = {};
