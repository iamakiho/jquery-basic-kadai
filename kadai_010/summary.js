$(function () {
  $('#change-color').on('click', function () {
    // 文字色が変わる
    $('#target').css('color', 'red');
  });
  $('#change-text').on('click', function () {
    // 文字内容が変わる
    $('#target').text('Hello!');
  });
  $('#fade-out').on('click', function () {
    // フェードアウトで文字が消える
    $('#target').fadeOut();
  });
  $('#fade-in').on('click', function () {
    // フェードアウトで文字が消える
    $('#target').fadeIn();
  });
});
