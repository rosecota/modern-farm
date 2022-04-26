// Plan
import { createPlan } from "./plan.js";
// Field
import { usePlants } from "./field.js";
// Harvester
import { harvestPlants } from "./harvester.js";
import { plantSeeds } from "./tractor.js";

// Harvest plan
const yearlyPlan = createPlan();

// Sowing the Field With Your Tractor - use console.log() to see if the plants array has been populated correctly.
plantSeeds(yearlyPlan);

// Invoke usePlants() and store its return value in a variable.
const plantsGrowingInField = usePlants();

// Use console.log() to see your new array of harvested food to sell.
console.log(harvestPlants(plantsGrowingInField));
