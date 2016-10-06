$(function() {
  $('#checkbox1').change(function() {
    $('#content1').slideDown();
    $('input').prop('disabled', true);
  });

  $('#checkbox2').change(function() {
    $('#content2').slideDown();
    $('input').prop('disabled', true);
  });

  $('#checkbox3').change(function() {
    $('#content3').slideDown();
    $('input').prop('disabled', true);
  });
});
