function retrieveCode(){
    return document.getElementById("input").innerText;
}

let pointerPosition = 0;
let higherBound = 0;
let lowerBound = 0;
let values = [0];

function run(){
    pointerPosition = 0;
    higherBound = 0;
    lowerBound = 0;
    values = [0];

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
            updateDebugger();
            break;
        case '<':
            movePointerLeft();
            updateDebugger();
            break;
        case '+':
            addOneToCurrent();
            updateDebugger();
            break;
        case '-':
            subtractOneFromCurrent();
            updateDebugger();
            break;
        case '!':
            debug();
            break;
        default:
            break;
    }
}

function addOneToCurrent(){
    values[pointerPosition]++;
    if (values[pointerPosition]==256){
        values[pointerPosition]=0;
    }
}

function subtractOneFromCurrent(){
    values[pointerPosition]--;
    if (values[pointerPosition]==-1){
        values[pointerPosition]=255;
    }
}

function movePointerRight(){
    pointerPosition++;
    if (pointerPosition > higherBound){
        higherBound = pointerPosition;
        values[pointerPosition]=0;
    }
}

function movePointerLeft(){
    pointerPosition--;
    if (pointerPosition < lowerBound){
        lowerBound = pointerPosition;
        values[pointerPosition]=0;
    }
}

function updateDebugger(){
    document.getElementById("pointerIndex").innerText = "pointer index: "+pointerPosition;
    document.getElementById("stripRange").innerText = "value strip range: "+lowerBound+" - "+higherBound;

    let table = document.getElementById("mem_table").children[0].children[1];
    let i = 0;
    console.log(values);
    for (const child of table.children){
        if (i >= 26 && values[i-26]){
            child.innerText = values[i-26];
        }
        i++;
    }
}

function debug(){
    console.log("Pointer position: "+pointerPosition);
    console.log("values: ");console.log(values);
}