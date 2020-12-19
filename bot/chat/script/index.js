var replies = [
    "name:I am stellarBot ",
    "def:ghi"
];

function fun(){
    var s = document.getElementById("userIp").value;
    s = s.toLowerCase();
    fun2(s);
}

function fun2(s){
    var i
    for(i= 0; i<replies.length ; i++){
        var x = replies[i].split(":");
        if(x[0] == s){
            console.log("found");
            document.getElementById("output").innerHTML=x[1];
            break;
        }
    }
    if(i==replies.length){
        document.getElementById("output").innerHTML="I counldn understand :( ";
    }
}

//question - (wh s,how)
//each question has sub groups
//if not question - command / talking 
//comand - find the verb if it is in directory and sentence and do it 
//talking , try find the closest sentence available in directory to find a reply
//introductions
//return google search of it if nothing else 