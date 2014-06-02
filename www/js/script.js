$(document).ready(function () {
  $.nonbounce();
  window.addEventListener('load', function () {
    FastClick.attach(document.body);
  }, false);
});

$(document).delegate("#a", "pageinit", function () {
  $('#load-button').click(function () {
    $('#stored-slider-num').val(localStorage["app.slide"]);
    $('#stored-button').val(localStorage["app.letter"]);
  });
  $('#clear-button').click(function () {
    localStorage.clear();
    $('input').val('');
  })
});


$(document).delegate("#b", "pageinit", function () {
  if (localStorage["app.letter"]) {
    $("input[value=" + localStorage['app.letter'] + "]").parent().addClass('ui-btn-active');
  }

  if (localStorage["app.slide"]) {
    $("#tempslider").val(localStorage['app.slide']);
  }

  $("#tempslider").on("slidestop", function (e) {
    app.slide = $("#tempslider").val();
    localStorage["app.slide"] = $("#tempslider").val();
  });

  $('.letter-buttons input').click(function () {
    localStorage["app.letter"] = $(this).val();
    $('.letter-buttons input').parent().removeClass('ui-btn-active');
    $(this).parent().addClass('ui-btn-active');
  })
});

$(document).delegate("#c", "pageinit", function () {
  var myRootRef = new Firebase('https://dd28.firebaseio.com/');
  $('#fb-upload-button').click(function () {
    myRootRef.set({
      data: $('#fb-upload').val()
    })
  });
  $('#fb-download-button').click(function () {
    myRootRef.child('data').on('value', function (snapshot) {
      $('#fb-download').val(snapshot.val());
    });
  })
});






