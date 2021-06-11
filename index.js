var arr=[
    {name:"Kingfisher",num:45},
    {name:"Vistara",num:56},
    {name:"IndiGo",num:137},
    {name:"Air India",num:137},
    {name:"SpiceJet",num:137},
    {name:"GoAir",num:137},
    {name:"AirAsia India",num:137},
    {name:"Alliance Air",num:137},
    {name:"TruJet",num:137},
    {name:"Etihad Airways",num:137}
];
var ele=document.getElementById("content");

for (var i=0;i<arr.length;i++){
    var div=document.createElement("div");
    var but=document.createElement("button");
    div.innerHTML='<br>Flight Name: <h2>' +arr[i].name + '</h2> flying with '+arr[i].num +' passengers' +'<br> <button class="button" id="tryal" onClcik="tryal()">VIEW</button>';
    but.innerHTML="load";
    ele.appendChild(div);
   

}

const tryal=()=>{
    let elem=document.getElementById("content");
    elem.style.backgroundColor="rgba(43, 72, 88)";

}