const sideMenuBtn = document.getElementById('side-menu-btn');
    sideMenu = document.getElementById('side-menu');
    scrollUp = document.getElementById('scrollUp');
window.addEventListener('scroll', () => {
    const nav = document.getElementById('nav');
    nav.classList.toggle('active-nav', window.scrollY > 0)
})
scrollUp.addEventListener('click', () => {
    window.scrollTo(0, 0);
});
sideMenuBtn.addEventListener('click', () => {
    sideMenuBtn.classList.toggle('active-side-menu-btn');
    sideMenu.classList.toggle('active-side-menu');
})
ScrollOut({
    once:true,
    targets:'.about-section',
});

ScrollOut({
    once:true,
    targets:'.client-section',
});
ScrollOut({
    once:true,
    targets:'.blocks',
});
ScrollOut({
    once:true,
    targets:'.links'
});