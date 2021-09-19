let animado = document.querySelectorAll(".animado");

function mostrarScroll(){
    let scrollTop=document.documentElement.scrollTop;
    for(var i=0; i<animado.length;i++){
        let alturaAnimado=animado[i].offsetTop;
        if(alturaAnimado+230<scrollTop){
            animado[i].style.opacity=1;
        }
        else{
            animado[i].style.opacity=0;
        }
        if(alturaAnimado+500<scrollTop){
            animado[i].style.opacity=0;
        }
    }
}
window.addEventListener('scroll',mostrarScroll);