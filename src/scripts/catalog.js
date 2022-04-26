// The Catalog function should accept the harvested food array as input.
export const Catalog = (harvestedPlants) => {
  let htmlString = "";
  // Create HTML representations of each plant
  for (const plant of harvestedPlants) {
    htmlString += `<section class="plant">${plant.type}</section>`;
  }

  return htmlString;
};
