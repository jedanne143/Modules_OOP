class Plant{
    constructor(name, genus, price, image){
        this.name = name;
        this.genus = genus;
        this.price = price;
        this.image = image;
    }
}
const p1 = new Plant("Serendipity Pink", "Alocasia", "$300", 'images/p1SerendipityPink.jpg')
const p2 = new Plant("Nobilis Pink", "Alocasia", "$500", 'images/p2NobilisPink.jpg')
const p3 = new Plant("Adansonii" , "Monstera" , "$100", "images/p3Adansonii.jpg")
const p4 = new Plant("Thai Constellation", "Monstera", "S100", "images/p4Thai.jpg")
const p5 = new Plant("Micans", "Philodendron", "150", "images/p5PinkMicans.jpg")
const p6 = new Plant ("Pink Caramel Marble", "Philodendron", "$400" , "images/p6CaramelMarble.jpeg")
let plantArray = [];
plantArray.push(p1, p2 , p3, p4, p5, p6)

export {plantArray}