const animationFrames = ['/', '-', '\\', '|']
const loadingSpan = document.getElementById('loading-animation')

const portfolioContent = document.getElementById("portfolio-items")
const PortfolioItemsCount = document.getElementsByClassName("portfolio-item").length
const portfolioContentsTable = document.getElementById("games-contents").children

const expand = new Event("expand")
const minimize = new Event("minimize")

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
}

new ResizeObserver(() => {
    document.documentElement.style.setProperty("--icon-container-width", 
        document.getElementById('icon-container').offsetWidth + 'px')
}).observe(document.getElementById('icon-container'))

window.handleExpand = (id, setExpand) => {
    let elem = document.getElementById(id)
    if(elem.classList.contains("expanded") && setExpand == false){
        elem.classList.remove("expanded")
        elem.dispatchEvent(minimize)
    } else if (setExpand = true) {
        elem.classList.add("expanded")
        elem.dispatchEvent(expand)
    }
}

document.getElementById("portfolio").addEventListener("minimize", () => {
    const items = document.getElementsByClassName("portfolio-item")
    let topItem = items.item(items.length-1)
    for(let i = 0; i < items.length; i++){
        let top = items.item(i).getBoundingClientRect().top
        if(Math.abs(top) < Math.abs(topItem.getBoundingClientRect().top)){
            topItem = items.item(i)
        }
    }
    for(let i = 0; i < items.length; i++){
        items.item(i).classList.remove("show-content", "gradual-expand")
    }
    console.log(topItem)
    topItem.scrollIntoView()
})

window.scrollToPortfolioItem = (id) => {
    let elem = document.getElementById(id)
    elem.scrollIntoView({ behavior: "smooth" })
}

window.portfolioExpandAndScroll = (id) => {
    if(document.getElementById("portfolio").classList.contains("expanded"))
        return
    window.handleExpand('portfolio', true)
    let elem = document.getElementById(id)
    elem.scrollIntoView({ behavior: "smooth" })
    elem.classList.add("show-content", "gradual-expand")
    setTimeout(() => {
        const items = document.getElementsByClassName("portfolio-item")
        for(let i = 0; i < items.length; i++){
            if(items.item(i) != elem){
                items.item(i).classList.add("show-content")
            }
        }
        elem.scrollIntoView()
    }, 1000);
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