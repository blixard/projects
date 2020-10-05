//rock-0
//paper-1
//scissor-2

function play(rps){
    var comp = Math.floor(Math.random()*3);
    console.log("rps : " + rps + " comp : " + comp);
    var cs = getValue(comp);
    var us = getValue(rps)
    var res = getResult(comp, rps)
    if(res == "you won"){
        win()
    }
    document.getElementById("output").style.visibility = "visible";
    document.getElementById("comp").innerHTML = cs
    document.getElementById("user").innerHTML = us
    document.getElementById("res").innerHTML = res
   
}

function getValue(comp){
    var cs = "NO VALUE"
    if(comp==0){
        cs = "Rock"
    }
    if(comp==1){
        cs = "Paper"
    }
    if(comp==2){
        cs = "Scissor"
    }
    return cs
}

function getResult(comp , rps){
    var res = "NO RESULT" 
    if(comp==rps){
        //tie
        res = "tied"
    }
    else if((rps==0 && comp==2)|| (rps==1 && comp==0) || (rps==2 && comp==1) ){
        res = "you won"
    }
    else {
        res = "you lost"
    }
    return res
}

function win(){
    var img = document.createElement("img")
    img.src = 'resource/win.png'
    document.getElementById("winimg").appendChild(img)
}