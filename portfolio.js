const portfolioContent = document.getElementById("portfolio-items")
const PortfolioItemsCount = document.getElementsByClassName("portfolio-item").length
const portfolioContentsTable = document.getElementById("games-contents").children

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