function menuonoff(){
    var menu = document.getElementById('menu')
    if ( menu.style.display == 'inline-block'){
        menu.style.display = 'none'
    }
    else{
        menu.style.display = 'inline-block'
    }
    
}

function preview(){
    var projetos = document.getElementsByClassName('image')
    projetos.getAttribute("src", "https://elimarcosdev.github.io/android-projeto/curiosidades.html")
}