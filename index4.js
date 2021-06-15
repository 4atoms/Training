var arr=[
    {name:"Kingfisher",num:45,id:1},
    {name:"Vistara",num:56,id:2},
    {name:"IndiGo",num:67,id:3},
    {name:"Air India",num:78,id:4},
    {name:"SpiceJet",num:49,id:5},
    {name:"GoAir",num:31,id:6},
    {name:"AirAsia India",num:42,id:7},
    {name:"Alliance Air",num:33,id:8},
    {name:"TruJet",num:64,id:9},
    {name:"Etihad Airways",num:137,id:10}
];
var ele=document.getElementById("content");

for (var i=0;i<arr.length;i++){
    var div=document.createElement("div");
    var but=document.createElement("button");
    div.innerHTML='Flight Name: <h2>' +arr[i].name + '</h2> flying with '+arr[i].num +' passengers' +'<br> <button class="button" id="tryal" onClick="tryal('+arr[i].num+')">VIEW</button>';
    but.innerHTML="load";
    ele.appendChild(div);
   }
var ele2=document.getElementById("main2");
const tryal=(x)=>{
 
    
   
        var elemstoadd3 ="";
        var elemstoadd2 ="";
        var elemstoadd1 ="";
        var ele3=document.getElementById("column3");
        var ele2=document.getElementById("column2");
        var ele1=document.getElementById("column1");
        let sn=1;
        let div1=`<div class="seat">SEAT</div>`;
        let row1='';
        let m=x;
        let d=m/10;
        let r=m%10;
        console.log(r);
        for(let c=1;c<d;c++)
        {
            
            row1+=`<div class="seat">SEAT</div>`;
            sn=sn+10; 
             // number of seats every column 
        }
        //For loop for 3rd seat map
        for(let y=0;y<3;y++)

        {
            
            if((r==8)&&(y==0))
            {
                let div2=`<div class="icol">${row1}${div1}</div>`;
                
                elemstoadd3+=div2;
            }
            else if((r==9)&&(y==0||y==1))
            {
                let div2=`<div class="icol">${row1}${div1}</div>`;
                elemstoadd3+=div2;   
            }
            else if((r==6))
            {
                let div2=`<div class="icol">${row1}${div1}</div>`;
                elemstoadd3+=div2;   
            }
            else
            {
                let div2=`<div class="icol">${row1}</div>`; 
                elemstoadd3+=div2;
            }           
        }
        // console.log(elemstoadd3);
        //elemstoadd3+='<div class="icol"><div class="seat">try</div></div>';
        ele3.innerHTML=elemstoadd3;

        //For loop for 2nd seat map
        for(let y=0;y<4;y++)
        {
            
            if(r==4||r==7||r==8||r==9)
            {
                let div2=`<div class="icol">${row1}${div1}</div>`;
                elemstoadd2+=div2;

            }
            else if((r==5)&&(y==0||y==3))
            {
                let div2=`<div class="icol">${row1}${div1}</div>`;
                elemstoadd2+=div2;
            }
            else{
                let div2=`<div class="icol">${row1}</div>`;
                elemstoadd2+=div2;
            }
            
        }
        ele2.innerHTML=elemstoadd2;
        //For loop for 1st seat map
        for(let y=0;y<3;y++)

        {
             
            if ((r==1)&&(y==0))
            {
                let div2=`<div class="icol">${row1}${div1}</div>`;
                elemstoadd1+=div2;
            }
            else if ((r==2)&&(y==0||y==1))
            {
                let div2=`<div class="icol">${row1}${div1}</div>`;
                elemstoadd1+=div2;
            }
            else if(r==3||r==5||r==6||r==7||r==8||r==9)
            {
                let div2=`<div class="icol">${row1}${div1}</div>`;
                elemstoadd1+=div2;
            }
            else
            {
                let div2=`<div class="icol">${row1}</div>`;
                elemstoadd1+=div2;
            }
            
        }
        ele1.innerHTML=elemstoadd1;

    }


