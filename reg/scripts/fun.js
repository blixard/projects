function find(){
   var exp = document.getElementById("exp").value
   var text = document.getElementById("text").value
   var res = text.match(exp)
   if(res==null){
       res = "no matches, Nope "
   }
   document.getElementById("op").innerHTML = res
   console.log(res);
}
