$(window).on({
  'load': () => {
  // ロードイベント
  console.log('loadイベントが発生しました');
  },
  // スクロールイベント
  'scroll': () => {
  console.log('scrollイベントが発生しました');
  },
});