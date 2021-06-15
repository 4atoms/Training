const flightData=()=>{
    let flightList=[
                {Name:'Indigo',Seats:50},
                {Name:'Air India',Seats:100},
                {Name:'Spice Jet',Seats:150},
                {Name:'Go Air',Seats:200},
                {Name:'Air Asia India',Seats:250},
                {Name:'Vistara',Seats:150},
                {Name:'Alliance',Seats:50},
                {Name:'Truset',Seats:70}
            ];
      function generateTableHead(table, data) {
        let thead = table.createTHead();
        let row = thead.insertRow();
        for (let key of data) {
          let th = document.createElement("th");
          let text = document.createTextNode(key);
          th.appendChild(text);
          row.appendChild(th);
        }
        let th = document.createElement("th");
        let text = document.createTextNode("Detail");
        th.appendChild(text);
        row.appendChild(th);
      }
      
      function generateTable(table, data) {
        for (let element of data) {
          let row = table.insertRow();
          for (key in element) {
            let cell = row.insertCell();
            let text = document.createTextNode(element[key]);
            cell.appendChild(text);
          }
          let cell = row.insertCell();
          let button = document.createElement('button');
          button.innerHTML=("Detail");
          cell.appendChild(button);
          button.addEventListener ("click", function (elem) {
            elem=element;
            alert('  Seats: '+elem.Seats);
          });
        }
      }
      
      let table = document.querySelector("table");
      let data = Object.keys(flightList[0]);
      generateTableHead(table, data);
      generateTable(table, flightList);
}
 