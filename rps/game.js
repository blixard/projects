//rock-0
//paper-1
//scissor-2
var score = 0
function play(rps){
    var comp = Math.floor(Math.random()*3);
    console.log("rps : " + rps + " comp : " + comp);
    var cs = getValue(comp);
    var us = getValue(rps)
    var res = getResult(comp, rps)
    
    var count = 0
    if(matchWon(res)){
        score = score +1 
    }
    visimg(comp)
    visimgu(rps)
    
    resimg(res)
    document.getElementById("score").innerHTML = score
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

function resimg(res){
    
   
    if(res=="you won"){
        
        document.getElementById("lostimg").style.visibility= "hidden";
        document.getElementById("winimg").style.visibility= "visible"
    }
    else if(res == "you lost"){
        document.getElementById("winimg").style.visibility= "hidden";
        document.getElementById("lostimg").style.visibility= "visible"
    }
    else {
        document.getElementById("winimg").style.visibility= "hidden";
        document.getElementById("lostimg").style.visibility= "hidden";
    }
    
    
}

function visimg(comp){
    if(comp==0){
        document.getElementById("crock").style.visibility = "visible"
        //document.getElementById("crock").style.visibility="hidden";
        document.getElementById("cpaper").style.visibility="hidden";
        document.getElementById("csci").style.visibility="hidden";
    }
    if(comp==1){
        document.getElementById("cpaper").style.visibility = "visible"
        document.getElementById("crock").style.visibility="hidden";
        //document.getElementById("cpaper").style.visibility="hidden";
        document.getElementById("csci").style.visibility="hidden";
    }
    if(comp==2){
        document.getElementById("csci").style.visibility = "visible"
        document.getElementById("crock").style.visibility="hidden";
        document.getElementById("cpaper").style.visibility="hidden";
        //document.getElementById("csci").style.visibility="hidden";
    }
}

function visimgu(comp){
    if(comp==0){
        document.getElementById("urock").style.visibility = "visible"
        //document.getElementById("crock").style.visibility="hidden";
        document.getElementById("upaper").style.visibility="hidden";
        document.getElementById("usci").style.visibility="hidden";
    }
    if(comp==1){
        document.getElementById("upaper").style.visibility = "visible"
        document.getElementById("urock").style.visibility="hidden";
        //document.getElementById("cpaper").style.visibility="hidden";
        document.getElementById("usci").style.visibility="hidden";
    }
    if(comp==2){
        document.getElementById("usci").style.visibility = "visible"
        document.getElementById("urock").style.visibility="hidden";
        document.getElementById("upaper").style.visibility="hidden";
        //document.getElementById("csci").style.visibility="hidden";
    }
}

function matchWon(res){
    if(res == "you won"){
        return true
    }
    else{
        return false
    }
    

}