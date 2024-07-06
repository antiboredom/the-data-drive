$(document).ready(function() {
  //fixes checkerboard bug on chrome lololol
  // $(document).on('mousewheel', function(){});

  $('map').imageMapResize();

  $('#message-close').click(function(e) {
    e.preventDefault();
    $('#messages').hide();
  });

});

function shuffleImages() {
  var parent = $("#shuffle");
  var divs = parent.children();
  while (divs.length) {
    parent.append(divs.splice(Math.floor(Math.random() * divs.length), 1)[0]);
  }

}
var message_index = 0;

function showMessages() {
  setTimeout(function() {
    $('#messages').show();
    nextMessage();
  }, 5000);
}

function nextMessage() {
  $('#messages').show();
  $('#messages img').eq(message_index).css('display', 'block');
  $("#inner-messages").animate({
    scrollTop: $('#inner-messages')[0].scrollHeight
  }, 500);
  message_index++;
  if ($('#messages img').length > message_index - 1) {
    setTimeout(function() {
      nextMessage();
    }, 10000);
  }
}
