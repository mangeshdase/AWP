let likecount=0;
function likehere(){
    likecount++;
    let like=document.querySelector("#id1");
    like.innerHTML="LIKE "+likecount;
}
function commenthere(){
    let comment=document.querySelector("#inp").value;
    let cloneBox=document.querySelector("#commentBox").cloneNode(true);
    cloneBox.children[0].children[1].innerHTML = comment;
    let comm=document.children[0].children[1].children[1].children[2];
    comm.insertBefore(cloneBox,comm.firstChild);
    comment.innerHTML="";
}