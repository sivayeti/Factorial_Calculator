const btn = document.getElementById('btn')
btn.addEventListener('click', getFact)

function getFact(){

    const num_el = document.getElementById('num')
    const op_el = document.getElementById('output')

    let num = Number(num_el.value)
    let result = fact(num)

    if(typeof result == 'number'){
        op_el.innerHTML = num + '! = ' + result
    }else{
        op_el.innerHTML = result
    }
    num_el.value = ''
}

// Factorial Function
function fact(num){
    if(num == 0){
        return 1;
    }else if(num > 0){
        return num * fact(num - 1)
    }else{
        playSound()
        return 'Do not play with me!'
    }
}


// Play Sound

function playSound(){
    let sound = new Audio('sounds/beep.mp3')
    sound.play()
}