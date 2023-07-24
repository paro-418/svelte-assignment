import { writable } from 'svelte/store';
import carmanufacturer from '../car-manufacturer.json';
import carmodels from '../car-models.json';

export const selectedCars = writable({
  brand: '',
  model: '',
});

export const cars = writable({
  carmanufacturer,
  carmodels,
});

export const modalStore = writable({
  showBrandModal: false,
  showBrandDetailModal: false,
});
