const inputElement = document.querySelector(".input");

//console.log(inputElement.checked)
const bodyElement = document.querySelector("body");

inputElement.checked = JSON.parse(localStorage.getItem("mode"));

updateBody()
function updateBody(){
    if(inputElement.checked){
        bodyElement.style.background = "black";
    }else{
        bodyElement.style.background = "white";
    }
}

inputElement.addEventListener("input",()=>{
    updateBody()
    localStorage()
});

function localStorage(){
    localStorage.setItem("mode",JSON.stringify(inputElement.checked));
}







