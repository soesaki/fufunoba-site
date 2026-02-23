const toggle = document.getElementById("menuToggle");
const menu = document.getElementById("sideMenu");
const closeBtn = document.getElementById("menuClose");

toggle.addEventListener("click", (e) => {
  e.stopPropagation();
  menu.classList.toggle("active");
});

closeBtn.addEventListener("click", () => {
  menu.classList.remove("active");
});

// 手芸ページのmoreボタン機能
const moreBtn = document.getElementById('moreBtn');
const moreContainer = document.getElementById('moreContainer');

if (moreBtn) {
  moreBtn.addEventListener('click', function() {
    // 1. すべての「is-hidden」クラスがついた要素を取得
    const hiddenImages = document.querySelectorAll('.gallery-image.is-hidden');
    
    hiddenImages.forEach(img => {
      // 2. クラス名「is-hidden」を削除して表示させる
      img.classList.remove('is-hidden');
    });

    // 3. ボタンの文字を変える（クリックした関数の中に書きます）
    this.textContent = 'これで全部だよ';
    
    // もしボタンを消したいなら以下を有効にする（今回は残すのでコメントアウト）
    // moreContainer.style.display = 'none';
  });
}
