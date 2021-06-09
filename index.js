
const openpop=()=>{
    let elem=document.getElementById("modal");
    elem.style.display="block";
}


const closepop=()=>{
    let elem=document.getElementById("modal");
    elem.style.display="none";

}

const deets=()=>{
    let elem=document.getElementById("name").value;
    console.log(elem);
    let elem1=document.getElementById("num").value;
    console.log(elem1);
    document.getElementById("name").value='';
    document.getElementById("num").value='';

    
}