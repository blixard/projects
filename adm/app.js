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


function product_Range(a,b) {
    var prd = a,i = a;
   
    while (i++< b) {
      prd*=i;
    }
    return prd;
  }
  
  
  function combinations(n, r) 
  {
    if (n==r) 
    {
      return 1;
    } 
    else 
    {
      r=(r < n-r) ? n-r : r;
      console.log("pr" + product_Range(r+1,n) )
      return product_Range(r+1, n)/product_Range(1,n-r);
    }
  }
  
  
  console.log(combinations(6, 2));
  console.log(combinations(5, 3));
  console.log("test " +  combinations(2, 0));


  function fun2(){
    console.log("yoo2")
    var r = parseInt(document.getElementById("range").value) 
    var num = document.getElementById("num").value
    var arr = num.toString().split(" ")
    console.log(r , num)
    var k = arr.length
    console.log(k)
    var x = k + r -1
    console.log(x)
    var s = combinations(x,r) 
    console.log(s)
    var suma = 0
    var sumb = 0
    var sumc = 0
    for(var i=0; i<arr.length; i++){
      var temp = parseInt(arr[i] ) + 1 
      temp = r - temp 
      if(temp>=0){
        suma = suma + combinations(temp+k-1 , temp)
      }
      
    }
    console.log("ij :"  )
    for(var i=0; i<arr.length; i++){
      var tem = parseInt(arr[i]) + 1
      for(var j=i+1; j<arr.length; j++){
        console.log(i + " " + j)
        var temp2 = parseInt(arr[j]) + 1
        var temp = tem + temp2
        temp = r - temp
        console.log("temp " + temp)
        if(temp>0){
          sumb = sumb + combinations(temp+k-1,temp)
          console.log(sumb)
        }  
        else if(temp==0){
          sumb = sumb+1
        }
      }
    }

    for(var i=0; i<arr.length; i++){
      sumc = sumc+ arr[i] + 1 
    }

    sumc = r - sumc
    if(sumc>0){
      sumc = combinations(sumc+k-1, sumc)
    }
    else if(sumc==0){
      sumc = 1
    }
    else{
      sumc=0
    }

    console.log(s + " " + suma + " " + sumb + " "+sumc)
    var res = s - suma + sumb - sumc


    document.getElementById("res").innerHTML = res + " is the ans "
    count = 0
}