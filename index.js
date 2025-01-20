const expand = new Event("expand")
const minimize = new Event("minimize")

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