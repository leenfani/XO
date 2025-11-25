let turn = 'x' ;
let stat = document.querySelector('.stat');
let squares = [];
let winCombos = [
    [1,2,3], // صفوف
    [4,5,6],
    [7,8,9],
    [1,4,7], // أعمدة
    [2,5,8],
    [3,6,9],
    [1,5,9], // أقطار
    [3,5,7]
];
function restart(){
    
    setInterval(function(){stat.innerHTML += '.'},1000)
    setTimeout(function(){location.reload()},2500)
    
}
function winner(){
    // put innerHTML of each square in i in squares  
    for(i = 1; i < 10; i++){
        squares[i] = document.getElementById('item' + i).innerHTML;
    }
    // combo of winCombo values comparison 
    for(let combo of winCombos){
        let [a, b, c] = combo;
        if (squares[a] !== '' && squares[a] === squares[b] && squares[b] === squares[c]){
            stat.innerHTML = squares[a] + ' Win'
            restart()
            return;
        }
    }
    let full = true;
    for(let i = 1; i < 10; i++){
        if(squares[i] === ''){
            full = false;
            break;
        }
    }
    if(full){
        stat.innerHTML = 'Draw';
        restart()
    }
   
}
function game(id){
    let element = document.getElementById (id)
    if(turn === 'x' && element.innerHTML == ''){
        element.innerHTML = 'x';
        element.classList.add('active');
        stat.innerHTML = 'o plaing..';
        turn = 'o';
    }else if (turn !== 'x' && element.innerHTML == ''){
        element.innerHTML = 'o';
        element.classList.add('active');
        stat.innerHTML = 'x plaing..';
        turn = 'x';
    }
    winner()
}
