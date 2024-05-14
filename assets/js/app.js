


function onoff(){
    let bulb = document.querySelector("#bulb");
    
    if (bulb.src.includes("pic_bulbon.gif")){
        document.querySelector("#bulb").src = "/assets/img/pic_bulboff.gif"
    } else{
        document.querySelector("#bulb").src = "/assets/img/pic_bulbon.gif";
    }
}
