function find(){
   var exp = document.getElementById("exp").value
   var text = document.getElementById("text").value
   var res = text.match(exp)
   document.getElementById("op").innerHTML = res
   console.log(res);
}
