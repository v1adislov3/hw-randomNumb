let input = document.querySelector(".field__input");
let btn = document.querySelector (".field__btn");

let item = 0;
let randNum = 1 + Math.floor(Math.random() * 100);
let stopResult = false;

console.log(randNum);

btn.onclick = function (evt) {
    let check = document.querySelector (".result__check__out");
    let help = document.querySelector (".result__help__out");
    let count = document.querySelector (".result__count__out");
    let game = document.querySelector (".game__over__out");
    
    userNum = input.value;

    if(stopResult) {
        return;
    }

    if (userNum > randNum && item < 10) {
        check.innerHTML = "Не угадал.";
        help.innerHTML = "Многова-то.";
        item++;
        count.innerHTML = item;
             
            

    }else if (userNum < randNum && item < 10){
        
        check.innerHTML = "Не угадал.";
        help.innerHTML = "Малова-то.";
        item++;
        count.innerHTML = item;
    }else if (item < 10) {
        check.innerHTML = "Поздравляем! Вы угадали.";
        help.innerHTML = "В самый раз.";
        stopResult = true;
        count.innerHTML = item;
        
    } else if (item == 10){
        game.innerHTML = "в следующий раз повезёт."
        
    }
        
        
    
};
