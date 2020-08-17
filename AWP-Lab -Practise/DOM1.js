function compute(){
  var x =  Number(document.getElementById("num1").value);
    var y = Number(document.getElementById("num2").value);
     var z=0;
     if(document.getElementById('add')){
         z=x+y;
         document.getElementById('num3').value=z;
     }
     else if(document.getElementById('sub')){
         z=x-y;
         document.getElementById('num3').value=z;
     }
     else if(document.getElementById('mul')){
         z=x*y;
         document.getElementById('num3').value=z;
     }
     else if(document.getElementById('div')){
         z=x/y;
         document.getElementById('num3').value=z;
     }
}
