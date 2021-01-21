function showMobileNav() {
    document.querySelector('.mobile-links').style.display = 'block';
    document.querySelector('.fa-bars').style.display = 'none';
    document.querySelector('.fa-times-circle').style.display = 'block';
}

function hideMobileNav(){
    document.querySelector('.mobile-links').style.display = 'none';
    document.querySelector('.fa-bars').style.display = 'block';
    document.querySelector('.fa-times-circle').style.display = 'none';
}