const inputb = document.getElementById("inputbox");
const list = document.getElementById("list-container");
addTask = () => {
    if (inputb.value == '')
        alert("plz write somwthing");
    else {
        let li = document.createElement("li");
        li.innerHTML = inputb.value;
        list.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputb.value = "";
    savedata()
}
 list.addEventListener("click",function(e){
    if(e.target.tagName == "LI"){
    e.target.classList.toggle("checked");
    savedata()
    }
    else if(e.target.tagName == "SPAN")
    {
        e.target.parentElement.remove();
        savedata()
    }
 },false);
 function savedata(){
    localStorage.setItem("data",list.innerHTML);
 }
 showlist = ()=>{
    list.innerHTML = localStorage.getItem("data");
 }
 showlist();