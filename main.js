const sections = document.querySelectorAll('section');
const navItems = document.querySelectorAll('nav .container .collapse ul li');
const parallax = document.getElementById('homePage');
const parallax2 = document.getElementById('resumePage');

// navItems.forEach(element => {
//     element.addEventListener("click", function(){
//         navItems.forEach(nav=>nav.classList.remove('active'));
//         navItems.forEach(nav=>nav.classList.remove('clickPriority'));
//         this.classList.add('active');
//         this.classList.add('clickPriority');
//     })
// })



window.addEventListener('scroll', ()=> {
    let current = '';

    //parallax stuff
    let offset = window.scrollY;
    console.log('offset' + offset);
    parallax.style.backgroundPositionY = offset * -0.5 + "px";
    parallax2.style.backgroundPositionY = offset * -0.5 + "px";
    //--------------

    sections.forEach( section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if(scrollY >= sectionTop){
            current = section.getAttribute('id');
        }
    })
    
    navItems.forEach(li => {
        li.classList.remove('active');
        if(li.classList.contains(current)){
            li.classList.add('active')
        }
    })
})