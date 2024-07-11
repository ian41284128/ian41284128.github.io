let animationFrames = ['/', '-', '\\', '|']
let loadingSpan = document.getElementById('loading-animation')

function animateTerminal(frame){
    loadingSpan.textContent = animationFrames[frame]
}

let frame = 0;
setInterval(() => {
    animateTerminal(frame)
    frame = (frame + 1) % animationFrames.length
}, 125);