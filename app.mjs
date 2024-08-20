import { plantArray } from "./plant.mjs";   
import { supplyArray } from "./supplies.mjs";

const selectElement = document.getElementById('selectedPlant');
const selectedSupply = document.getElementById('selectedSupply');
const plantContainer = document.getElementById('plantContainer');
const supplyContainer = document.getElementById('supplyContainer');
const plantButton = document.getElementById("plantButton");
const supplyButton = document.getElementById("supplyButton");
const plantBContainer = document.getElementById("plantBContainer")
//==========PLANTS=================
// Create dropdown menu and plants cards
function plantDropDown () {
    plantArray.forEach((plant, index) => {
        const option = document.createElement('option');
        option.value = index;
        option.textContent = plant.name;
        selectElement.appendChild(option);
    });
}

function allPlants() {
    plantContainer.innerHTML = '';  // Clear existing content first
    plantArray.forEach(plant => {
        const plantElement = `
            <div class="plant">
                <div class="pName">Name: ${plant.name}</div>
                <div class="pGenus">Genus: ${plant.genus}</div>
                <div class="pPrice">Price: ${plant.price}</div>
                <img class="image" src="${plant.image}" alt="${plant.name}">
            </div>
        `;
        plantContainer.innerHTML += plantElement;
    });
}


function allSupply() {
    supplyContainer.innerHTML = '';  // Clear existing content first
    supplyArray.forEach(supply => {
        const supplyElement = `
            <div class="plant">
                <div class="pName">Name: ${supply.name}</div>
                <div class="pPrice">Price: ${supply.price}</div>
                <img class="image" src="${supply.image}" alt="${supply.name}">
            </div>
        `;
        supplyContainer.innerHTML += supplyElement;
    });
}


//===========Plants===========
plantDropDown()
allPlants() 

// Event listener for search button
selectElement.addEventListener('change', () => {
    const selectedIndex = selectElement.value;
    const selectedPlant = plantArray[selectedIndex];
    if (selectedIndex === "all"){
        allPlants();
    }
    // Update the plantContainer with the selected plant's details
    plantContainer.innerHTML = `
        <div class="plant">
            <div class="pName">Name: ${selectedPlant.name}</div>
            <div class="pGenus">Genus: ${selectedPlant.genus}</div>
            <div class="pPrice">Price: ${selectedPlant.price}</div>
            <img class="image" src="${selectedPlant.image}" alt="${selectedPlant.name}">
        </div>
`;
});

plantButton.addEventListener("click" , () => {
    supplyContainer.style.display = "none";
    plantBContainer.style.display = "flex";
    plantContainer.style.display = "flex";
    plantDropDown()
    allPlants() ;

})

//============Supplies ==========


supplyButton.addEventListener("click" , () => {
    plantBContainer.style.display = "none";
    plantContainer.style.display = "none";
    supplyContainer.style.display = "flex";
    allSupply();
})

