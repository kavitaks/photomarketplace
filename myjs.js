
function validateNme() {
  var name = document.getElementById("nameBox").value;
  if (name.length > 0) {
    var pattern = /^[A-Za-z\s]+$/;
    if (name.match(pattern)) {
      document.getElementById("nameBox").style.borderColor = "green";
      return true;
    } else {
      document.getElementById("nameBox").style.borderColor = "red";
      return false;
    }
  } else {
    document.getElementById("nameBox").style.borderColor = "red";
    document.getElementById("err1").innerHTML = "this is required";
    return false;
  }
}
function validatemobile() {
  var x = document.getElementById("numberBox").value;
  var error = document.getElementById("err2");
  if (x.length > 0) {
    if (x.length == 10) {
      var prt = /^[0-9]+$/;
      if (x.match(prt)) {
        if (x.charAt(0) >= 6) {
          document.getElementById("numberBox").style.borderColor =
            "green";
          return true;
        } else {
          document.getElementById("numberBox").style.borderColor = "red";
          document.getElementById("err2").innerHTML =
            "mobile number must be start 6,7,8,9";
          return false;
        }
      } else {
        document.getElementById("numberBox").style.borderColor = " red";
        document.getElementById("err2").innerHTML =
          "Plz enter the correct number";
        return false;
      }
    } else {
      document.getElementById("numberBox").style.borderColor = "red";
      document.getElementById("err2").innerHTML =
        "Mobile number must b e 10 digits";
      return false;
    }
  } else {
    document.getElementById("numberBox").style.borderColor = "red";
    document.getElementById("err2").innerHTML = "this is required";
    return false;
  }
}
function formvalidation() {
  var status = true;
  if (validateNme() == false) {
    status = false;
  }
  if (validatemobile() == false) {
    status = false;
  }
  return status;
}