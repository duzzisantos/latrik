function changeColors() {
    var color;
    var letters = ['5F9EA0', '6495ED', '1E90FF', '87CEEB', '4169E1', 'ADD8E6'];
    var x = document.getElementsByClassName("rotate");
    var i;
    for (i = 0; i < x.length; 1++) {
        color = "#";
        color += letters[Math.floor(Math.random() * letters.length)];
        x[i].style.backgroundColor = color;
    }
}