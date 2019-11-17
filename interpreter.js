/*hello world
++++++++[>++++[>++>+++>+++>+<<<<-]>+>+>->>+[<]<-]>>.>---.+++++++..+++.>>.<-.<.+++.------.--------.>>+.>++.
*/

function retrieveCode(){
    return document.getElementById("input").innerText;
}

let pointerPosition = 0;
let higherBound = 0;
let lowerBound = 0;
let valuesarr = [0];
let looppoints = [];
let output = 69420;

function run(){
    resetMem()
    pointerPosition = 0;
    higherBound = 0;
    lowerBound = 0;
    looppoints = [];
    valuesarr = [0];
    if (output != 69420){
        output.close();
    }
    createConsole();
    output.document.write("<style>*{background-color:black; color: rgb(0, 255, 0);}</style>");
    

    let code = retrieveCode();
    for(let i = 0; i < code.length; i++){
        let result = interpret(code[i], i)
        if (result == 1){
            i = (looppoints[looppoints.length-1]);
        }
    }
}

function stop(){

}

function interpret(char, i){
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
        case '[':
            saveloop(i);
            break;
        case ']':
            updateDebugger();
            if (breakloop()){
                return 1;
            }
            break;
        case '!':
            debug();
            break;
        case '.':
            printchar();
            break;
        case ',':
            readchar();
            updateDebugger();
            break;
        default:
            break;
    }
    return false;
}

function readchar(){
    let code = prompt("Please press a key and press enter").charCodeAt();
    valuesarr[pointerPosition] = code;
    console.log(code);
}

function printchar(){
    let char = String.fromCharCode(valuesarr[pointerPosition]);
    output.document.write(char);
}

function saveloop(i){
    looppoints.push(i);
}

function breakloop(){
    if (valuesarr[pointerPosition]==0){
        looppoints.pop();
    }else{
        return true;
    }
}

function addOneToCurrent(){
    valuesarr[pointerPosition]++;
    if (valuesarr[pointerPosition]==256){
        valuesarr[pointerPosition]=0;
    }
}

function subtractOneFromCurrent(){
    valuesarr[pointerPosition]--;
    if (valuesarr[pointerPosition]==-1){
        valuesarr[pointerPosition]=255;
    }
}

function movePointerRight(){
    pointerPosition++;
    if (pointerPosition > higherBound){
        higherBound = pointerPosition;
        valuesarr[pointerPosition]=0;
    }
}

function movePointerLeft(){
    pointerPosition--;
    if (pointerPosition < lowerBound){
        lowerBound = pointerPosition;
        valuesarr[pointerPosition]=0;
    }
}

function updateDebugger(){
    document.getElementById("pointerIndex").innerText = "pointer index: "+pointerPosition;
    document.getElementById("stripRange").innerText = "value strip range: "+lowerBound+" - "+higherBound;

    let table = document.getElementById("mem_table").children[0].children[1];
    test = table;
    let i = 0;
    for (const child of table.cells){
        if (i >= 26 && typeof(valuesarr[i-26])!="undefined"){
            child.innerText = valuesarr[i-26];
        }
        i++;
    }
}

function resetMem(){
    let table = document.getElementById("mem_table").children[0].children[1];
    for (const child of table.children){
        child.innerText = 0;
    }
}

function debug(){
    console.log("Pointer position: "+pointerPosition);
    console.log("valuesarr: ");console.log(valuesarr);
}

function createConsole(){
    output = window.open("", "console", "width=300,height=300,scrollbars=1,resizable=1");
}