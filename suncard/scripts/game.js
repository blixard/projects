var max = 7
//0-sun
//1 - di
//2 - gold
//3 - sil
//4 - ro
//5 - half
//6 - dark
var comp
var user1
var user2
var user3
var comp_play = 0
var wincount = 0
var lostcount = 0
var count = 0  
function loadVis(){
    document.getElementById("badge_comp").style.visibility = "hidden"
    document.getElementById("small_cards_comp").style.visibility = "hidden"
    document.getElementById("comp_space").style.visibility = "hidden"
    document.getElementById("user_space").style.visibility = "hidden"
    document.getElementById("badge_user").style.visibility = "hidden"
    document.getElementById("small_cards_user").style.visibility = "hidden"
}
function game(){
    comp = Math.floor(Math.random()*7)
    user1 = Math.floor(Math.random()*7)
    user2 = Math.floor(Math.random()*7)
    user3 = Math.floor(Math.random()*7)
    console.log(" " + user1 + " " + user2 + " " + user3)
    display_user1(user1)
    display_user2(user2)
    display_user3(user3)
    console.log(comp)
}

function play(){
    document.getElementById("play_btn").style.visibility = "hidden"
    document.getElementById("badge_comp").style.visibility = "visible"
    document.getElementById("small_cards_comp").style.visibility = "visible"
    document.getElementById("badge_user").style.visibility = "visible"
    document.getElementById("small_cards_user").style.visibility = "visible"
    game()
}

//cardbutton functions 
//button1 
function card_btn1(){
    count ++
    scc(count)
    var upower = return_power(user1)
    var cpower = return_power(comp)
    display_comp(comp)
    display_user(user1);
    comp = Math.floor(Math.random()*7)
    var res =""
    console.log("okay so here : " + upower + " " + cpower)
    if(upower>cpower){
        //won
        res = "won"
        wincount = wincount + 1
        console.log("won")
    }
    else if(cpower>upower){
        //lost
        res = "lost"
        lostcount = lostcount+1
        console.log("lost")
    }
    else{
        //tie
        res = "tied"
        console.log("tied")
    }
    document.getElementById("com").innerHTML = res 
    document.getElementById("com").style.visibility = "visible"
    document.getElementById("card_btn1").style.visibility = "hidden"
    document.getElementById("comp_space").style.visibility = "visible"
    document.getElementById("user_space").style.visibility = "visible"
    if(count==3){
        wincount = 0 
        lostcount = 0
        count = 0
        setTimeout(function(){
            afterFinish()
        }, 3000);
    }

}


//button2 
function card_btn2(){
    count = count +1
    scc(count)
    var upower = return_power(user2)
    var cpower = return_power(comp)
    display_comp(comp)
    display_user(user2);
    comp = Math.floor(Math.random()*7)
    var res =""
    console.log("okay so here : " + upower + " " + cpower)
    if(upower>cpower){
        //won
        res = "won"
        wincount = wincount + 1
        console.log("won")
    }
    else if(cpower>upower){
        //lost
        res = "lost"
        lostcount = lostcount+1
        console.log("lost")
    }
    else{
        //tie
        res = "tied"
        console.log("tied")
    }
    document.getElementById("com").innerHTML = res 
    document.getElementById("com").style.visibility = "visible"
    document.getElementById("card_btn2").style.visibility = "hidden"
    document.getElementById("comp_space").style.visibility = "visible"
    document.getElementById("user_space").style.visibility = "visible"
    if(count==3){
        wincount = 0 
        lostcount = 0
        count = 0
        setTimeout(function(){
            afterFinish()
        }, 3000);
    }

}
//button3 
function card_btn3(){
    count ++
    scc(count)
    var upower = return_power(user3)
    var cpower = return_power(comp)
    display_comp(comp)
    display_user(user3);
    comp = Math.floor(Math.random()*7)
    var res =""
    console.log("okay so here : " + upower + " " + cpower)
    if(upower>cpower){
        //won
        res = "won"
        wincount = wincount + 1
        console.log("won")
    }
    else if(cpower>upower){
        //lost
        res = "lost"
        lostcount = lostcount+1
        console.log("lost")
    }
    else{
        //tie
        res = "tied"
        console.log("tied")
    }
    document.getElementById("com").innerHTML = res 
    document.getElementById("com").style.visibility = "visible"
    document.getElementById("card_btn3").style.visibility = "hidden"
    document.getElementById("comp_space").style.visibility = "visible"
    document.getElementById("user_space").style.visibility = "visible"
    if(count==3){
            
        wincount = 0 
        lostcount = 0
        count = 0
        setTimeout(function(){
            afterFinish()
        }, 3000);
    }
}

function return_power(x){
    if(x==0){
        return 9000
    }
    else if(x==1){
        return 1000
    }
    else if(x==2){
        return 500
    }
    else if(x==3){
        return 300
    }
    else if(x==4){
        return 100
    }
    else if(x==5){
        return 50
    }
    else{
        return -100
    }
}



//after finish
function afterFinish(){
    if(wincount > lostcount ){
        document.getElementById("com").innerHTML = "you won, woo hoo!!!!"
    }
    else if(wincount<lostcount) {
        document.getElementById("com").innerHTML = "you did not win, but good try "
    }
    else{
        document.getElementById("com").innerHTML = "you have lost, sorry :("
    }
    document.getElementById("badge_comp").style.visibility = "hidden"
    document.getElementById("small_cards_comp").style.visibility = "hidden"
    document.getElementById("comp_space").style.visibility = "hidden"
    document.getElementById("user_space").style.visibility = "hidden"
    document.getElementById("badge_user").style.visibility = "hidden"
    document.getElementById("small_cards_user").style.visibility = "hidden"

}



//displaying images
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


//set user space
function display_user(user1){
    if(user1==0){
        document.getElementById("uimage").src="../suncard/res/sun.jpg"
        document.getElementById("utitle").innerHTML = "THE SUN"
        document.getElementById("upower").innerHTML = "power : 9000"
    }
    else if(user1==1){
        document.getElementById("uimage").src="../suncard/res/dimond_moon.png"
        document.getElementById("utitle").innerHTML = "dimond moon"
        document.getElementById("upower").innerHTML = "power : 1000"
    }
    else if(user1==2){
        document.getElementById("uimage").src="../suncard/res/golden_moon.png"
        document.getElementById("utitle").innerHTML = "golden moon"
        document.getElementById("upower").innerHTML = "power : 500"
    }
    else if(user1==3){
        document.getElementById("uimage").src="../suncard/res/silver_moon.png"
        document.getElementById("utitle").innerHTML = "silver moon"
        document.getElementById("upower").innerHTML = "power : 300"
    }
    else if(user1==4){
        document.getElementById("uimage").src="../suncard/res/rock_moon.png"
        document.getElementById("utitle").innerHTML = "rock moon"
        document.getElementById("upower").innerHTML = "power : 100"
    }
    else if(user1==5){
        document.getElementById("uimage").src="../suncard/res/half_moon.png"
        document.getElementById("utitle").innerHTML = "half moon"
        document.getElementById("upower").innerHTML = "power : 50"
    }
    else if(user1==6){
        document.getElementById("uimage").src="../suncard/res/dark_moon.png"
        document.getElementById("utitle").innerHTML = "dark moon"
        document.getElementById("upower").innerHTML = "power : -100"
    }

    console.log("gone to user space")
}



//computer small cards remover

function scc(inp){
    if(inp==1){
        document.getElementById("sc1").style.visibility= "hidden"
    }
    else if(inp==2){
        document.getElementById("sc2").style.visibility= "hidden"
    }
    else if(inp==3){
        document.getElementById("sc3").style.visibility= "hidden"
    }
}