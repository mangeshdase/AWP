var count=0;
function inc(){
    let countvalue=document.querySelector("#id2");
    count++; 
    countvalue.innerHTML=count;
   
}
function dec(){
    let deccount=document.querySelector("#id2");
    if (count>0) {
    count--;
    
    }

    deccount.innerHTML=count;
    if (count == 0) {
        alert("count is zero");
        
    }
}