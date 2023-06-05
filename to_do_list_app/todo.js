const txt = document.getElementById("txt");
const list = document.getElementById("list");

function addItem(){
    if(txt.value === ""){
        alert("You didn't Add a Task");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = txt.value;
        list.appendChild(li);
        // let dmy = document.createElement("p");
        // // let date = new Date();
        
        // dmy.innerHTML = date;
        // li.appendChild(dmy)

        span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);

    }
    txt.value = "";
    refreshPage();

}

list.addEventListener("click",function(clk){
    if(clk.target.tagName === "LI"){
        clk.target.classList.toggle("check");
    refreshPage();
        
    }
    else if(clk.target.tagName === "SPAN"){
        clk.target.parentElement.remove();
    refreshPage();

    }
});

function refreshPage(){
    localStorage.setItem("data",list.innerHTML);
}

function getList(){
    list.innerHTML = localStorage.getItem("data");
}
getList();