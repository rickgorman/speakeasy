// Saves options to localStorage.
function save_options() {

  // save interval
  var interval = document.getElementById("interval").value;
  localStorage["interval"] = interval;

  // save http endpoint
  var endpoint = document.getElementById("httpendpoint").value;
  localStorage["httpendpoint"] = endpoint;

  // handle uniqid reset
  if( document.getElementById("resetuniqid").checked ) {
    localStorage.setItem('uniqid', $.md5(Math.random()));
  }

  // Update status to let user know options were saved.
  var status = document.getElementById("status");
  status.innerHTML = "Options Saved. <br /><font color='red'>Please Disable and Enable the extension for the changes to take effect</font>";

  // if any options are deleted, bring back the defaults and show them to the user
  restore_options();

  setTimeout(function() {
    status.innerHTML = "";
  }, 7000);
}

// Restores select box state to saved value from localStorage.
function restore_options() {

  // restore interval value
  var interval = localStorage["interval"];
  if (!interval) {
    document.getElementById("interval").value = 120;
  }
  else {
    var input = document.getElementById("interval");
    input.value = interval;
  }

  // restore http endpoint
  var httpendpoint = localStorage["httpendpoint"];
  if (!httpendpoint) {
    document.getElementById("httpendpoint").value = "http://example.com/speakeasy/new.json";
  }
  else {
    var input = document.getElementById("httpendpoint");
    input.value = httpendpoint;
  }

}
document.addEventListener('DOMContentLoaded', restore_options);
document.querySelector('#save').addEventListener('click', save_options);