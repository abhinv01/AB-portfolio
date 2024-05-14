"use strict"



/* ***********************Navbar for sm***************************** */
const navbar = document.querySelector(".navbar")
const navOpen = document.querySelector(".nav-open-btn")
const navClose = document.querySelector(".nav-class-btn")


function navToggle(e){
    console.log(window.innerWidth);

    if(window.innerWidth < 990){
        console.log("toggle active",window.innerWidth < 990 );

        navbar.classList.toggle("active")
        document.body.classList.toggle("nav-active");
    }
   
}

navOpen.addEventListener("click",navToggle)
// navClose.addEventListener("click",navToggle)

navbar.addEventListener("click",(e) => {
    // console.log(e.target)
    if(e.target.matches("a") || e.target.matches(".bi-x-lg") || e.target.matches(".nav-class-btn")) navToggle()
    })


/* ***********************Navbar for lg***************************** */
const header = document.querySelector(".header")


function headToggle(e) {
    if (window.scrollY > header.offsetHeight) {
        header.classList.add("active")
    }
    else{
        header.classList.remove("active")

    }
}
window.addEventListener("scroll",headToggle)



/* *************************Animation**************************************** */

const animatedEle = document.querySelectorAll("[data-reveal]")
const animatedEleOnload = document.querySelectorAll("[data-onload=onload]")

// console.log(animatedEle);

function showElement(e){
    
}

animatedEle.forEach((ele) => {
    window.addEventListener("scroll",
        function showElement(event) {

            if( window.innerHeight/1.2 > ele.getBoundingClientRect().top){
                ele.classList.add("revealed")
            }
        }
    )
})
animatedEle.forEach((ele) => {
    window.addEventListener("load",
        function showElement(event) {

            if(window.innerHeight/1.1 >ele.getBoundingClientRect().top ){
                ele.classList.add("revealed")
            }
        }
    )
})

// animatedEle.forEach((ele) => {
//     window.addEventListener("load",
//         function showElement(event) {
//             console.log(window.scrollY,ele.getBoundingClientRect().top);
//             if(window.scrollY > ele.getBoundingClientRect().top){
//                 ele.classList.add("revealed")
//             }
//         }
//     )
// })

// animatedEleOnload.forEach((ele) => {
//     window.addEventListener("load",
//         function showElement(event) {
//             console.log(ele.getBoundingClientRect());
//             if(ele.getBoundingClientRect().top/1.2 > window.scrollY){
//                 ele.classList.add("revealed")
//             }
            
//         }
//     )
// })

document.getElementById("catchUp").onclick = function(e) {
    e.preventDefault();
        // Get the user's message from the form
        let message = document.getElementById("message").value;
        console.log(message);

        // Replace 'your-email@example.com' with your preferred email address
        let emailAddress = 'abhinavbabar001@gmail.com';
    
        let user = document.getElementById("input-field-name").value + "(" + document.getElementById("input-field-email").value+")";
    
        // Construct the mailto link with the message
        let mailtoLink = 'mailto:' + encodeURIComponent(emailAddress) +
                         '?subject=' + encodeURIComponent(`Message from ${user}`)
                         '&body=' + encodeURIComponent(message);
    
        // Open the user's email client with the mailto link
        window.location.href = mailtoLink;
    }
    // Your custom code here
