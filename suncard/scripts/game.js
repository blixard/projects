var max = 7
//0-sun
//1 - di
//2 - gold
//3 - sil
//4 - ro
//5 - half
//6 - dark
function game(){
    var comp = Math.floor(Math.random()*7)
    var user1 = Math.floor(Math.random()*7)
    var user2 = Math.floor(Math.random()*7)
    var user3 = Math.floor(Math.random()*7)
    console.log(" " + user1 + " " + user2 + " " + user3)
    display_user1(user1)
    display_user2(user2)
    display_user3(user3)
    display_comp(comp)
    console.log(comp)
}

function play(){
    document.getElementById("play_btn").style.visibility = "hidden"
    game()
}
//user1 image

function display_user1(user1){
    if(user1==0){
        document.getElementById("uimage1").src="../suncard/res/sun.jpg"
        document.getElementById("utitle1").innerHTML = "THE SUN"
        document.getElementById("upower1").innerHTML = "power : 9000"
    }
    else if(user1==1){
        document.getElementById("uimage1").src="../suncard/res/dimond_moon.png"
        document.getElementById("utitle1").innerHTML = "dimond moon"
        document.getElementById("upower1").innerHTML = "power : 1000"
    }
    else if(user1==2){
        document.getElementById("uimage1").src="../suncard/res/golden_moon.png"
        document.getElementById("utitle1").innerHTML = "golden moon"
        document.getElementById("upower1").innerHTML = "power : 500"
    }
    else if(user1==3){
        document.getElementById("uimage1").src="../suncard/res/silver_moon.png"
        document.getElementById("utitle1").innerHTML = "silver moon"
        document.getElementById("upower1").innerHTML = "power : 300"
    }
    else if(user1==4){
        document.getElementById("uimage1").src="../suncard/res/rock_moon.png"
        document.getElementById("utitle1").innerHTML = "rock moon"
        document.getElementById("upower1").innerHTML = "power : 100"
    }
    else if(user1==5){
        document.getElementById("uimage1").src="../suncard/res/half_moon.png"
        document.getElementById("utitle1").innerHTML = "half moon"
        document.getElementById("upower1").innerHTML = "power : 50"
    }
    else if(user1==6){
        document.getElementById("uimage1").src="../suncard/res/dark_moon.png"
        document.getElementById("utitle1").innerHTML = "dark moon"
        document.getElementById("upower1").innerHTML = "power : -100"
    }

    console.log("gone to image 1")
        
    
}

//user 2 image
function display_user2(user1){
    if(user1==0){
        document.getElementById("uimage2").src="../suncard/res/sun.jpg"
        document.getElementById("utitle2").innerHTML = "THE SUN"
        document.getElementById("upower2").innerHTML = "power : 9000"
    }
    else if(user1==1){
        document.getElementById("uimage2").src="../suncard/res/dimond_moon.png"
        document.getElementById("utitle2").innerHTML = "dimond moon"
        document.getElementById("upower2").innerHTML = "power : 1000"
    }
    else if(user1==2){
        document.getElementById("uimage2").src="../suncard/res/golden_moon.png"
        document.getElementById("utitle2").innerHTML = "golden moon"
        document.getElementById("upower2").innerHTML = "power : 500"
    }
    else if(user1==3){
        document.getElementById("uimage2").src="../suncard/res/silver_moon.png"
        document.getElementById("utitle2").innerHTML = "silver moon"
        document.getElementById("upower2").innerHTML = "power : 300"
    }
    else if(user1==4){
        document.getElementById("uimage2").src="../suncard/res/rock_moon.png"
        document.getElementById("utitle2").innerHTML = "rock moon"
        document.getElementById("upower2").innerHTML = "power : 100"
    }
    else if(user1==5){
        document.getElementById("uimage2").src="../suncard/res/half_moon.png"
        document.getElementById("utitle2").innerHTML = "half moon"
        document.getElementById("upower2").innerHTML = "power : 50"
    }
    else if(user1==6){
        document.getElementById("uimage2").src="../suncard/res/dark_moon.png"
        document.getElementById("utitle2").innerHTML = "dark moon"
        document.getElementById("upower2").innerHTML = "power : -100"
    }

    console.log("gone to image 2")
}


//user 3 image
function display_user3(user1){
    if(user1==0){
        document.getElementById("uimage3").src="../suncard/res/sun.jpg"
        document.getElementById("utitle3").innerHTML = "THE SUN"
        document.getElementById("upower3").innerHTML = "power : 9000"
    }
    else if(user1==1){
        document.getElementById("uimage3").src="../suncard/res/dimond_moon.png"
        document.getElementById("utitle3").innerHTML = "dimond moon"
        document.getElementById("upower3").innerHTML = "power : 1000"
    }
    else if(user1==2){
        document.getElementById("uimage3").src="../suncard/res/golden_moon.png"
        document.getElementById("utitle3").innerHTML = "golden moon"
        document.getElementById("upower3").innerHTML = "power : 500"
    }
    else if(user1==3){
        document.getElementById("uimage3").src="../suncard/res/silver_moon.png"
        document.getElementById("utitle3").innerHTML = "silver moon"
        document.getElementById("upower3").innerHTML = "power : 300"
    }
    else if(user1==4){
        document.getElementById("uimage3").src="../suncard/res/rock_moon.png"
        document.getElementById("utitle3").innerHTML = "rock moon"
        document.getElementById("upower3").innerHTML = "power : 100"
    }
    else if(user1==5){
        document.getElementById("uimage3").src="../suncard/res/half_moon.png"
        document.getElementById("utitle3").innerHTML = "half moon"
        document.getElementById("upower3").innerHTML = "power : 50"
    }
    else if(user1==6){
        document.getElementById("uimage3").src="../suncard/res/dark_moon.png"
        document.getElementById("utitle3").innerHTML = "dark moon"
        document.getElementById("upower3").innerHTML = "power : -100"
    }

    console.log("gone to image 3")
}


//computer
function display_comp(user1){
    if(user1==0){
        document.getElementById("cimage").src="../suncard/res/sun.jpg"
        document.getElementById("ctitle").innerHTML = "THE SUN"
        document.getElementById("cpower").innerHTML = "power : 9000"
    }
    else if(user1==1){
        document.getElementById("cimage").src="../suncard/res/dimond_moon.png"
        document.getElementById("ctitle").innerHTML = "dimond moon"
        document.getElementById("cpower").innerHTML = "power : 1000"
    }
    else if(user1==2){
        document.getElementById("cimage").src="../suncard/res/golden_moon.png"
        document.getElementById("ctitle").innerHTML = "golden moon"
        document.getElementById("cpower").innerHTML = "power : 500"
    }
    else if(user1==3){
        document.getElementById("cimage").src="../suncard/res/silver_moon.png"
        document.getElementById("ctitle").innerHTML = "silver moon"
        document.getElementById("cpower").innerHTML = "power : 300"
    }
    else if(user1==4){
        document.getElementById("cimage").src="../suncard/res/rock_moon.png"
        document.getElementById("ctitle").innerHTML = "rock moon"
        document.getElementById("cpower").innerHTML = "power : 100"
    }
    else if(user1==5){
        document.getElementById("cimage").src="../suncard/res/half_moon.png"
        document.getElementById("ctitle").innerHTML = "half moon"
        document.getElementById("cpower").innerHTML = "power : 50"
    }
    else if(user1==6){
        document.getElementById("cimage").src="../suncard/res/dark_moon.png"
        document.getElementById("ctitle").innerHTML = "dark moon"
        document.getElementById("cpower").innerHTML = "power : -100"
    }

    console.log("gone to image 3")
}