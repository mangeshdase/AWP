var count=0;
function like(){
    count++;
    let getlike = document.querySelector("#id1");
    getlike.innerHTML="LIKE "+count;
}
function comment(){
    var getcomment= document.querySelector("#inp").value;
    var makespace=document.querySelector("#id3").cloneNode(true);
    makespace.innerHTML=getcomment;
    var comment=document.querySelector("#id4");
    comment.insertBefore(makespace,comment.firstChild);
document.querySelector("#inp").value="";
}