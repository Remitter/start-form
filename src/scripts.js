const hide = id => {
    var element = document.getElementById(id);
    
    element.classList.add("hide");
}

const show = id => {
    var element = document.getElementById(id);
    
    element.classList.remove("hide");
}