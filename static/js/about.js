const aboutData = {

location:"Dhaka, Bangladesh",

description:
"From building custom web scrapers collecting millions of records to creating scalable automation systems, I specialize in transforming complex data challenges into efficient solutions.",

skills:[
"Python",
"Scrapy",
"Pandas",
"Selenium",
"Django",
"Machine Learning"
]

}

document.getElementById("about-description")
.textContent = aboutData.description

document.getElementById("about-location")
.textContent = aboutData.location


const tags = document.getElementById("about-tags")

aboutData.skills.forEach(skill=>{
tags.innerHTML += `<span>${skill}</span>`
})


document.getElementById("about-code").textContent = `
class Developer:

 name = "MD Kawsar"

 focus = ["Automation","Data","AI"]

 location = "Dhaka, Bangladesh"
`