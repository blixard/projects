console.log("hi there")

var matrix =  new Array(5)
var num = 0 
var row = num
var col =  num

function setP(){
    var address = window.location.href;
    var equation = address.split("equations=");
    num = equation[1];
    for(var i = 0 ; i<5 ; i++){
        document.getElementById("eq"+(i+1)).style.visibility = "hidden";
    }

    for(var i = 0 ; i<num ; i++){
        document.getElementById("eq"+(i+1)).style.visibility = "visible"
    }

    for(var k = 0 ; k<5 ; k++){
        for(var l = 0 ; l < 6 ; l++){
            document.getElementById("eq"+(k+1)+"c"+(l+1)).style.visibility = "hidden";
        }
    }
    
    for(var i = 0 ; i<num ; i++){
        document.getElementById("eq"+(i+1)+"c"+6).style.visibility = "visible";
        
        for(var j = 0 ; j < num ; j++){
        document.getElementById("eq"+(i+1)+"c"+(j+1)).style.visibility = "visible";
        }
    }
    console.log(num) 
}

function solve(){
    
    //set the values to the matrix
    for(var i=0;i<5;i++){
        matrix [i] = new Array(6)
        for(var j = 0; j<6; j++){
            matrix[i][j] = parseInt(document.getElementById("e"+(i+1)+"x"+(j+1)).value)
        }
    }

    //displaying the matrix values in console
    for(var i=0;i<5;i++){
        for(var j = 0; j<6; j++){
            console.log(matrix[i][j])
        }
    }
    geli()
    // var resMat = ""
    // for(var i=0; i<5; i++){
    //     resMat = resMat + "r"+(i+1) + " : "+matrix[i] + " ";
    // }

    //displaying the matrix on the page
    for(var i = 0 ; i<num ; i++){
        for(var j = 0 ; j <num  ; j++){
            document.getElementById("matrixr"+(i+1) + "c"+(j+1)).innerHTML = matrix[i][j]
        }
    }
     
    for(var i = 0 ; i<num ; i++){
            document.getElementById("matrixr"+(i+1) + "c"+(6)).innerHTML = matrix[i][j]
        
    }
     
    
}

function geli(){
    console.log("working")
    var i = 0
    var j = 0
    
    while(i < 5){
        pivot = matrix[i][j]
        for (var x = i+1; x<5; x++){
            if(matrix[x][j]!=0){
                console.log("in condition")
                var m = matrix[x][j]/pivot
                console.log("m : " + m)
                console.log("arr[x].length : " + matrix[x].length)
                for (var k = 0 ; k<matrix[x].length ; k++){
                    matrix[x][k] = matrix[x][k] - (matrix[i][k] * m )
                    console.log("changes made")
                }
            }
        }
        i++
        j++
        console.log(matrix)
    }
}



    //eq-1
    // var e1x1 = document.getElementById("e1x1").value
    // var e1x2 = document.getElementById("e1x2").value 
    // var e1x3 = document.getElementById("e1x3").value 
    // var e1x4 = document.getElementById("e1x4").value 
    // var e1x5 = document.getElementById("e1x5").value
    // //e1-2 
    // var e2x1 = document.getElementById("e2x1").value
    // var e2x2 = document.getElementById("e2x2").value 
    // var e2x3 = document.getElementById("e2x3").value 
    // var e2x4 = document.getElementById("e2x4").value 
    // var e2x5 = document.getElementById("e2x5").value
    // //eq -3 
    // var e3x1 = document.getElementById("e3x1").value
    // var e3x2 = document.getElementById("e3x2").value 
    // var e3x3 = document.getElementById("e3x3").value 
    // var e3x4 = document.getElementById("e3x4").value 
    // var e3x5 = document.getElementById("e3x5").value 
    // //eq -4
    // var e4x1 = document.getElementById("e4x1").value
    // var e4x2 = document.getElementById("e4x2").value 
    // var e4x3 = document.getElementById("e4x3").value 
    // var e4x4 = document.getElementById("e4x4").value 
    // var e4x5 = document.getElementById("e4x5").value
    // //eq-5 
    // var e5x1 = document.getElementById("e5x1").value
    // var e5x2 = document.getElementById("e5x2").value 
    // var e5x3 = document.getElementById("e5x3").value 
    // var e5x4 = document.getElementById("e5x4").value 
    // var e5x5 = document.getElementById("e5x5").value