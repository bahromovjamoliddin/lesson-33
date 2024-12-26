

function button() {
    window.scrollTo(0, 0); 
}
window.onscroll = function() {
    const button = document.querySelector('.button__strelka');
    if (window.scrollY > 100) { 
        button.classList.add('active'); 
    } else {
        button.classList.remove('active'); 
}
};