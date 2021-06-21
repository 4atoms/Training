"use strict";

var flightListURL = "https://run.mocky.io/v3/782a2a9c-cbbc-4995-b304-a41303a58121";

var element=document.getElementById("data");
var flights=document.getElementById("flights");
var elementRemo=document.getElementById("clickId");


class Airplane {
    name = "";
    url = "";
    seats = "";

    constructor(name,url,seats){
        this.name = name;
        this.url = url;
        this.seats = seats;
    }

    checkAvailability = (url) => {
        closePopup();
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", url,false);
    var capacity;
    xmlHttp.onload = (resp) => {
        const { response } = resp.target;
        var JSONResp = JSON.parse(response);
        capacity = JSONResp.seats;
    };
    xmlHttp.send();

    var parent = document.createElement("div")
    parent.id = "parent"
    parent.style.display = "block"
    parent.classList.add('popup')

    var closebutton = document.createElement("button")
    closebutton.classList.add('closebutton')
    closebutton.onclick = function() {closePopup()}
    closebutton.innerText = "X"

    parent.appendChild(closebutton)

    //add form
    var form = document.createElement("form")
    var label = document.createElement("label")
    label.setAttribute("for","seatCount")
    label.innerHTML = "Enter number of passengers :"
    form.appendChild(label)
    var input = document.createElement("input")
    input.type = "text"
    input.id = "seatCount"
    form.appendChild(input)
    var button = document.createElement("input")
    button.type = "button"
    button.value = "Assign seats"
    button.onclick = function(){seatAssign(document.getElementById("seatCount").value,capacity)}
    form.appendChild(button)
    parent.appendChild(form)

    var tableParent = document.createElement("div")
    tableParent.id = "tableParent"
    var i=1;
    while(i<=capacity){

        var par = document.createElement("div")
        par.classList.add('parent')
    
        var innerdiv1 = document.createElement("div")
        innerdiv1.classList.add('innerdivEnd')
        
        var innerdiv11 = document.createElement("div")
        innerdiv11.classList.add('innerDivEnd1')
        if(i <= capacity) innerdiv11.innerHTML = i++;
        innerdiv1.appendChild(innerdiv11)

        var innerdiv12 = document.createElement("div")
        innerdiv12.classList.add('innerDivEnd1')
        if(i <= capacity) innerdiv12.innerHTML = i++;
        innerdiv1.appendChild(innerdiv12)

        var innerdiv13 = document.createElement("div")
        innerdiv13.classList.add('innerDivEnd1')
        if(i <= capacity) innerdiv13.innerHTML = i++;
        innerdiv1.appendChild(innerdiv13)

        par.appendChild(innerdiv1)
    // <---------------------------------------------------------------------->
        var innerdiv2 = document.createElement("div")
        innerdiv2.classList.add('innerdivMid')
        
        var innerdiv21 = document.createElement("div")
        innerdiv21.classList.add('innerDivMid1')
        if(i <= capacity) innerdiv21.innerHTML = i++;
        innerdiv2.appendChild(innerdiv21)

        var innerdiv22 = document.createElement("div")
        innerdiv22.classList.add('innerDivMid1')
        if(i <= capacity) innerdiv22.innerHTML = i++;
        innerdiv2.appendChild(innerdiv22)

        var innerdiv23 = document.createElement("div")
        innerdiv23.classList.add('innerDivMid1')
        if(i <= capacity) innerdiv23.innerHTML = i++;
        innerdiv2.appendChild(innerdiv23)

        var innerdiv24 = document.createElement("div")
        innerdiv24.classList.add('innerDivMid1')
        if(i <= capacity) innerdiv24.innerHTML = i++;
        innerdiv2.appendChild(innerdiv24)

        par.appendChild(innerdiv2)
    //<--------------------------------------------------------------->
        var innerdiv3 = document.createElement("div")
        innerdiv3.classList.add('innerdivEnd')
        
        var innerdiv31 = document.createElement("div")
        innerdiv31.classList.add('innerDivEnd1')
        if(i <= capacity) innerdiv31.innerHTML = i++;
        innerdiv3.appendChild(innerdiv31)
        
        var innerdiv32 = document.createElement("div")
        innerdiv32.classList.add('innerDivEnd1')
        if(i <= capacity) innerdiv32.innerHTML = i++;
        innerdiv3.appendChild(innerdiv32)

        var innerdiv33 = document.createElement("div")
        innerdiv33.classList.add('innerDivEnd1')
        if(i <= capacity) innerdiv33.innerHTML = i++;
        innerdiv3.appendChild(innerdiv33) 

        par.appendChild(innerdiv3)    
    
        tableParent.appendChild(par)
        // parent.appendChild(par)
    }
    parent.appendChild(tableParent)
    element.appendChild(parent)
    }
}


const displayFlights = () => {
    flights.removeChild(elementRemo)
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", flightListURL);
    
    xmlHttp.onload = (resp) => {
        const { response } = resp.target;
        var JSONResp = JSON.parse(response);
        JSONResp.forEach(f => {

            const airplane = new Airplane(f.name,f.url,"");

            var outerElement = document.createElement("div")
            outerElement.classList.add('outerEle')
            var elem = document.createElement("div");
            var but = document.createElement("button");
            but.textContent = "Check availability"
            but.classList = "displayButton"
            but.onclick = function(){airplane.checkAvailability(airplane.url)}
            elem.classList.add('flightNames')
            elem.innerHTML = "Flight : "+airplane.name;
            outerElement.appendChild(elem); 
            outerElement.appendChild(but);         
            element.appendChild(outerElement);        
        });
    };
    
    xmlHttp.send();
}

const closePopup =() => {
    const pop = document.getElementById("parent")
    if(pop != null){
        pop.style.display = "none"
        element.removeChild(pop)
    }
}

const seatAssign = (seats,capacity) => {
    console.log("seats to be assigned"+seats);
    
    if(seats > capacity){
        alert("Passenger count increases the total capacity! Please enter again.")
        return
    }
    const parent = document.getElementById("tableParent")
    var children = parent.children
    var count = 1
    var mid = 1
    while(count < seats){
        for(var i=0;i<children.length;i++){

            if(canAssign(children[i].firstChild.firstChild,false)){
                assignIt(children[i].firstChild.firstChild,count)
                if(count >= seats) return
                count++
            }

            if(canAssign(children[i].lastChild.lastChild,false)){
                assignIt(children[i].lastChild.lastChild,count)
                if(count >= seats) return
                count++
            }

            if(canAssign(children[i].firstChild.lastChild,false)){
                assignIt(children[i].firstChild.lastChild,count)
                if(count >= seats) return
                count++
            }

            if(canAssign(children[i].children[mid].firstChild,false)){
                assignIt(children[i].children[mid].firstChild,count)
                if(count >= seats) return
                count++
            }

            if(canAssign(children[i].children[mid].lastChild,false)){
                assignIt(children[i].children[mid].lastChild,count)
                if(count >= seats) return
                count++
            }

            if(canAssign(children[i].lastChild.firstChild,false)){
                assignIt(children[i].lastChild.firstChild,count)
                if(count >= seats) return
                count++
            }

            //fill rest seats
            var firstColumnSeats = children[i].firstChild.children
            for(var j=0;j<firstColumnSeats.length;j++){
                
                if(canAssign(firstColumnSeats[j],true)){
                    assignIt(firstColumnSeats[j],count)
                    if(count >= seats) return
                    count++
                }
            }

            var middleColumnSeats = children[i].children[mid].children
            for(var j=0;j<middleColumnSeats.length;j++){
                if(canAssign(middleColumnSeats[j],true)){
                    assignIt(middleColumnSeats[j],count)
                    if(count >= seats) return
                    count++
                }
            }

            var lastColumnSeats = children[i].lastChild.children
            for(var j=0;j<lastColumnSeats.length;j++){
                if(canAssign(lastColumnSeats[j],true)){
                    assignIt(lastColumnSeats[j],count)
                    if(count >= seats) return
                    count++
                }
            }

        }
    }

}

const assignIt = (elemToAssign, count) => {
    elemToAssign.innerHTML += " - P"+count
    elemToAssign.classList.add("selectedSeat")
}

const canAssign = (elemToCheck,elemHasSeat) => {
    return elemHasSeat == false ? elemToCheck.innerHTML!="" : elemToCheck.innerHTML!="" && elemToCheck.innerHTML.indexOf("P")==-1
}