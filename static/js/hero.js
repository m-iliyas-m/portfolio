import { Terminal } from "./terminal.js"

document.addEventListener("DOMContentLoaded", () => {

  Terminal({
    target: "#hero-terminal",
    title: "terminal",
    typing: true,
    speed: 35,
    content: `$ python start.py

> Initializing developer profile...
> Loading automation tools...
> Ready to build scalable solutions 🚀`
  })

})