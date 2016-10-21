var letters = { //object for letters
65:'a',
66:'b',
67:'c',
68:'d',
69:'e',
70:'f',
71:'g',
72:'h',
73:'i',
74:'j',
75:'k',
76:'l',
77:'m',
78:'n',
79:'o',
80:'p',
81:'q',
82:'r',
83:'s',
84:'t',
85:'u',
86:'v',
87:'w',
88:'x',
89:'y',
90:'z'
}

$("input[type='radio']").click(function(){
  $("input:checked").prop('checked',false);
  $(this).prop('checked',true);
});


$('#inputArea').keydown(function(e) { //function when keydown

   if ($("input:checked").val() == "echo"){ //when press echo
 $("#textArea").append(letters[e.keyCode]);
  }

  else if ($("input:checked").val() == "caesarcipher"){ //when press caesar cipher

   $("#textArea").append(letters[e.keyCode - 1]);
  }

  else if ($("input:checked").val() == "heiroglyphics"){ //when press hieroglyphics
    $('#textArea').append("<img src = 'images/heiroglyphics/" + letters[e.keyCode] + ".gif'>");
 }

 });

 $("#translationInputText").keydown(function(e) {//to decode caesarcipher
  if(e.keyCode == 13) {
 var messageToDecode = $('#translationInputText').val();
 var messageArray = messageToDecode.split("");
 for (messageArray = 0; messageArray < 25; messageArray++){
    var translateNumber = messageArray[i].charCodeAt(0) - 32 + 1;
    $('#translationArea').append(letters[translateNumber]);
}
}
});
