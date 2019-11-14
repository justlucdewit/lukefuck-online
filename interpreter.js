function retrieveCode(){
    return document.getElementById("input").innerText;
}

let pointerPosition = 0;

function run(){
    console.log("running code...");
    let code = retrieveCode();

    for(const char of code){
        interpret(char)
    }
}

function stop(){
    console.log("stopping code");
}

function interpret(char){
    switch(char){
        case '>':
            movePointerRight();
            break;
        case '<':
            movePointerLeft();
            break;
        case '!':
            debug();
            break;
        default:
            break;
    }
}

function movePointerRight(){
    pointerPosition++;
}

function movePointerLeft(){
    pointerPosition--;
}

function debug(){
    console.log("Pointer position: "+pointerPosition);
}