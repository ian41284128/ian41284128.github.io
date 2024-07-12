let animationFrames = ['/', '-', '\\', '|']
let loadingSpan = document.getElementById('loading-animation')

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
        }, ".,?!".includes(char) ? 250 : 25)
    }else{
        element.innerText = element.innerText.slice(0,-1)
        setTimeout(next, 500)
    }
}

const buildSequence = (elements) => {
    if(elements.length == 0)
        return () => {
            let frame = 0
            setInterval(() => {
                animateTerminal(frame)
                frame = (frame + 1) % animationFrames.length
            }, 125);
        }
    const element = elements.shift()
    let text = element.innerText
    element.innerText = ''
    return () => typingAnimation(element, text.split(''), buildSequence(elements))
}

buildSequence(Array.from(document.getElementsByClassName('type')))()