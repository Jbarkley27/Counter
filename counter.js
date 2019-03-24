var num = 0;

var minus = document.querySelector('.fa-minus');
var plus = document.querySelector('.fa-plus');
var number = document.querySelector('.numop');
var button = document.querySelector('.wrapper');

minus.addEventListener('click', function (event) {
    
    
    num --;
    number.innerHTML = num;

});

plus.addEventListener('click', function (event) {
    
    
    num ++;
    number.innerHTML = num;

});