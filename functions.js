const myImage = document.getElementById('image');
const imageWidth = window.getComputedStyle(myImage).getPropertyValue('width');
const images = ['./img/image-header-desktop.jpg', './img/image-header-mobile.jpg'];

function load(){
    const docWidth = window.innerWidth;

    if(docWidth <= 768){
        myImage.src = images[1];
    }else{
        myImage.src = images[0];
    }
}
load();

window.addEventListener('resize', function(){
    const docWidth = window.innerWidth;

    if(docWidth <= 768){
        myImage.src = images[1];
    }else{
        myImage.src = images[0];
    }
});