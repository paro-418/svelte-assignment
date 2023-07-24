<script>
  import { selectedCars } from '../../../store/store.js';
  import { cars } from '../../../store/store.js';
  import Descriptioncard from '../../../components/descriptioncard.svelte';
  let selectedModel = {
      Name: '',
      Miles_per_Gallon: 0,
      Cylinders: 0,
      Displacement: 0,
      Horsepower: 0,
      Weight_in_lbs: 0,
      Acceleration: 0,
      Year: '',
      Origin: '',
    },
    allcars;
  cars.subscribe((value) => {
    allcars = value.carmodels;
  });

  selectedCars.subscribe((value) => {
    selectedModel = allcars.find((car) => car.Name === value.model);
    console.log(value);
  });
</script>

<section class="flex flex-col flex-grow overflow-hidden gap-8 p-8 bg-slate-100">
  <h1 class="capitalize text-xl">
    modal: <span class="text-4xlxl font-extrabold">{selectedModel.Name}</span>
  </h1>
  <div class="gap-14 grid grid-cols-4">
    <Descriptioncard
      heading="fuel consumption"
      paragraph={`${selectedModel.Miles_per_Gallon} miles per gallon`}
    />
    <Descriptioncard
      heading="Cylinders"
      paragraph={`${selectedModel.Cylinders}`}
    />
    <Descriptioncard
      heading="Displacement"
      paragraph={`${selectedModel.Displacement} cubic centimeters`}
    />
    <Descriptioncard
      heading="Horse Power"
      paragraph={`${selectedModel.Horsepower}`}
    />
    <Descriptioncard
      heading="Weight"
      paragraph={`${selectedModel.Weight_in_lbs} lbs`}
    />
    <Descriptioncard
      heading="Acceleration"
      paragraph={`${selectedModel.Acceleration} meter/second^2`}
    />
    <Descriptioncard heading="Launched" paragraph={`${selectedModel.Year}`} />
    <Descriptioncard heading="Origin" paragraph={`${selectedModel.Origin}`} />
  </div>
</section>
