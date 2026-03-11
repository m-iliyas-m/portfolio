const textLines = [
"$ python analyze.py",
"Running automation...",
"Processing data...",
"AI ready"
]

const terminal = document.getElementById("terminal-text")

let line = 0
let char = 0

function type(){

if(line < textLines.length){

if(char < textLines[line].length){

terminal.innerHTML += textLines[line].charAt(char)
char++

setTimeout(type,40)

}else{

terminal.innerHTML += "<br>"
line++
char=0

setTimeout(type,400)

}

}

}

type()