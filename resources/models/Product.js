import Position from './Position'

class Product {

    constructor(name = 'T-Shirt Unisex') {
        this.name = name
        this.description = ''
        this.type = {
            name: 'T-Shirt Unisex',
            imagePath: '/mediafiles/Bilder/icons/enquiry-form/items/item1.png'
        }
        this.category = 'Textilien'
        this.quality = ''
        this.color = ''
        this.sizes = [
            { name: 'XS', value: 0 },
            { name: 'S', value: 0 },
            { name: 'M', value: 0 },
            { name: 'L', value: 0 },
            { name: 'XL', value: 0 },
            { name: 'XXL', value: 0 },
            { name: 'XXXL', value: 0 },
        ]

        this.totalAmount = 0

        this.positions = [ new Position() ]
    }

    addPosition(props) {
        this.positions.push(new Position(props))
    }

    removePosition(index) {
        this.positions.splice(index, 1)
    }

    refreshTotalAmount() {
        let totalAmount = 0

        this.sizes.forEach(size => {
            totalAmount = +totalAmount + +size.value
        })

        this.totalAmount = totalAmount
    }

    resetTotalAmount() {
        this.sizes.forEach(size => size.value = 0)        
    }

    setType(type) {
        this.type = type

        
    }
}

export default Product