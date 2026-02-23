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
// 手芸ページのmoreボタン機能
const moreBtn = document.getElementById('moreBtn');
const moreContainer = document.getElementById('moreContainer');

if (moreBtn) {
    moreBtn.addEventListener('click', function() {
        // すべての「is-hidden」クラスがついた要素を取得
        const hiddenImages = document.querySelectorAll('.gallery-image.is-hidden');
        
        hiddenImages.forEach(img => {
            // クラス名「is-hidden」を削除する（これでCSSの非表示が解けます）
            img.classList.remove('is-hidden');
        });

        // ボタンの入れ物ごと消す
        moreContainer.style.display = 'none';
    });
}
