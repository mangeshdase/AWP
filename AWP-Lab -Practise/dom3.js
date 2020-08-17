function comm(){

    let uinput = document.querySelector("#inp").value;
    if(uinput=="")
    {
        alert("Please Enter the text...!");
    }
    else{

   
  let cloneValue=document.querySelector("#place").cloneNode(true);
  cloneValue.innerHTML=uinput;
  let commentDev = document.querySelector("#comment1");
  commentDev.insertBefore(cloneValue,commentDev.firstChild);

   document.querySelector("#inp").value="";

    }
}