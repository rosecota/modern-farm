let plantsGrowingInField = [];

export const addPlant = (seed) => {
  if (Array.isArray(seed)) {
    seed.forEach((item) => {
      plantsGrowingInField.push(item);
    });
  } else {
    plantsGrowingInField.push(seed);
  }
};

export const usePlants = () => {
  const copyOfPlantsGrowingInField = plantsGrowingInField.map((plantGrowingInField) => ({ ...plantGrowingInField }));

  return copyOfPlantsGrowingInField;
};
