// Seeds
import { createAsparagus } from "./seeds/asparagus.js";
import { createCorn } from "./seeds/corn.js";
import { createPotato } from "./seeds/potato.js";
import { createSoybean } from "./seeds/soybean.js";
import { createSunflower } from "./seeds/sunflower.js";
import { createWheat } from "./seeds/wheat.js";
// Field
import { addPlant } from "./field.js";

// Create a seed objects
let asparagusSeed = createAsparagus();
let cornSeed = createCorn();
let potatoSeed = createPotato();
let soybeanSeed = createSoybean();
let sunflowerSeed = createSunflower();
let wheatSeed = createWheat();

export const plantSeeds = (plan) => {
  plan.forEach((row) => {
    for (var value of row.values()) {
      // As you iterate the row of food types to be planted, invoke the corresponding factory function (e.g. if the food type is "Asparagus", invoke the createAsparagus function to get an asparagus seed).
      let seedType;
      value = value.toLowerCase();

      switch (value) {
        case "asparagus":
          seedType = asparagusSeed;
          break;
        case "corn":
          seedType = cornSeed;
          break;
        case "potato":
          seedType = potatoSeed;
          break;
        case "soybean":
          seedType = soybeanSeed;
          break;
        case "sunflower":
          seedType = sunflowerSeed;
          break;
        case "wheat":
          seedType = wheatSeed;
          break;
        default:
          console.log("Sorry no plant.");
          break;
      }

      // Take that seed and add it to the array of plants in the field module.
      addPlant(seedType); // Tilling the field - Invoke addPlant() and specify the seed object as the argument.
    }
  });
};
