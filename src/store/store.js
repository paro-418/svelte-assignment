import { writable } from 'svelte/store';
import carmanufacturer from '../car-manufacturer.json';
import carmodels from '../car-models.json';

export const selectedCars = writable({
  brand: '',
  model: '',
  // selectedModelInfo: {
  //   Name: '',
  //   Miles_per_Gallon: 0,
  //   Cylinders: 0,
  //   Displacement: 0,
  //   Horsepower: 0,
  //   Weight_in_lbs: 0,
  //   Acceleration: 0,
  //   Year: '',
  //   Origin: '',
  // },
});

export const cars = writable({
  carmanufacturer,
  carmodels,
});
