let var_names = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('');

let mem_table = document.getElementById("mem_table");
let mem_table_length = 34+26;
let mem_col_index = mem_table.children[0].children[0];
let mem_col_value = mem_table.children[0].children[1];

for (let i = 0; i < mem_table_length; i++){
    let td1 = document.createElement("td");
    if (i < 26){
        td1.innerHTML = var_names[i]
    }else{
        td1.innerHTML = i-26;
    }

    let td2 = document.createElement("td");
    td2.innerHTML = 0;

    mem_col_index.appendChild(td1);
    mem_col_value.appendChild(td2);
}

function download(filename, text) {
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);
  
    element.style.display = 'none';
    document.body.appendChild(element);
  
    element.click();
  
    document.body.removeChild(element);
  }

function downloadFile(){
    data = document.getElementById("input").innerText;
    download("program.lf", data)
}