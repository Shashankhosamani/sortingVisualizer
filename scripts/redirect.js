

const userbtn = async()=>{
    console.log("user btn clicked");
    
    window.location.href ="userinput.html";
}

const randomarraybtn = async () => {
    console.log("random btn clicked");

    window.location.href = "randomarray.html";
}




document.querySelector("#btn-1").addEventListener("click",userbtn);
document.querySelector("#btn-2").addEventListener("click", randomarraybtn);
