export const clearElement = (element) => {
    while(element.firstElementChild) {
        element.removeChild(element.firstElementChild)
    }
}
export const $ = (selectors) => {
    const selectorAll = document.querySelectorAll(selectors)
    if ( selectorAll.length > 1 ) {
        return selectorAll
    }
    return document.querySelector(selectors)
}