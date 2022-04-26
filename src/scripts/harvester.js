// The harvestPlants function must accept the plants array as input. The function will return an array of seed objects.
export const harvestPlants = (plants) => {
  let harvestOutput = [];
  plants.forEach((plant) => {
    // Get the value of the plant output property.
    harvestOutput.push(repeatPlant(plant, plant.output));
  });

  // return an array of seed objects
  return harvestOutput.flat();
};

const repeatPlant = (item, count) => {
  // Again, the exception is corn. Half of your corn will be sold to cattle ranchers, so only half of the output of each corn plant will be added to the array that this function returns.
  if (item.type === "Corn") {
    count = count / 2;
  }
  // Add that many of the plant objects to the array that the function returns.
  return Array(count).fill(item);
};
