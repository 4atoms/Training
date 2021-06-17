let arr2=[];
let arr3=[];
let name="";
let num="";
let id="";


//     const xhr=new XMLHttpRequest();
//     //xhr.open("GET","https://run.mocky.io/v3/7ab5a34f-6fea-4544-9ab3-78985deae18f");
//     xhr.open("GET","https://run.mocky.io/v3/519b5b96-0cdb-4502-b38e-8b9ce9db24c1");
//     xhr.onload=(resp)=>{
//             console.log(resp.target.response);
           
           
//         //     const xhr2=new XMLHttpRequest();
//         //     xhr.onload=(res)=>{
//         //         console.log(res);
//         //     }
//         //    xhr2.open 
//         const { response }= resp.target;
//         const myjson=JSON.parse(response);
//         for(let i=0;myjson.flights[i]!=undefined;i++)
//         {
//         let xhri=[];
//         xhri[i]= new XMLHttpRequest();
//         xhri[i].open("GET",myjson.flights[i].url);
//         xhri[i].onload=(resp2)=>{
//             console.log(resp2.target.response);
//             const { response }= resp2.target;
            
//             const myjsons2=JSON.parse(response);
            
//             console.log(myjsons2.id);
//             let name=myjsons2.name;
//             let num=myjsons2.seats;
//             let id=myjsons2.id;
           
//             arr2.push({name,num,id});

//         };
//         xhri[i].send();
//         console.log(myjson.flights[i].name);
//         }
//     }; 
    
//     xhr.send();
    

// console.log(arr2);





var arr=[
    {name:"Kingfisher",num:45,id:1},
    {name:"Vis",num:56,id:2},
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
const generate=()=>{


    
        const xhr=new XMLHttpRequest();
        xhr.open("GET","https://run.mocky.io/v3/519b5b96-0cdb-4502-b38e-8b9ce9db24c1");
        xhr.onload=(resp)=>{
                console.log(resp.target.response);
               
               
           
            const { response }= resp.target;
            const myjson=JSON.parse(response);
            for(let i=0;myjson.flights[i]!=undefined;i++)
            {
            let xhri=[];
            xhri[i]= new XMLHttpRequest();
            xhri[i].open("GET",myjson.flights[i].url);
            xhri[i].onload=(resp2)=>{
                console.log(resp2.target.response);
                const { response }= resp2.target;
                
                const myjsons2=JSON.parse(response);
                
                console.log(myjsons2.id);
                let name=myjsons2.name;
                let num=myjsons2.seats;
                let id=myjsons2.id;
               
                arr2.push({name,num,id});
    
            };
            xhri[i].send();
            console.log(myjson.flights[i].name);
            }
        }; 
        
        xhr.send();
    
        

for (var i=0;i<arr2.length;i++){
    var div=document.createElement("div");
    var but=document.createElement("button");
    div.innerHTML=`Flight Name: <h2>${arr2[i].name}</h2> seats available: ${arr2[i].num}<button class="button" id="tryal" onClick="tryal(${arr2[i].num})">VIEW</button>`;
    but.innerHTML="load";
    ele.appendChild(div);
    console.log("entered");
   }
}
var ele2=document.getElementById("main2");

const tryal=(x)=>{
 
    
   
        var elemstoadd3 ="";
        var elemstoadd2 ="";
        var elemstoadd1 ="";
        var ele3=document.getElementById("column3");
        var ele2=document.getElementById("column2");
        var ele1=document.getElementById("column1");
        let s1=1,s2=2,s3=3,s4=4,s5=5,s6=6,s7=7,s8=8,s9=9,s10=10;
        
        let row1='',row2='',row3='',row4='',row5='',row6='',row7='',row8='',row9='',row10='';
        let m=x;
        let d=m/10;
        let r=m%10;

        let c1e=`<div class="seat" id="${((x-r+1))}" onClick="reply(this.id)">ST${(x-r+1)}</div>`;
        let c2e=`<div class="seat" id="${((x-r+2))}"onClick="reply(this.id)">ST${(x-r+2)}</div>`;
        let c3e=`<div class="seat" id="${(x-r+3)}" onClick="reply(this.id)">ST${(x-r+3)}</div>`;
        let c4e=`<div class="seat" id="${(x-r+4)}" onClick="reply(this.id)">ST${(x-r+4)}</div>`;
        let c5e=`<div class="seat" id="${(x-r+5)}" onClick="reply(this.id)">ST${(x-r+5)}</div>`;
        let c6e=`<div class="seat" id="${(x-r+6)}" onClick="reply(this.id)">ST${(x-r+6)}</div>`;
        let c7e=`<div class="seat" id="${(x-r+7)}" onClick="reply(this.id)">ST${(x-r+7)}</div>`;
        let c8e=`<div class="seat" id="${((x-r+8))}" onClick="reply(this.id)">ST${(x-r+8)}</div>`;
        let c9e=`<div class="seat" id="${((x-r+9))}" onClick="reply(this.id)">ST${(x-r+9)}</div>`;
        let c10e=`<div class="seat" id="${((x-r+10))}" onClick="reply(this.id)">ST${(x-r+10)}</div>`;
        let div1=`<div class="seat" id="${(s1)}" onClick="reply(this.id)">ST${s1}</div>`;
        
        for(let c=1;c<d;c++)
        {
            
            row1+=`<div class="seat" id="${(s1)}" onClick="reply(this.id)">ST${s1}</div>`;
            s1=s1+10; 
             // number of seats every column 
        }
        for(let c=1;c<d;c++)
        {
            
            row2+=`<div class="seat" id="${(s2)}" onClick="reply(this.id)">ST${s2}</div>`;
            s2=s2+10; 
             // number of seats every column 
        }
        for(let c=1;c<d;c++)
        {
            
            row3+=`<div class="seat" id="${(s3)}" onClick="reply(this.id)">ST${s3}</div>`;
            s3=s3+10; 
             // number of seats every column 
        }
       
        for(let c=1;c<d;c++)
        {
            
            row4+=`<div class="seat" id="${(s4)}" onClick="reply(this.id)">ST${s4}</div>`;
            s4=s4+10; 
             // number of seats every column 
        }
        for(let c=1;c<d;c++)
        {
            
            row5+=`<div class="seat" id="${(s5)}" onClick="reply(this.id)">ST${s5}</div>`;
            s5=s5+10; 
             // number of seats every column 
        }
        for(let c=1;c<d;c++)
        {
            
            row6+=`<div class="seat" id="${(s6)}" onClick="reply(this.id)">ST${s6}</div>`;
            s6=s6+10; 
             // number of seats every column 
        } 
        for(let c=1;c<d;c++)
        {
            
            row7+=`<div class="seat" id="${(s7)}" onClick="reply(this.id)">ST${s7}</div>`;
            s7=s7+10; 
             // number of seats every column 
        }
        for(let c=1;c<d;c++)
        {
            
            row8+=`<div class="seat" id="${(s8)}" onClick="reply(this.id)">ST${s8}</div>`;
            s8=s8+10; 
             // number of seats every column 
        }
       for(let c=1;c<d;c++)
        {
            
            row9+=`<div class="seat" id="${(s9)}" onClick="reply(this.id)">ST${s9}</div>`;
            s9=s9+10; 
             // number of seats every column 
        }
        for(let c=1;c<d;c++)
        {
            
            row10+=`<div class="seat" id="${(s10)}" onClick="reply(this.id)">ST${s10}</div>`;
            s10=s10+10; 
             // number of seats every column 
        }
      
        //For loop for 3rd seat map
        for(let y=0;y<3;y++)

        {
            if (y==0)
            {s8=s8+1;
            if((r==8)&&(y==0))
            {
                let div2=`<div class="icol">${row8}${c8e}</div>`;
                
                elemstoadd3+=div2;
            }
            else if((r==9)&&(y==0||y==1))
            {
                let div2=`<div class="icol">${row8}${c8e}</div>`;
                elemstoadd3+=div2;   
            }
            // else if((r==6))
            // {
            //     let div2=`<div class="icol">${row8}${c8ex}</div>`;
            //     elemstoadd3+=div2;   
            // }
            else
            {
                let div2=`<div class="icol">${row8}</div>`; 
                elemstoadd3+=div2;
            }   
        }
        else if(y==1)
            {
                s9=s9+1;
            if((r==8)&&(y==0))
            {
                let div2=`<div class="icol">${row9}${c9e}</div>`;
                
                elemstoadd3+=div2;
            }
            else if((r==9)&&(y==0||y==1))
            {
                let div2=`<div class="icol">${row9}${c9e}</div>`;
                elemstoadd3+=div2;   
            }
            // else if((r==6))
            // {
            //     let div2=`<div class="icol">${row9}${c9ex}</div>`;
            //     elemstoadd3+=div2;   
            // }
            else
            {
                let div2=`<div class="icol">${row9}</div>`; 
                elemstoadd3+=div2;
            }
            }
        else if (y==2)
            {
                s10=s10+1;
            if((r==8)&&(y==0))
            {
                let div2=`<div class="icol">${row10}${c10e}</div>`;
                
                elemstoadd3+=div2;
            }
            else if((r==9)&&(y==0||y==1))
            {
                let div2=`<div class="icol">${row10}${c10e}</div>`;
                elemstoadd3+=div2;   
            }
            // else if((r==6))
            // {
            //     let div2=`<div class="icol">${row10}${c10ex}</div>`;
            //     elemstoadd3+=div2;   
            // }
            else
            {
                let div2=`<div class="icol">${row10}</div>`; 
                elemstoadd3+=div2;
            }
            }        
        }
        // console.log(elemstoadd3);
        //elemstoadd3+='<div class="icol"><div class="seat" id="${()}">try</div></div>';
        ele3.innerHTML=elemstoadd3;

        //For loop for 2nd seat map
        for(let y=0;y<4;y++)
        {
           if(y==0){

            s4=s4+1; 
            if(r==4||r==7||r==8||r==9||r==6||r==5)
            {
               
                    let div2=`<div class="icol">${row4}${c4e}</div>`;
                elemstoadd2+=div2;
                
            }
            // else if((r==5)&&(y==0||y==3))
            // {
            
            //     let div2=`<div class="icol">${row4}${c4e}</div>`;
            //     elemstoadd2+=div2;
            // }
            else{
                let div2=`<div class="icol">${row4}</div>`;
                elemstoadd2+=div2;
            }
          }
          else if(y==1)
          {
            s5=s5+1; 
            if(r==7||r==8||r==9||r==5||r==6)
            {
                
               let div2=`<div class="icol">${row5}${c5e}</div>`;
                elemstoadd2+=div2;
                

            }
            // else if((r==5)&&(y==0||y==3))
            // {
            //     let div2=`<div class="icol">${row5}${c5e}</div>`;
            //     elemstoadd2+=div2;
            // }
            else{
                let div2=`<div class="icol">${row5}</div>`;
                elemstoadd2+=div2;
            }
          }
          else if(y==2)
          {
            s6=s6+1; 
            if(r==7||r==8||r==9||r==6)
            {
                    let div2=`<div class="icol">${row6}${c6e}</div>`;
                    elemstoadd2+=div2;
                }
                
    
            // else if((r==5)&&(y==0||y==3))
            // {
            //     let div2=`<div class="icol">${row6}${c6e}</div>`;
            //     elemstoadd2+=div2;
            // }
            else{
                let div2=`<div class="icol">${row6}</div>`;
                elemstoadd2+=div2;
            }
          }
          else if(y==3)
          {
            s7=s7+1; 
            if(r==7||r==8||r==9)
                {
               
                    let div2=`<div class="icol">${row7}${c7e}</div>`;
                    elemstoadd2+=div2;
                }
                
            
            else{
                let div2=`<div class="icol">${row7}</div>`;
                elemstoadd2+=div2;
            }
          }
            
        }
        ele2.innerHTML=elemstoadd2;
        //For loop for 1st seat map
        for(let y=0;y<3;y++)

        {
            if(y==0)
            {   s1=s1+1; 
                if ((r==1)&&(y==0))
                {
                    let div2=`<div class="icol">${row1}${c1e}</div>`;
                    elemstoadd1+=div2;
                }
                else if ((r==2)&&(y==0||y==1))
                {
                    let div2=`<div class="icol">${row1}${c1e}</div>`;
                    elemstoadd1+=div2;
                }
                else if(r==3||r==5||r==6||r==7||r==8||r==9||r==4)
                {
                    let div2=`<div class="icol">${row1}${c1e}</div>`;
                    elemstoadd1+=div2;
                }
                else
                {
                    let div2=`<div class="icol">${row1}</div>`;
                    elemstoadd1+=div2;
                }
            } 
            else if(y==1)
            {
                s2=s2+1; 
            if ((r==1)&&(y==0))
            {
                let div2=`<div class="icol">${row2}${c2e}</div>`;
                elemstoadd1+=div2;
            }
            else if ((r==2)&&(y==0||y==1))
            {
                let div2=`<div class="icol">${row2}${c2e}</div>`;
                elemstoadd1+=div2;
            }
            else if(r==3||r==5||r==6||r==7||r==8||r==9||r==4)
            {
                let div2=`<div class="icol">${row2}${c2e}</div>`;
                elemstoadd1+=div2;
            }
            else
            {
                let div2=`<div class="icol">${row2}</div>`;
                elemstoadd1+=div2;
            }
            }
            else if(y==2)
            {
                s3=s3+1; 
            if ((r==1)&&(y==0))
            {
                let div2=`<div class="icol">${row3}${c3e}</div>`;
                elemstoadd1+=div2;
            }
            else if ((r==2)&&(y==0||y==1))
            {
                let div2=`<div class="icol">${row3}${c3e}</div>`;
                elemstoadd1+=div2;
            }
            else if(r==3||r==5||r==6||r==7||r==8||r==9||r==4)
            {
                let div2=`<div class="icol">${row3}${c3e}</div>`;
                elemstoadd1+=div2;
            }
            else
            {
                let div2=`<div class="icol">${row3}</div>`;
                elemstoadd1+=div2;
            }
            }
        }
        ele1.innerHTML=elemstoadd1;

    };

  let clickItem=[{id:0,val:false}]  

  let ss=[];
  console.log(clickItem);
  
  const reply=(clicked_id)=>
  { let chn= document.getElementById(clicked_id);
      if(ss.indexOf(clicked_id)==-1)
      {
        chn.style.backgroundColor="rgba(108, 116, 124)";
        ss.push(clicked_id);
      }
      else{
    
//    const objIndex=clickItem.findIndex(obj=>obj.id==clicked_id);
   
   ss.forEach((x)=>{if (x==clicked_id){chn.style.backgroundColor="rgba(196, 203, 216)";
                                        console.log("enters loop");
                                        
                                    ss.splice(ss.indexOf(clicked_id),1);
                                    console.log(ss);
                            }
                                    // else{chn.style.backgroundColor="rgba(43, 72, 88)";
                                    // console.log(ss);}
                                });
                                
    
                            }
   
    console.log(clicked_id);
};
// var css = 'table td:hover{ background-color: #000000 }';
// var style = document.createElement('style');

// if (style.styleSheet) {
//     style.styleSheet.cssText = css;
// } else {
//     style.appendChild(document.createTextNode(css));
// }

// document.getElementsByClassName("seat").appendChild(style);
   
   
   
//    const updatedObj = { ...clickItem[objIndex], val: true};
//   for(let f=0;f<150;f++)
//   {
//       clickItem.push({id:f,val:false});
      
//   }
let seatpattern=[1,10,3,4,7,8,2,5,6,9];
let seatpattern2=[1,7,3,4,8,9,5,6,10,2];
const viewBooking=()=>{
     let p=52;
    // for(let i=1;i<=p;i++)
    // {
    //     let d=i/10;
    //     let di=d |0;
    //     let j=i%10;
    //     console.log("di",di,"j",j,"i",i,"so",j+(10*di),"sp",seatpattern2[i-(di*10)+j]+(10*di));
    //     var seatsid=document.getElementById(seatpattern2[j]+(10*di));
    //     seatsid.innerHTML=`<div>:P${i}</div>`;

    // }
    
    let rp=p%10;
    let pri=(p/10)|0;
    for(let i=0;i<p-rp;i++)
        {   let j=i;
            let d=i/10; let di=d |0;
            
            // if(i>=10&&i<20)
            // {
            //     j=j-10;
            // }
            // else if(i>=20&&i<30)
            //   {
            //       j=j-20;
            //   }
            //   else if(i>=30)
            //   {
            //       j=j-30;
            //   }
            if(i>=10){j=j-(10*di);}
              
            
            var seatsid=document.getElementById(i+1);
            // if(i<10){
            seatsid.innerHTML=`<div>ST:${i+1}:P${seatpattern2[j]+10*di}</div>`;
            // }
            // else if(i>=10&&i<20){
            //     seatsid.innerHTML=`<div>:P${seatpattern2[j]+10}</div>`;
            // }
            // else if(i>20){
            //     seatsid.innerHTML=`<div>:P${seatpattern2[j]+20}</div>`;
            // }
        }
        for(let i=1;i<=rp;i++){
        var seatsid2=document.getElementById((seatpattern[i-1]+(10*pri)));
        seatsid2.innerHTML=`<div>ST${i+(10*pri)}:P${i+(10*pri)}</div>`;
        
    }
}