function commentHere(){
    let userinput = document.querySelector("#inp").value;
    let makespace = document.querySelector("#id3").cloneNode(true);
    makespace.removeAttribute("id");
    makespace.children[0].innerHTML=userinput;
    makespace.style.visibility="visible";
    let comm = document.getElementById('commentBox');
    comm.insertBefore(makespace, comm.firstChild);
    userinput.value="";
}
let count=0
function likehere(){
    count++;
    let countlike = document.getElementById('id1');
    countlike.innerHTML="LIKE "+count;

}
function deleteComment(btnElement) {
    btnElement.parentElement.remove();
}
