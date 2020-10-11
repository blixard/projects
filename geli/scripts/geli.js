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
        arr[i][3] = an[1]
        for(var j =0; j<3 ; j++){
            
            var co = str.split("x"+(j+1))
            str = co[1]
            console.log(co)
            arr[i][j] = co[0]
        }
    }

    for(var i =0 ; i<3 ; i++){
        for(var j =0 ; j<4 ; j++){
            console.log(arr[i][j])
        }
    }
    for(var i = 0 ; i<un.length; i++){
        un[i] = "x"+(i+1)
    }
}

