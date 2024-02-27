
    function validate()
{
  var name = document.getElementById("name").value;
  var email =  document.getElementById("email").value;
  var message =  document.getElementById("message").value;

  if(name == "" || email == "" || message == "")
  {
    alert("All Fields are mendatory..!!");
    return false;
  }
  else{
    true;
    alert("Welcome TO GYMFREAK...!!!")
  }
}
