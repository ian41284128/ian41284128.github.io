let animationFrames = ['/', '-', '\\', '|']
let loadingSpan = document.getElementById('loading-animation')

let portfolioContent = document.getElementById("portfolio-items")
let PortfolioItemsCount = document.getElementsByClassName("portfolio-item").length
let portfolioContentsTable = document.getElementById("games-contents").children

portfolioContent.parentElement.onscroll = () => {
    let itemsRect = portfolioContent.getBoundingClientRect()
    let windowRect = portfolioContent.parentElement.getBoundingClientRect()
    let scrollAmount = windowRect.top - itemsRect.top
    let scrollPercent = scrollAmount / (itemsRect.height - windowRect.height)
    let topIdx = Math.min(Math.floor(scrollPercent * PortfolioItemsCount), PortfolioItemsCount-1)
    for(let i = 0; i < portfolioContentsTable.length; i++){
        portfolioContentsTable.item(i).classList.remove("underlined")
    }
    portfolioContentsTable.item(topIdx).classList.add("underlined")
    console.log(topIdx)
}

new ResizeObserver(() => {
    document.documentElement.style.setProperty("--icon-container-width", 
        document.getElementById('icon-container').offsetWidth + 'px')
}).observe(document.getElementById('icon-container'))

window.handleExpand = (id, flag) => {
    let elem = document.getElementById(id)
    if(elem.classList.contains("expanded") && flag == false){
        elem.classList.remove("expanded")
    } else if (flag = true) {
        elem.classList.add("expanded")
    }
}

window.scrollToPortfolioItem = (id) => {
    window.handleExpand('portfolio', true)
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