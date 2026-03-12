export function Terminal({
  target,
  title = "terminal",
  content = "",
  typing = false,
  speed = 30
}) {

  const container = document.querySelector(target)
  if (!container) return

  const terminal = document.createElement("div")
  terminal.className = "terminal"

  terminal.innerHTML = `
    <div class="terminal-header">

      <div class="terminal-dots">
        <span class="dot red"></span>
        <span class="dot yellow"></span>
        <span class="dot green"></span>
      </div>

      <span class="terminal-title">${title}</span>

    </div>

    <div class="terminal-body">
      <pre class="terminal-content"></pre>
    </div>
  `

  container.innerHTML = ""
  container.appendChild(terminal)

  const contentBox = terminal.querySelector(".terminal-content")

  // NORMAL MODE
  if (!typing) {
    contentBox.innerHTML = content
    return
  }

  // TYPING MODE
  let i = 0

  function type() {
    if (i < content.length) {
      contentBox.innerHTML += content.charAt(i)
      i++
      setTimeout(type, speed)
    }
  }

  type()
}