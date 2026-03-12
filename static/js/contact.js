document.getElementById("contactForm").addEventListener("submit",(e)=>{

e.preventDefault()

const data = Object.fromEntries(
new FormData(e.target).entries()
)

console.log("Form Data:",data)

/* later you can replace with */

fetch("/api/contact",{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify(data)
})

})