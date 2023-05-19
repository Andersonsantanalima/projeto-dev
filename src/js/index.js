alert('ola mundo');

const botaoAlterarTema = document.getElementById("botao-alterar-tema");
const body = document.querySelector("body");
const imagemBotaoAlterarTema = document.querySelector(".imagem-botao");



botaoAlterarTema.addEventtListener("click",()=>{

    const modoEscuroLigado = body.classList.contains("modo-escuro")
    body.classList.toggle("modo-escuro");
     
    if(modoEscuroLigado){
        imagemBotaoAlterarTema.setAttribute("src","./src/imagem/sol.png")
    }
    else{
        imagemBotaoAlterarTema.setAttribute("src","./src/imagem/lua.png")
    }


});