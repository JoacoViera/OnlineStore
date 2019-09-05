const home = document.querySelector('#page');
const info = document.querySelector('#info');

home.addEventListener('click',function(){
    document.querySelector('#parrafo').style.display = 'none';
    document.querySelector('#contacto').style.display = 'block';
    document.querySelector('#begin').style.display = 'block';
});

info.addEventListener('click',function(){

    document.querySelector('#contacto').style.display = 'none';
    document.querySelector('#begin').style.display = 'none';
    document.querySelector('#parrafo').style.display = 'block';
    document.querySelector('#parrafo').style.marginTop = "100px";
});
