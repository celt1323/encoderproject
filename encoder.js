$(document).keydown(function(e) {
 if (e.keyCode == 65) {
  var letters = $("#inputArea").val();
  $("#textarea").append(letters);
 }
});

$("input[type='radio']").click(function(){
  $("input:checked").prop('checked',false);
  $(this).prop('checked',true);
});