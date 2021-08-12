function mostrar(id){
    let divCont = document.getElementById(id);
    if(divCont){
        for(i=0;i<document.getElementById('containerDer').children.length;i++){ 
            document.getElementById('containerDer').children[i].style ='display:none';
        }
        divCont.style = 'display:block';
    }
}