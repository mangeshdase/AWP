function likehere(btnelement){
    let likecountString=btnelement.children[0].innerHTML;
    let countlike = parseInt(likecountString);
    countlike++;
    btnelement.children[0].innerHTML=countlike;
}
function commentHere(commbtnele){
    let userinput = commbtnele.parentElement.children[1];
    let newComment=commbtnele.parentElement.parentElement.parentElement.children[4].children[0].cloneNode(true);
    newComment.children[0].innerHTML=userinput.value;
    newComment.style.visibility = 'visible';
        userinput.value = "";
  //  commbtnele.parentElement.children[1].value= "";
    let createspace =commbtnele.parentElement.parentElement.parentElement.children[4];
    createspace.insertBefore(newComment, createspace.firstChild);
}
function deletehere(del_btn_element){
    del_btn_element.parentElement.remove();
}