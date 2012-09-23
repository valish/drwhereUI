$(function(){
  $('#map').click(function(){
    $(this).animate({ height: '200' }, 144);
    $('.showMap').hide();
    $('.shadow').fadeOut();
  })
})