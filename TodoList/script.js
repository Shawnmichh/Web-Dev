let ctr=1;
function addTodo(){
    const inputEl=document.querySelector("input");
    const value=inputEl.value;
    if(value==""){
        alert("Please enter something which you want to do for the day!");
        return;
    }

    const newDivEl=document.createElement("div");
    newDivEl.setAttribute("id",ctr);
    newDivEl.innerHTML="<div style='color:rgb(228, 209, 209); font-size:30px; display:flex; padding-left:650px'><div>"+ctr+"."+value+"</div><button style='margin-left:20px; padding-left:20px; padding-right:20px; color:rgb(228, 209, 209); background-color: blueviolet; border-radius:10px;' onclick='deleteTodo(" +ctr+ ")'>Delete</button></div>";
    ctr=ctr+1;
    const parentEl=document.querySelector("body");
    parentEl.appendChild(newDivEl);
}

function deleteTodo(index){
    const el=document.getElementById(index);
    el.parentNode.removeChild(el);
}