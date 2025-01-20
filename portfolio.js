const portfolioContent = document.getElementById("portfolio-items")
const portfolioItems = document.getElementsByClassName("portfolio-item")
const portfolioContentsTable = document.getElementById("games-contents").children

let underlinedItem = 0
let lastScrollTop = portfolioContent.parentElement.scrollTop

function getItemHeight(item){
    return item.getBoundingClientRect().top - portfolioContent.parentElement.getBoundingClientRect().top
}

portfolioContent.parentElement.onscroll = () => {
    if(portfolioContent.parentElement.scrollTop < lastScrollTop) { //scroll-up
        if(underlinedItem > 0 && 
            Math.abs(getItemHeight(portfolioItems.item(underlinedItem))) > 
            Math.abs(getItemHeight(portfolioItems.item(underlinedItem - 1)))
        ) {
            portfolioContentsTable.item(underlinedItem).classList.remove("underlined")
            underlinedItem--
            console.log("scrolled up")
            portfolioContentsTable.item(underlinedItem).classList.add("underlined")
        }
    } else if (portfolioContent.parentElement.scrollTop > lastScrollTop) { //scroll-down
        if(underlinedItem < portfolioItems.length - 1 &&
            Math.abs(getItemHeight(portfolioItems.item(underlinedItem))) >
            Math.abs(getItemHeight(portfolioItems.item(underlinedItem + 1)))
        ) {
            portfolioContentsTable.item(underlinedItem).classList.remove("underlined")
            underlinedItem++
            portfolioContentsTable.item(underlinedItem).classList.add("underlined")
        }
    } //else horizontal scroll
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