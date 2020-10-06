console.log("working")
MAX = 4
var words = ["pqr" , "xyz" , "world" , "foo"]
var count = 0

function check(){
    
    var typed = document.getElementById("text").value
    var res = encryption1(typed)
    document.getElementById("check").innerHTML = res
    console.log(typed)
    if(res==s){
        document.getElementById("correct").style.visibility="visible"
        console.log("correct")
        
    }
}

//button next - sub levels
function next(){
    document.getElementById("correct").style.visibility = "hidden"
    count = count+1
        setVis()
        if(count==MAX-1){
            count = 0
            document.getElementById("correct").innerHTML = "you cleared all levels in encryption 1"
        }
}

//set visibility

function setVis(){
    s = words[count]
    document.getElementById("word").innerHTML = s
}

//encryptions

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