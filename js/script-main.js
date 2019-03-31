var body = document.body;

var mainDiv = document.createElement('header');
mainDiv.setAttribute("class","header");
body.appendChild(mainDiv);

createDiv("class","container");
createDiv("class","alert alert-success")


function createDiv(element,name){
    var container = document.createElement('div');
    container.setAttribute(element,name);
    mainDiv.appendChild(container);
}





