window.addEventListener('scroll', function() {
    var banner = document.querySelector('.banner');
    var scrollPosition = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollPosition > 100) {
        banner.classList.add('hidden');
    } else {
        banner.classList.remove('hidden');
    }
});
