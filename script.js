function togglePopup(){
    document.getElementById("popup-1").classList.toggle("active");
  }

  var form = document.getElementById("form");
  form.addEventListener('submit', function(event){
      event.preventDefault();

      var userfirstname=document.getElementById("userfirstname").value
      console.log(userfirstname)
      var userlastname = document.getElementById("userlastname").value
      console.log(userlastname)
  })