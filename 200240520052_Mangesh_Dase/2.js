function  submitdetails () {



    if ((document.querySelector(".uname").value=="") || (document.querySelector(".paswd").value=="")
    || (document.querySelector(".email").value==""))
    {
        alert("please enter the details..");
    }
    else {
    let username=document.querySelector(".uname").value;
        let password = document.querySelector(".paswd").value;
        let emailid=document.querySelector(".email").value;


        let inputname=document.querySelector(".commentBox").cloneNode(true);
         inputname.children[0].children[0].children[0].innerHTML=username;
         inputname.children[0].children[1].children[0].innerHTML=password;
        inputname.children[0].children[2].children[0].innerHTML=emailid;


        
        inputname.style.visibility="visible";
        let comm = document.querySelector("#id4");
        comm.insertBefore(inputname,comm.firstChild);

        document.querySelector(".uname").value="";
        document.querySelector(".paswd").value="";
        document.querySelector(".email").value="";
    }
}