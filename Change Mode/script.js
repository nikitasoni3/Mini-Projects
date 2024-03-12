let changeMode = document.querySelector("#mode");
let bodyTag = document.querySelector("body");
let currMode = "light";
changeMode.addEventListener("click", ()=>{
    if(currMode === "light"){
        currMode="dark";
        bodyTag.classList.add("dark");
        bodyTag.classList.remove("light");
    }else{
        currMode = "light";
        bodyTag.classList.add("light");
        bodyTag.classList.remove("dark");
    }
    console.log(currMode);

})