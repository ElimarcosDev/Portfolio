function preview(){
    var prev = document.getElementsByTagName(iframe)
    prev.style.display = 'block'
}
function menuonoff(){
    var menu = document.getElementById('menu')
    if ( menu.style.display == 'inline-block'){
        menu.style.display = 'none'
    }
    else{
        menu.style.display = 'inline-block'
    }
}