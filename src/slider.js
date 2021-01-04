console.log("hello world!")

let curIdx = 0;

class Slider {
    $slider = null

    constructor(target,items){
        this.items = items
        this.$slider = target
        this.render()
    }

    renderItems() {
        console.log(this.items)
        this.items.forEach( (item,idx) => {
            const $item = new Item(item,idx).element
            this.$slider.appendChild($item)
        })
    }

    render() {
        this.renderItems()
    }
}

class Item {
    element = null

    constructor(item,idx) {
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

new Slider(document.querySelector(".slider"),images)

class Controller {

}