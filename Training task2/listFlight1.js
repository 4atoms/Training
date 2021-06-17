const listFlight1=()=>{
    var id1=document.getElementById("content1");
    let xhr=new XMLHttpRequest();
    xhr.open("GET","https://run.mocky.io/v3/782a2a9c-cbbc-4995-b304-a41303a58121");
    xhr.onload=(res)=>{
        const data=res.target.response;
        const data1=JSON.parse(data);  
        data1.map((x)=>{
            var div=document.createElement('div');
            div.innerHTML=`<h4>${x.name}<button onclick=${detailSeats(x.url)}>Click Me</button></h4>`;
            id1.appendChild(div);
        })
    }
    xhr.send();
    const detailSeats=(index)=>{
      let xhr1=new XMLHttpRequest();
      xhr1.open("GET",index);
      xhr1.onload=(res)=>{
          const data=res.target.response;
          const data1=JSON.parse(data);
          const seats=data1.seats;
          OpenModal(seats);
      }
      xhr1.send();
    }
    const OpenModal=(index)=>{
        document.getElementById("first").innerHTML =""
        document.getElementById("second").innerHTML = ""
        document.getElementById("third").innerHTML = ""
            console.log(index);
            for (j = 1; j <= index; j++)
            {   
                for(k=0;k<3;k++)
                {   
                    document.getElementById("first").innerHTML+= `<div class= "eachnumber" id="eachnumber${j}">` + [j] + '</div>';
                    j= j + 1;
                }
                for (l = 0; l< 4; l++) 
                {
                    document.getElementById("second").innerHTML += `<div class= "eachnumber" id="eachnumber${j}">` + [j] + '</div>';
                    j = j + 1;
                }
                for (m = 0; m< 3; m++) 
                {
                    if(m<2)
                    {
                        document.getElementById("third").innerHTML += `<div class="eachnumber" id="eachnumber${j}">` + [j] + '</div>';
                        j = j + 1;
                    }
                    else if (m = 2) 
                    {
                        document.getElementById("third").innerHTML += `<div class="eachnumber" id="eachnumber${j}">` + [j] + '</div>';
                    }
                }
            }
  }
}