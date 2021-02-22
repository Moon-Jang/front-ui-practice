import { clearElement, $ } from "./util.js"
let curIdx = 0;
let itemSize = 0;

class Slider {
    $slider = null

    constructor(target, items) {
        this.items = items
        this.$slider = target
        itemSize = items.length
        this.render()
    }

    renderItems() {
        console.log(this.items)
        clearElement(this.$slider)
        this.items.forEach((item, idx) => {
            const $item = new Item(item, idx).element
            this.$slider.appendChild($item)
        })
    }

    render() {
        this.renderItems()
    }
}

class Item {
    element = null

    constructor(item, idx) {
        this.item = item
        this.idx = idx
        this.render()
    }


    render() {
        const $item = document.createElement("div")
        $item.className = this.idx === curIdx ? `item active` : `item`
        $item.style.backgroundImage = `url(${this.item.url})`
        this.element = $item
    }

}

const images = [
    { name: "cloudy sky", url: "https://cdn.pixabay.com/photo/2015/03/26/09/47/sky-690293__340.jpg" },
    { name: "office business", url: "https://cdn.pixabay.com/photo/2016/02/19/11/19/office-1209640_960_720.jpg" },
    { name: "milky way", url: "https://cdn.pixabay.com/photo/2015/10/12/14/59/milky-way-984050__340.jpg" },
]

class Controller {
    $controller = null
    $prevBtn = null
    $nextBtn = null

    constructor(target) {
        this.$controller = target
        this.$prevBtn = document.getElementById("prevBtn")
        this.$nextBtn = document.getElementById("nextBtn")
        this.$prevBtn.addEventListener("click", this.clickPrevBtn)
        this.$nextBtn.addEventListener("click", this.clickNextBtn)
        this.render()
    }
    clickPrevBtn(e) {
        if (curIdx - 1 < 0) {
            curIdx = itemSize - 1
        } else {
            curIdx--
        }
        slider.render()
        indicators.render()
    }
    clickNextBtn(e) {
        if (curIdx + 1 > itemSize - 1) {
            curIdx = 0
        } else {
            curIdx++
        }
        slider.render()
        indicators.render()
    }

    render() { }
}

class IndicatorWrap {
    $indicatorWrap = null

    constructor(target) {
        this.$indicatorWrap = target
        this.render()
    }

    renderIndicator() {
        clearElement(this.$indicatorWrap)
        for (let i = 0; i < itemSize; i++) {
            const indicator = new Indicator(i)
            this.$indicatorWrap.appendChild(indicator.element)
        }
    }

    render() {
        this.renderIndicator()
    }
}
class Indicator {
    element = null

    constructor(idx) {
        this.idx = idx
        this.render()
    }

    render() {
        const $indicator = document.createElement("li")
        $indicator.className = this.idx === curIdx ? `indicator selected` : `indicator`
        this.element = $indicator
    }
}

const slider = new Slider($(".slider"), images)
const indicators = new IndicatorWrap($(".indicators"))
const controller = new Controller($(".controller"))
