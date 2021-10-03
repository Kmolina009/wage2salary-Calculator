// Upon page load transform the rotational degree(position) for each screww
function screwHeadRotation(){
    let screwHeads = document.querySelectorAll(".screw-head")
    //Randomly applies rotational position of screws
    // document.querySelector(".screw-head").style.transform = "rotate(-45deg)";
    // let screwHeads = document.querySelectorAll(".screw-head")
    for (let i = 0; i < screwHeads.length; i++) {
        screwHeads[i].style.transform = `rotate(${Math.random(180-1)*1000}deg)`;   
    }
}

screwHeadRotation()