let massageBox = document.querySelector(".massage-box");
let btn = document.querySelector(".btn");


let massages = ["massage one" ," massage two" ,"massage three" ,"massage four" ,"massage five"];
let types = ["info" , "success" , "error"];

btn.addEventListener("click" , ()=>{
    
    makeMassege();

})
function makeMassege() {
    let massageNum = Math.floor(Math.random() * massages.length);
    let type = Math.floor(Math.random() * types.length);

    let massage = document.createElement("div");
    massage.classList.add("massage");
    massage.innerHTML = massages[massageNum];

    massage.classList.add(types[type]);

    massageBox.prepend(massage);

    setTimeout(() => {
        massage.classList.add("read");
    }, 3000);
    setTimeout(() => {
        massage.remove();
    }, 5000);
};