window.addEventListener('scroll', naviBar);
    function naviBar() {
        let navi = document.getElementById('navi');
        let logo = document.getElementById('logo');
        let contactBtn = document.querySelector('.contact-primary a');
        let selectMenus = document.querySelectorAll('.select a');
        let sidebarMenu = document.querySelector('.h-right-close > svg');
    if (document.body.scrollTop > 350 || document.documentElement.scrollTop > 350) {
        navi.classList.add('header-move1');
        logo.src='/image/openex-alt.png';
        contactBtn.classList.add('contact-primary-alt');
        sidebarMenu.classList.add('svg-color-auto');
        for (let i = 0; i < selectMenus.length; ++i) {
                selectMenus[i].classList.add('menu-color2');
        }
    } else {
        navi.classList.remove('header-move1');
        logo.src='/image/openex.png'
        contactBtn.classList.remove('contact-primary-alt');
        sidebarMenu.classList.remove('svg-color-auto');
        for (i = 0; i < selectMenus.length; ++i) {
            selectMenus[i].classList.remove('menu-color2');
        }
    }
}
