var typed = new Typed('#element', {
    strings: ['&lt;Engineer&gt;', '&lt;Web Developer&gt;'],
    typeSpeed: 65,
});
var url='https://www.youtube.com/'
function openResume(){
    window.open(url, '_blank').focus();
};

document.getElementById('scrollToTopSvg').addEventListener('click', function () {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1); // Remove the '#' from href
        const targetSection = document.getElementById(targetId);

        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop,
                behavior: 'smooth' // Adds smooth scrolling
            });
        }
    });
});