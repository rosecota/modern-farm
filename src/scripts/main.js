// Plan
import { createPlan } from "./plan.js";
// Seeds
import { createAsparagus } from "./seeds/asparagus.js";
import { createCorn } from "./seeds/corn.js";
import { createPotato } from "./seeds/potato.js";
import { createSoybean } from "./seeds/soybean.js";
import { createSunflower } from "./seeds/sunflower.js";
import { createWheat } from "./seeds/wheat.js";
// Field
import { addPlant, usePlants } from "./field.js";
// Harvester
import { harvestPlants } from "./harvester.js";

// Harvest plan
const yearlyPlan = createPlan();

// Create a seed objects
const asparagusSeed = createAsparagus();
const cornSeed = createCorn();
const potatoSeed = createPotato();
const soybeanSeed = createSoybean();
const sunflowerSeed = createSunflower();
const wheatSeed = createWheat();

// Tilling the field
// Invoke addPlant() and specify the seed object as the argument.
addPlant(asparagusSeed);
addPlant(cornSeed);
addPlant(potatoSeed);
addPlant(soybeanSeed);
addPlant(sunflowerSeed);
addPlant(wheatSeed);

// Invoke usePlants() and store its return value in a variable.
const plantsGrowingInField = usePlants();

// Use console.log() to see your new array of harvested food to sell.
console.log(harvestPlants(plantsGrowingInField));
