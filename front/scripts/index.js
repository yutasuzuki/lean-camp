document.querySelectorAll('.js-texarea').forEach((textarea) => {
  textarea.addEventListener('change', textAutoHeightHandler);
  textarea.addEventListener('input', textAutoHeightHandler);
  textAutoHeightHandler.call(textarea);
});

function textAutoHeightHandler() {
  this.style.height = `142px`;
  // 1行の長さを取得する
  const lineHeight = parseInt(this.style.lineHeight.replace(/px/, ''));
  // 最低2行の表示エリアにする
  const doubleLineHeight = lineHeight * 2;
  let scrollHeight = parseInt(this.scrollHeight);
  if(scrollHeight < doubleLineHeight){
    scrollHeight = doubleLineHeight;
  }
  this.style.height = scrollHeight + 'px';
}