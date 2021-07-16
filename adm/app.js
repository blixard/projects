function fun(){
    console.log("yoo")
    var range = document.getElementById("range").value
    range = range.toString().split(" ")
    var num = document.getElementById("num").value
    var arr = num.toString().split(" ")
    var count = 0
    for(var i=range[0]; i<range[1]; i++ ){
        var flag = true;
        for(var j= 0; j<arr.length; j++){
            if(i%arr[j]==0){
                flag= false;
                break;
            }
        }
        if(flag == true){
            count++;
        }
    }
    document.getElementById("res").innerHTML = count + " is the number "
    count = 0
}