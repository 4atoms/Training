





class Airplane
{
    flightName
    url
    seats
    passengers
    
    constructor(flightName,url)
    {
        this.flightName=flightName;
        this.url=url;
    
    }

    getSeatData=()=>{
        let xhr2= new XMLHttpRequest();
        xhr2.open("GET",this.url);
        xhr2.onload=(resp2)=>{
            console.log(resp2.target.response);
            const { response }= resp2.target;
            const myjson2=JSON.parse(response);
            this.seats=myjson2.seats;
            this.renderSeats();

        };
        xhr2.send();
        
        // const renderSeats=()=>{
    
        //     console.log("entered render");
        //     formSeats(this.seats);
        
    
    
        // };
        // renderSeats();
        
        
    };
    renderSeats=()=>{
        formSeats(this.seats);
    }     
}   
            
        var arrayOfFlights=[];
        var ele=document.getElementById("content");
        let div1=document.createElement("div");
        const viewFlights=()=>{
            var flightListURL = "https://run.mocky.io/v3/519b5b96-0cdb-4502-b38e-8b9ce9db24c1";
            var xhr = new XMLHttpRequest();
            xhr.open("GET", flightListURL);
            xhr.onload = (resp) => {
                const { response } = resp.target;
                console.log(response);
                var myjson= JSON.parse(response);
                for(let i=0;myjson.flights[i]!=undefined;i++)
                    { 
                    //console.log(myjson.flights[i].name,"url",myjson.flights[i].url);
                    var a1 = new Airplane(myjson.flights[i].name,myjson.flights[i].url);
                    arrayOfFlights.push(a1);
                    
                    div1+=`<div>Flight Name: <h2>${myjson.flights[i].name}</h2> <button class="button" id="${myjson.flights[i].url}" onclick="rendertry('${myjson.flights[i].url}')" >VIEW</button></div>`;
                    //
                    

                    };
                    ele.innerHTML=div1;
            };
            xhr.send();
            console.log("arrayofflights",arrayOfFlights);


        };
        const rendertry=(urlm)=>{
            arrayOfFlights.forEach(x=>{if(x.url==urlm){x.getSeatData();}})
            console.log("entered");
        };




const formSeats=(x)=>{
    console.log("entere form seats");
var elemstoadd3 ="",elemstoadd2 ="",elemstoadd1 ="";
var ele3=document.getElementById("column3");
var ele2=document.getElementById("column2");
var ele1=document.getElementById("column1");
var imain=document.getElementById("main");
let allcol=[col1='',col2='',col3='',col4='',col5='',col6='',col7='',col8='',col9='',col10=''];
var i=1;
let capacity=x;
while(i<=capacity){
    //Adding seat divs for 1st seat map column
    if(i <= capacity) {col1+=`<div class="seat" id="${(i)}" onClick="reply(this.id)">ST${i}</div>`; i++;}
    if(i <= capacity) {col2+=`<div class="seat" id="${(i)}" onClick="reply(this.id)">ST${i}</div>`; i++;}
    if(i <= capacity) {col3+=`<div class="seat" id="${(i)}" onClick="reply(this.id)">ST${i}</div>`; i++;}
    //Adding seat divs for 2nd seat map column
    if(i <= capacity) {col4+=`<div class="seat" id="${(i)}" onClick="reply(this.id)">ST${i}</div>`; i++;}
    if(i <= capacity) {col5+=`<div class="seat" id="${(i)}" onClick="reply(this.id)">ST${i}</div>`;i++; }
    if(i <= capacity) {col6+=`<div class="seat" id="${(i)}" onClick="reply(this.id)">ST${i}</div>`;i++; }
    if(i <= capacity) {col7+=`<div class="seat" id="${(i)}" onClick="reply(this.id)">ST${i}</div>`;i++; }
    //Adding seat divs for 3rd seat map column    
    if(i <= capacity) {col8+=`<div class="seat" id="${(i)}" onClick="reply(this.id)">ST${i}</div>`;i++;}
    if(i <= capacity) {col9+=`<div class="seat" id="${(i)}" onClick="reply(this.id)">ST${i}</div>`;i++;}
    if(i <= capacity) {col10+=`<div class="seat" id="${(i)}" onClick="reply(this.id)">ST${i}</div>`;i++;}
    }
elemstoadd1+=`<div class="icol" id ="icol"> ${col1} </div>`;
elemstoadd1+=`<div class="icol" id ="icol">${col2} </div>`;
elemstoadd1+=`<div class="icol" id ="icol"> ${col3} </div>`;
ele1.innerHTML=elemstoadd1;
elemstoadd2+=`<div class="icol" id ="icol"> ${col4} </div>`;
elemstoadd2+=`<div class="icol" id ="icol" >${col5} </div>`;
elemstoadd2+=`<div class="icol" id ="icol" >${col6} </div>`;
elemstoadd2+=`<div class="icol" id ="icol" >${col7} </div>`;
ele2.innerHTML=elemstoadd2;
elemstoadd3+=`<div class="icol" id ="icol" >${col8} </div>`;
elemstoadd3+=`<div class="icol" id ="icol" >${col9} </div>`;
elemstoadd3+=`<div class="icol" id ="icol" >${col10} </div>`;
ele3.innerHTML=elemstoadd3;
};

//Function to record seat clicks and change its colour
let ss=[];
const reply=(clicked_id)=>
  { let chn= document.getElementById(clicked_id);
      if(ss.indexOf(clicked_id)==-1)
      {
        chn.style.backgroundColor="rgba(108, 116, 124)";
        ss.push(clicked_id);
      }
      else{ ss.forEach((x)=>{if (x==clicked_id){chn.style.backgroundColor="rgba(196, 203, 216)";
                                        console.log("enters loop");
                                        ss.splice(ss.indexOf(clicked_id),1);
                                    console.log(ss);}
                            });
            }
   console.log(clicked_id);
};
let seatpattern2=[1,7,3,4,8,9,5,6,10,2];
const viewBooking=()=>{
    let p=document.getElementById("pass").value;
    document.getElementById("pass").value='';
    let rp=p%10;
    let pri=(p/10)|0;
    for(let i=0;i<p-rp;i++)
    {   let j=i;
        let d=i/10; let di=d |0;
        if(i>=10)
        {j=j-(10*di);}
        var seatsid=document.getElementById(i+1);
        seatsid.innerHTML=`<div>ST:${i+1}:P${seatpattern2[j]+10*di}</div>`;
    }
    for(let i=1;i<=rp;i++){
    var seatsid2=document.getElementById((seatpattern[i-1]+(10*pri)));
    seatsid2.innerHTML=`<div>ST${i+(10*pri)}:P${i+(10*pri)}</div>`;
    }
};