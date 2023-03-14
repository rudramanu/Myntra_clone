import navbar from "../components/index1.js"
let div3 = document.getElementById("navbar");
div3.innerHTML = navbar();

document.querySelector(".logo-img").addEventListener("click",()=>{
    window.location.href="index.html";
})
document.getElementById("sign").addEventListener("click",()=>{
    window.location.href="signup.html";
})


import {footer} from "../components/footer.js"


const footerdiv=document.querySelector(".footer");
footerdiv.innerHTML = footer()

document.querySelector("#cl233").addEventListener("click",()=>{
    window.location.href="cart_page.html"
})
let token=localStorage.getItem("token");
document.getElementById("line1").innerText=localStorage.getItem("name")||"Welcome";
if(token){
    document.querySelector(".login").style.display="none"
    if(token){
        document.querySelector(".logout").addEventListener("click",async(e)=>{
            e.preventDefault();
         let res= await   fetch("https://excited-deer-headscarf.cyclic.app/users/logout",{
                method:"POST",
                headers:{
                    "Content-Type":"application/json",
                    "authorization":token
                }
            })
        let data = await res.json();
        if(data.message=="Logout Sucessfull"){
                alert("log out succussfully");
                localStorage.clear();
                window.location.reload()
                
        }
        })
    }
}else{
    document.querySelector(".login").style.display="block";
    document.querySelector(".logout").style.display="none";
}

// let tshirt=document.getElementById("tshirt")
// tshirt.addEventListener("click", tshirtFun)

// function tshirtFun(){
//     localStorage.setItem("tshirt","bye")
// }

