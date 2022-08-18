const sections = document.querySelectorAll('section');
const navItems = document.querySelectorAll('nav .container .collapse ul li');

navItems.forEach(element => {
    element.addEventListener("click", function(){
        navItems.forEach(nav=>nav.classList.remove('active'));
        this.classList.add('active');
    })
})

// window.addEventListener('scroll', ()=> {
//     let current = '';

//     sections.forEach( section => {
//         const sectionTop = section.offsetTop;
//         const sectionHeight = section.clientHeight;
//         if(scrollY >= sectionTop){
//             current = section.getAttribute('id');
//         }
//     })
    
//     navLi.forEach(li => {
//         li.classList.remove('active');
//         if(li.classList.contains(current)){
//             li.classList.add('active')
//             console.log(current)
//         }
//     })
// })