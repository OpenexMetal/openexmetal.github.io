window.addEventListener('scroll', goTopBtn,false);
    function goTopBtn() {
    let topBtn = document.getElementById('js-go_top')
    if (document.body.scrollTop > 466 || document.documentElement.scrollTop > 466) {
        topBtn.classList.add('slideUp');
    } else {
        topBtn.classList.remove('slideUp');
    }
}