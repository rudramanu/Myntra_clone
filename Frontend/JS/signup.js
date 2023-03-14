import navbar from "../components/index1.js"
let div3 = document.getElementById("navbar");
div3.innerHTML = navbar();

document.querySelector(".logo-img").addEventListener("click",()=>{
    window.location.href="index.html";
})


document.querySelector(".anuq").addEventListener("click",()=>{
    window.location.href="product.html";
})

document.getElementById("sign").addEventListener("click",()=>{
    window.location.href="signup.html";
})
let signup_btn=document.getElementById("signup_btn");
signup_btn.addEventListener("click",(e)=>{
    e.preventDefault();
    let name=document.getElementById("name").value;
let mobile = document.getElementById("mobile").value;
mobile= parseInt(mobile)
let email = document.getElementById("email").value;
let gender = document.getElementById("gender").value;
let password=document.getElementById("password").value;
if(name==""||mobile==""||email==""||gender==""||password==""){
    alert("fill all the details");
}else{
    let obj={
        name,mobile,email,gender,password
    }
    signup(obj);
}

});
let signup =async(obj)=>{
   let res = await fetch("https://excited-deer-headscarf.cyclic.app/users/signup",{
    method:"POST",
    headers:{
        "Content-Type":"application/json"
    },
    body:JSON.stringify(obj)
   });
   let data = await res.json();
   if(res.ok){
    alert(data.message);
    window.location.href="login.html"
   }else{
    alert(data.message);
   }
}
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
                    "authorization":localStorage.getItem("token")
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
 
 