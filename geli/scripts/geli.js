console.log("working")
var arr = new Array(3)
var un = new Array(3)
function solve(){
    var eqs = document.getElementById("eqs").value
    eq = eqs.split(";")
    console.log(eq)
    console.log(eq.length)
    for(var i = 0; i<eq.length; i++){
        arr[i] = new Array(4)
        console.log(eq[i])
        var str = eq[i]
        var an = str.split("=")
        arr[i][3] = parseInt(an[1])
        for(var j =0; j<3 ; j++){
            
            var co = str.split("x"+(j+1))
            str = co[1]
            console.log(co)
            arr[i][j] = parseInt(co[0])
        }
    }

    for(var i =0 ; i<3 ; i++){
        for(var j =0 ; j<4 ; j++){
            console.log(arr[i][j])
        }
    }
    geli()
    console.log("hello mofo")
    for(var i = 0 ; i<un.length; i++){
        un[i] = "x"+(i+1)
    }
    var matrix =""
    for(var i = 0 ; i<arr.length; i++){
        matrix = matrix + arr[i] +"->"
    }
    console.log(matrix) 
    document.getElementById("matrix").innerHTML = matrix
}

function geli(){
    console.log(arr)
    console.log("working")
    var i = 0
    var j = 0
    
    while(i < 3){
        pivot = arr[i][j]
        for (var x = i+1; x<3; x++){
            if(arr[x][j]!=0){
                console.log("in condition")
                var m = arr[x][j]/pivot
                console.log("m : " + m)
                console.log("arr[x].length : " + arr[x].length)
                for (var k = 0 ; k<arr[x].length ; k++){
                    arr[x][k] = arr[x][k] - (arr[i][k] * m )
                    console.log("changes made")
                }
            }
        }
        i++
        j++
        console.log(arr)
        console.log("i :" + i + " j : "+j )
    }
}

function fun(){
    var i =1
    un[un.length-i] = arr[arr.length-1][arr[arr.length-1].length]/arr[arr.length-1][arr[arr.length-1].length]  
}