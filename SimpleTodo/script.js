const inputBox = document.getElementById("input-box");
const listcontainer = document.getElementById("list-container");
const date = document.getElementById("input-date");



function AddTask(){
    if(inputBox.value === '')
    {
        alert("Please write something!")
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listcontainer.appendChild(li);

        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);

        let p = document.createElement("p");
        p.innerHTML = date.value;
        li.appendChild(p);

    }
        inputBox.value ="";
        savedata();
}

listcontainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        savedata();
    }
    
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        savedata()
    }
},false);

// to save data in localstorage
function savedata(){
    localStorage.setItem("data", listcontainer.innerHTML);
}


// to gate the data from localstorage
function showTask(){
    listcontainer.innerHTML = localStorage.getItem("data")
}
showTask();

