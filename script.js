
var flightArray = [
    {"name":"Air India","capacity":95},
    {"name":"Vistara","capacity":50},
    {"name":"Jet Airways","capacity":75},
    {"name":"SpiceJet","capacity":61},
    {"name":"Indigo","capacity":100}
]
var element=document.getElementById("data");
var flights=document.getElementById("flights");
var elementRemo=document.getElementById("clickId");

const displayFlights = () => {
    var i = 0;
    flights.removeChild(elementRemo)
    flightArray.forEach(f => {

        var outerElement = document.createElement("div")
        outerElement.classList.add('outerEle')  
        var elem = document.createElement("div");
        var but = document.createElement("button");
        but.id = i;
        but.textContent = "Check availability"
        but.classList = "displayButton"
        but.onclick = function(){checkAvailability(but.id)}
        elem.classList.add('flightNames')
        elem.innerHTML = " "+f.name+" Flying with "+f.capacity+" seats";
        outerElement.appendChild(elem); 
        outerElement.appendChild(but);         
        element.appendChild(outerElement);        
        i++;
    })
}

const checkAvailability = (index) => {
    var parent = document.createElement("div")
    parent.id = "parent"
    parent.style.display = "block"
    parent.classList.add('popup')

    var closebutton = document.createElement("button")
    closebutton.classList.add('closebutton')
    closebutton.onclick = function() {closePopup()}
    closebutton.innerText = "X"

    parent.appendChild(closebutton)
    var i=1;
    while(i<flightArray[index].capacity){

        var par = document.createElement("div")
        par.classList.add('parent')
    
        var innerdiv1 = document.createElement("div")
        innerdiv1.classList.add('innerdivEnd')
        
        var innerdiv11 = document.createElement("div")
        innerdiv11.classList.add('innerDivEnd1')
        if(i <= flightArray[index].capacity) innerdiv11.innerHTML = i++;
        innerdiv1.appendChild(innerdiv11)

        var innerdiv12 = document.createElement("div")
        innerdiv12.classList.add('innerDivEnd1')
        if(i <= flightArray[index].capacity) innerdiv12.innerHTML = i++;
        innerdiv1.appendChild(innerdiv12)

        var innerdiv13 = document.createElement("div")
        innerdiv13.classList.add('innerDivEnd1')
        if(i <= flightArray[index].capacity) innerdiv13.innerHTML = i++;
        innerdiv1.appendChild(innerdiv13)

        par.appendChild(innerdiv1)

        var innerdiv2 = document.createElement("div")
        innerdiv2.classList.add('innerdivMid')
        
        var innerdiv21 = document.createElement("div")
        innerdiv21.classList.add('innerDivMid1')
        if(i <= flightArray[index].capacity) innerdiv21.innerHTML = i++;
        innerdiv2.appendChild(innerdiv21)

        var innerdiv22 = document.createElement("div")
        innerdiv22.classList.add('innerDivMid1')
        if(i <= flightArray[index].capacity) innerdiv22.innerHTML = i++;
        innerdiv2.appendChild(innerdiv22)

        var innerdiv23 = document.createElement("div")
        innerdiv23.classList.add('innerDivMid1')
        if(i <= flightArray[index].capacity) innerdiv23.innerHTML = i++;
        innerdiv2.appendChild(innerdiv23)

        var innerdiv24 = document.createElement("div")
        innerdiv24.classList.add('innerDivMid1')
        if(i <= flightArray[index].capacity) innerdiv24.innerHTML = i++;
        innerdiv2.appendChild(innerdiv24)

        par.appendChild(innerdiv2)
    
        var innerdiv3 = document.createElement("div")
        innerdiv3.classList.add('innerdivEnd')
        
        var innerdiv31 = document.createElement("div")
        innerdiv31.classList.add('innerDivEnd1')
        if(i <= flightArray[index].capacity) innerdiv31.innerHTML = i++;
        innerdiv3.appendChild(innerdiv31)
        
        var innerdiv32 = document.createElement("div")
        innerdiv32.classList.add('innerDivEnd1')
        if(i <= flightArray[index].capacity) innerdiv32.innerHTML = i++;
        innerdiv3.appendChild(innerdiv32)

        var innerdiv33 = document.createElement("div")
        innerdiv33.classList.add('innerDivEnd1')
        if(i <= flightArray[index].capacity) innerdiv33.innerHTML = i++;
        innerdiv3.appendChild(innerdiv33) 

        par.appendChild(innerdiv3)    
    
        parent.appendChild(par)
    }

    element.appendChild(parent)
}

const closePopup =() => {
    const pop = document.getElementById("parent")
      pop.style.display = "none"
      element.removeChild(pop)
  }

 window.addEventListener('mouseup', function(){
    var pop = document.getElementById('parent');
    if(event.target != null){
      pop.style.display = "none"
      element.removeChild(pop)
    }
  });

 