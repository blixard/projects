
console.log("working")
MAX = 4
var words = ["pqr" , "xyz" , "mno" , "foo"]
var count = 0
var count2 = 0
var level = 1
var attempts = 0

function check(){
    var typed = " "
    typed = document.getElementById("text").value
    document.getElementById("text").value = ""
    var res = encryption1(typed)
    if(typed==" "){
        document.getElementById("check").innerHTML = "type bro"
    }
    document.getElementById("check").innerHTML = res
    console.log(typed)
    if(res==s){
        document.getElementById("correct").style.visibility="visible"
        if(count2==1){
            document.getElementById("leveldone").style.visibility = "visible"
            document.getElementById("mbody").style.visibility = "hidden"
            eNo = eNo +1
            count2=0
        }
        console.log("correct")
    }
    else {
        attempts++
        document.getElementById("wrong").innerHTML = "wrong attempts-" + attempts
    }
    
}

//button next - sub levels
function next(){
    document.getElementById("correct").style.visibility = "hidden"
    document.getElementById("check").innerHTML = "nothing typed"
    count = count+1
        setVis()
        if(count==MAX-1){
            count = 0
            count2=1
            document.getElementById("correct").innerHTML = "you cleared all levels in encryption "+level
            
        }
}

//set visibility

function setVis(){
    count2=0
    s = words[count]
    document.getElementById("word").innerHTML = s
    document.getElementById("level").innerHTML = "stage "+(level) + " level " + (count+1)
}

//encryption

function encryption1(s){
    var res =""
    for(i=0; i<s.length ; i++){
        var c = s[i]
        var x = c.charCodeAt(0)
        x=x+1
        c=String.fromCharCode(x)
        res = res+c
        console.log(res)
    }
    return res
}
