/*IMPORTING THE FOOTER*/
import {footer} from "../components/footer.js"

// console.log(footer())

const footerdiv=document.querySelector(".footer");
footerdiv.innerHTML = footer()



import navbar from "../components/index1.js"
let div3 = document.getElementById("navbar");
div3.innerHTML = navbar();

fetch("./json/home.json")
    .then(response => response.json())
    .then(data => {
        musthaveinyourwardrobe(data.musthaveinyourwardrobe);
        budgetbuysappend(data.budgetbuys);
        bestofclothingappend(data.bestofclothing);
        bestofinnerwearappend(data.bestofinnerwear);
        bestoffootwearappend(data.bestoffootwear);
        bestofkidwearappend(data.bestofkidwear);
        bestofbeautyappend(data.bestofbeauty);
        bestofacessoriesappend(data.bestofaccessories);
        bestofhomefurnishingappend(data.bestofhomefurnishing);
        shopbycategoryappend(data.shopbycategory);
    })


function musthaveinyourwardrobe(data){
    let mustdiv = document.getElementById("mustdiv");
    data.forEach(el => {
        let card = document.createElement("div");
        let img = document.createElement("img");
        img.classList.add("fullwidth")
        img.src = el.link
        img.addEventListener("click",()=>{
            window.location.href="product.html"
        })

        card.append(img);
        mustdiv.append(card);
    });
}

function budgetbuysappend(data){
    let budgetdiv = document.getElementById("budgetdiv");
    data.forEach(el => {
        let card = document.createElement("div");
        let img = document.createElement("img");
        img.classList.add("fullwidth")
        img.src = el.link
        img.addEventListener("click",()=>{
            window.location.href="product.html"
        })

        card.append(img);
        budgetdiv.append(card); 
    });
}

function bestofclothingappend(data){
    let bestclothing = document.getElementById("bestclothing");
    data.forEach(el => {
        let card = document.createElement("div");
        let img = document.createElement("img");
        img.classList.add("fullwidth")
        img.src = el.link
        img.addEventListener("click",()=>{
            window.location.href="product.html"
        })

        card.append(img);
        bestclothing.append(card); 
    });
}

function bestofinnerwearappend(data){
    let bestinnerwear = document.getElementById("bestinnerwear");
    data.forEach(el => {
        let card = document.createElement("div");
        let img = document.createElement("img");
        img.classList.add("fullwidth")
        img.src = el.link;
        img.addEventListener("click",()=>{
            window.location.href="product.html"
        })

        card.append(img);
        bestinnerwear.append(card); 
    });
}

function bestoffootwearappend(data){
    let bestfootwear = document.getElementById("bestfootwear");
    data.forEach(el => {
        let card = document.createElement("div");
        let img = document.createElement("img");
        img.classList.add("fullwidth")
        img.src = el.link
        img.addEventListener("click",()=>{
            window.location.href="product.html"
        })

        card.append(img);
        bestfootwear.append(card); 
    });
}

function bestofkidwearappend(data){
    let bestkids = document.getElementById("bestkids");
    data.forEach(el => {
        let card = document.createElement("div");
        let img = document.createElement("img");
        img.classList.add("fullwidth")
        img.src = el.link
        img.addEventListener("click",()=>{
            window.location.href="product.html"
        })

        card.append(img);
        bestkids.append(card); 
    });
}

function bestofbeautyappend(data){
    let bestbeauty = document.getElementById("bestbeauty");
    data.forEach(el => {
        let card = document.createElement("div");
        let img = document.createElement("img");
        img.classList.add("fullwidth")
        img.src = el.link
        img.addEventListener("click",()=>{
            window.location.href="product.html"
        })

        card.append(img);
        bestbeauty.append(card); 
    });
}

function bestofacessoriesappend(data){
    let bestacessories = document.getElementById("bestacessories");
    data.forEach(el => {
        let card = document.createElement("div");
        let img = document.createElement("img");
        img.classList.add("fullwidth")
        img.src = el.link
        img.addEventListener("click",()=>{
            window.location.href="product.html"
        })
        card.append(img);
        bestacessories.append(card); 
    });
}

function bestofhomefurnishingappend(data){
    let bestfurnishing = document.getElementById("bestfurnishing");
    data.forEach(el => {
        let card = document.createElement("div");
        let img = document.createElement("img");
        img.classList.add("fullwidth")
        img.src = el.link
        img.addEventListener("click",()=>{
            window.location.href="product.html"
        })
        card.append(img);
        bestfurnishing.append(card); 
    });
}

function shopbycategoryappend(data){
    let shopbycategory = document.getElementById("shopbycategory");
    data.forEach(el => {
        let card = document.createElement("div");
        let img = document.createElement("img");
        img.classList.add("fullwidth","class")
        img.src = el.link
        img.addEventListener("click",()=>{
            window.location.href="product.html"
        })

        card.append(img);
        shopbycategory.append(card); 
    });
}

/*  singup part  */

document.querySelector(".click").addEventListener("click",()=>{
    window.location.href="product.html";
})

document.querySelector(".anuq").addEventListener("click",()=>{
    window.location.href="product.html";
})
document.querySelector(".logo-img").addEventListener("click",()=>{
    window.location.href="index.html";
})
document.getElementById("sign").addEventListener("click",()=>{
    window.location.href="signup.html";
})
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
 
            

