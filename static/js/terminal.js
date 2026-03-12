const lines = [
"scraper.run()",
"Collecting data...",
"Processing dataset...",
"Automation ready ✔"
]

const terminal = document.getElementById("terminal-text")

let line = 0
let char = 0

function type(){

if(!terminal) return

if(line < lines.length){

if(char < lines[line].length){

terminal.innerHTML += lines[line].charAt(char)
char++

setTimeout(type,40)

}else{

terminal.innerHTML += "<br>$ "
line++
char = 0

setTimeout(type,400)

}

}

}

type()