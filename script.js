function togglePopup(){
    document.getElementById("popup-1").classList.toggle("active");
  }


  var arr=[
    {name:"SpiceJet",num:36},
];
var element=document.getElementById("data");

for (var i=0;i<arr.length;i++){
    var div=document.createElement("div");
   
    div.innerHTML='<br>Flight Name: <h2>' +arr[i].name + '</h2> having '+arr[i].num +' Seat Check Availability ...' 
    element.appendChild(div);
}

