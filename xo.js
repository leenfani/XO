let turn = 'x' ;
let stat = document.querySelector('.stat');

function game(id){
    let element = document.getElementById (id)
    if(turn === 'x' && element.innerHTML == ''){
        element.innerHTML = 'x'
        element.classList.add('active')
        stat.innerHTML = 'x plaing..'
        turn = 'o'
    }else if (turn !== 'x' && element.innerHTML == ''){
        element.innerHTML = 'o'
        element.classList.add('active')
        stat.innerHTML = 'o plaing..'
        turn = 'x'
    }
}
