
function poll() {
  var params = {};

  // set uniqid for server-side rate limiting
  localStorage.getItem('uniqid') || localStorage.setItem('uniqid', $.md5(Math.random()));

  params.interval = window.localStorage.getItem('interval') || 120;
  params.uniqid   = localStorage.getItem('uniqid');

  url = localStorage.getItem('httpendpoint') || "http://example.com/speakeasy/new.json";
  $.getJSON(url, params, function(data) {
    $.each(data, function(id, row) {
      chrome.tts.speak(row.text, {'enqueue': true});
    });
  });
  setTimeout(function() {
    poll();
  }, params.interval * 1000);
}

poll();