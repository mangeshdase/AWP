 let likecount=0;
 let commentcount=0;
function like(){
    likecount++;
  let getlike= document.getElementById("like");
  getlike.textContent="LIKE " +  likecount;
}
function comment(){
    commentcount++;
    let getcomment = document.createElement("div");
    getcomment.textContent="COMMENT "+ commentcount;
    getcomment.style.background="red";
    let comm=document.querySelector("#commentBox");
    comm.appendChild(getcomment);
}
