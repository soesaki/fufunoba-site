const toggle = document.getElementById("menuToggle");
const menu = document.getElementById("sideMenu");
const closeBtn = document.getElementById("menuClose");

toggle.addEventListener("click", (e) => {
  e.stopPropagation();   // 余計なクリックを止める
  menu.classList.toggle("active");
});

closeBtn.addEventListener("click", () => {
  menu.classList.remove("active");
});

// 「もっと見る」機能
const moreBtn = document.getElementById('moreBtn');
if (moreBtn) {
    moreBtn.addEventListener('click', function() {
        // すべての隠れている画像を取得
        const hiddenImages = document.querySelectorAll('.gallery-image.is-hidden');
        
        hiddenImages.forEach(img => {
            img.style.display = 'block'; // 画像を表示
        });

        // ボタン自体を消す
        this.parentElement.style.display = 'none';
    });
}
