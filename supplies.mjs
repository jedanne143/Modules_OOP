class Supplies{
    constructor(name, price, image, group){
        this.name = name;
        this.price = price;
        this.image = image;
        this.group = group;
    }
}
let supplyArray = [];

let s1 = new Supplies(
    "Pebble Clay - 20lbs" , 
    "$39.99", 
    "images/clayPebbles.jpg" , 
    "potting mix"
);
let s2 = new Supplies(
    "Lava Rocks Mix/ Pummice - 12lbs", 
    "$26.99" , 
    "images/pummice.jpg" , 
    "potting mix");
let s3 = new Supplies(
    "Orchid Mix" , 
    "$12.00", 
    "images/orchidMix.jpg" , 
    "potting mix");
let s4 = new Supplies(
    "Spagnum Moss", 
    "$12.00", 
    "images/spagnumMoss.jpg", 
    "potting mix");
let s5 = new Supplies(
    "Organic Perlite - 8qts", 
    "$18.99" , 
    "images/perlite.jpg" , 
    "potting mix");
let s6 = new Supplies(
    "Coconut Coir Peat Brick - Pack of 2" , 
    "$12.99" , 
    "images/coconutCoir.jpg" , 
    "potting mix");
let s7 = new Supplies(
    "Liquid Plant Food - 8oz", 
    "$8.50" , 
    "images/plantFood.jpg" , 
    "fertilizer");
let s8 = new Supplies(
    "24in Metal Moss Pole - Pack of 4", 
    "$10" , 
    "images/metalPole.jpg", 
    "plant care supplies");
let s9 = new Supplies(
    "17in Plastic Moss Pole - Pack of 4", 
    "$18.99" , 
    "images/plasticPole.jpg" , 
    "plant care supplies");
let s10 = new Supplies(
    "36pcs Mini Clay Pots" , 
    "$20.00" , 
    "images/miniPots.jpg" , 
    "plant care supplies");
let s11 = new Supplies(
    "Ceramic Pots - Set of 3" , 
    "$17.99", 
    "images/ceramicPot.jpg" , 
    "plant care supplies")
let s12 = new Supplies(
    "Plastic Pots - Pack of 7" , 
    "$17.99", 
    "images/plasticPots.jpg" , 
    "plant care supplies")
let s13 = new Supplies(
    "Nursery Pots - 36pcs" , 
    "$29.99" , 
    "images/nurseryPots.jpg", 
    "plant care supplies")

supplyArray.push(s1, s2, s3, s4, s5, s6, s7, s8, s9, s10, s11, s12 , s13)

export{supplyArray}