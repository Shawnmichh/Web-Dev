function addTask(ID){
    let tasktext=prompt("Enter a task:");
    let taskdescrip=prompt("Enter description of task:") || "No description given";
    if(tasktext){
        let divEl=document.createElement("div");
        divEl.classList.add("task");
        divEl.draggable=true;
        divEl.ondragstart=drag;
        divEl.id="task"+new Date().getTime();
        divEl.innerHTML=`<h2 class="h2">${tasktext}</h2>
        <h4 class="h4">${taskdescrip}</h4>`;
        let parEl=document.getElementById(ID);
        let butEl=document.querySelector("button");
        parEl.insertBefore(divEl,butEl);
    }
}

function drag(event){
    event.dataTransfer.setData("text",event.target.id);
}

function allowdrop(event){
    event.preventDefault();
}


function drop(event){
    event.preventDefault();
    let data=event.dataTransfer.getData("text");
    let dragEl=document.getElementById(data);
    let targetDiv=event.target;

    if(targetDiv.tagName==="BUTTON"){
        targetDiv=targetDiv.parentNode;
    }

    let butEl=targetDiv.querySelector("button");
    targetDiv.insertBefore(dragEl,butEl);
}