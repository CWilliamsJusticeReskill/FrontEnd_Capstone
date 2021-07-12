var button = document.getElementById("buttonSubmit");
button.addEventListener("click", userData);
function userData() {
  //console.log("test");
  var em = document.getElementById("email").value;
  var ph = document.getElementById("phone").value;
  var contact = document.getElementById("e").value;
  var contactP = document.getElementById("p").value;
  var fullInfo = {
    email: ("em", "ph", "contact", "contactP"),
  };

  console.log(em);
  console.log(ph);
  console.log(contact);
  console.log(contactP);

  // Add info to localStorage
  localStorage.setItem("Email", em);
  localStorage.setItem("Phone", ph);
  //JSON.parse(e);
  //JSON.parse(p);
  localStorage.setItem("contact", e);
  localStorage.setItem("contactP", p);
}

function userInfo(fullInfo) {
  document.JSON.stringify("email", "phone", "e", "p");
}
//for(var i = 0; i < )

//JSON.parse("fullInfo");
