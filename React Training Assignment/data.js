
var modal = document.getElementById("myModal"); 
var btn = document.getElementById("myBtn");
var span=document.getElementsByClassName("close")[0];
 btn.onclick = function() {
 modal.style.display = "block";
 }
 span.onclick=function(){
     modal.style.display="none";
 }
 const method1=(event)=>{
     if(/[0-9]/.test(event.key)){
         event.preventDefault();
     }
 }
 const allData=()=>{
     const name=document.getElementById("name").value;
     const email=document.getElementById("email").value;
     console.log("name",name);
     console.log("email",email);
     modal.style.display="none";
 }
 
 
 
 
 
