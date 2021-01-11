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

export const getMaxIdx = (arr) => {
    return arr.indexOf(Math.max(arr))
}

export const getMinIdx = (arr) => {
    return arr.indexOf(Math.min(arr))
}

export const test = () => {}