var tablinks=document.getElementsByClassName('tab-links');
var tabcontents=document.getElementsByClassName('tab-contents');
function opentab(tabname){
    for(let tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(let tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab")
    }
    event.currentTarget.classList.add('active-link');
     document.getElementById(tabname).classList.add("active-tab")
}

// function to make the sidemenu for small screen devices
var sidemenu=document.getElementById('sidemenu');
function openmenu(){
    sidemenu.style.right='0';
}
function closemenu(){
    sidemenu.style.right='-200px';
}

// function to make the navbar sticky
window.addEventListener("scroll",function(){
    const hd=document.getElementById("header");
    hd.classList.toggle("sticky",window.scrollY>0);
})


// function to make the navlinks active based on each section
// let sections=document.querySelectorAll('section');
// let navLinks=document.querySelectorAll('header nav a');

// window.onscroll=()=>{
//     sections.forEach(sec=>{
//         let top=window.scrollY;
//         let offset=sec.offsetTop;
//         let height=sec.offsetHeight;
//         let id=sec.getAttribute('id');

//         if(top>=offset && top<offset+height){
//             navLinks.forEach(links=>{
//                 links.classList.remove('active');
//                 document.querySelector('header nav a[href*='+id+']').classList.add('active');
//             })
//         }
//     })
// }