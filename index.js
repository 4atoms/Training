"use strict";

const fillForm = () =>{
    var fName = document.getElementById("fName").value
    var lName = document.getElementById("lName").value
    var phno = document.getElementById("phno").value
    var email = document.getElementById("email").value

    console.log("---Details entered----")

    if(/^[A-Za-z ]+$/.exec(fName)){
        console.log("First Name : "+fName)
    } else{
        alert("Invalid first name entered")
        return
    }

    if(/^[A-Za-z ]+$/.exec(lName)){
        console.log("Last Name : "+lName)
    } else{
        alert("Invalid last name entered")
        return
    }

    if((/^[0-9]+$/.exec(phno) && phno.length == 10)){
        console.log("Phone number : "+phno)
    } else{
        alert("Invalid phone number entered")
        return
    }

    if(/[A-Za-z0-9]+@[A-Za-z0-9]+.[A-Za-z]/igm.exec(email)){
        console.log("Email Id : "+email)
    } else{
        alert("Invalid email id entered")
        return
    }   
    
    closePopup()
    alert("Form submitted successfully !")

    
}

const showPopup =() => {
    const pop = document.getElementById("popup")
    pop.style.display = "block"
}

const closePopup =() => {
    const pop = document.getElementById("popup")
    pop.style.display = "none"
}
