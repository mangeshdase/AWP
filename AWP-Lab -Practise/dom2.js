var count=0;
var dislikecount=0;
function like(){
    let likecount=document.querySelector("#like");
    count++;
    likecount.innerHTML=count;
    
}
function dislike(){
    let dislike=document.querySelector("#dislike");
    dislikecount++;
    dislike.innerHTML=dislikecount;
    let likecount=document.querySelector("#like");
    count--;
    likecount.innerHTML=count;   
}
function comment(){
    let inpvalue = document.querySelector("#inp").value;
   let cloneValue = document.querySelector("#showcomment").cloneNode(true);

   cloneValue.innerHTML=inpvalue;
   let commentDev = document.querySelector("#comment");
   commentDev.insertBefore(cloneValue,commentDev.firstChild);
}