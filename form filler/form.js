let final=document.querySelector(".preview");

function submit(){
    let type=document.querySelector(".dropdown").value;
    let inputEl=document.querySelector(".in1").value;

    let diveEL=document.createElement("div");

    let field;

    if(type==="Text Input"){
        field=document.createElement("div");
        field.innerHTML=`${inputEl}`;
        field.classList.add("in2");
    }else if(type==="Checkbox"){
        field=document.createElement("div");
        field.innerHTML=`${inputEl}`;
        let inp=document.createElement("input");
        inp.type="checkbox";
        field.classList.add("in2");
        field.appendChild(inp);
    }else if(type==="Radio Button"){
        field=document.createElement("div");
        field.innerHTML=`${inputEl}`;
        let inp=document.createElement("input");
        inp.type="radio";
        field.classList.add("in2");
        field.appendChild(inp);
    }else{
        alert("Please enter a valid Field!")
        return;
    }

    diveEL.appendChild(field);
    final.appendChild(diveEL);
}