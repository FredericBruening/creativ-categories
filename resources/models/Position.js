class Position {
    constructor() {
        this.name = 'vorne'
        this.description = ''
        this.type = 'nach Eignung'
        this.imagePath = '/mediafiles/Bilder/icons/enquiry-form/positions/position1.png'
        this.files = []
        this.colors = [{ color: '#00000' }]
        this.color = ''
    }

    addColor() {
        this.colors.push({ color: '#00000' })
    }

    resetColors() {
        this.colors = [{ color: '#00000' }]
    }
}

export default Position