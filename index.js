let animationFrames = ['/', '-', '\\', '|']
let loadingSpan = document.getElementById('loading-animation')

new ResizeObserver(() => {
    document.documentElement.style.setProperty("--icon-container-width", 
        document.getElementById('icon-container').offsetWidth + 'px')
}).observe(document.getElementById('icon-container'))

window.handleExpand = (id) => {
    let elem = document.getElementById(id)
    if(elem.classList.contains("expanded")){
        elem.classList.remove("expanded")
    } else {
        elem.classList.add("expanded")
    }
}

window.scrollToPortfolioItem = (id) => {
    window.handleExpand('portfolio')
    let elem = document.getElementById(id);
    setTimeout(() => elem.scrollIntoView({ behavior: "smooth" }), 500)
}

function animateTerminal(frame){
    loadingSpan.textContent = animationFrames[frame]
}

function typingAnimation(element, text, next){
    let char = text.shift()
    element.innerText = element.innerText.slice(0, -1)
    element.textContent += char + "█"
    if(text.length > 0){
        setTimeout(() => {
            typingAnimation(element, text, next)
        }, 15)
    }else{
        setTimeout(() => {
            element.innerText = element.innerText.slice(0,-1)
            next()
        }, 500)
    }
}

const buildSequence = (elements, innerTexts) => {
    if(elements.length == 0)
        return () => {
            let frame = 0
            setInterval(() => {
                animateTerminal(frame)
                frame = (frame + 1) % animationFrames.length
            }, 125);
        }
    const element = elements.shift()
    let text = innerTexts.shift()
    return () => typingAnimation(element, text.split(''), buildSequence(elements, innerTexts))
}

let elements = Array.from(document.getElementsByClassName('type'))
let innerTexts = elements.map(n => n.innerText)
elements.forEach(n => n.innerText = '')
buildSequence(elements, innerTexts)()