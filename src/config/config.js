// Images
import model1 from 'assets/images/mazdaCX9.jpg';
import model2 from 'assets/images/mazda3.jpg';
import model3 from 'assets/images/mazda6.avif';

import mazda61 from 'assets/images/1_mazda6.png';
import mazda62 from 'assets/images/2_mazda6.png';
import mazda63 from 'assets/images/3_mazda6.png';

import mazdaCX301 from 'assets/images/1_mazdaCX30.png';
import mazdaCX302 from 'assets/images/2_mazdaCX30.png';
import mazdaCX303 from 'assets/images/3_mazdaCX30.png';

import mazdaCX51 from 'assets/images/1_mazdaCX5.png';
import mazdaCX52 from 'assets/images/2_mazdaCX5.png';
import mazdaCX53 from 'assets/images/3_mazdaCX5.png';

import mazdaCX91 from 'assets/images/1_mazdaCX9.png';
import mazdaCX92 from 'assets/images/2_mazdaCX9.png';
import mazdaCX93 from 'assets/images/3_mazdaCX9.png';

import mazdaMX51 from 'assets/images/1_mazdaMX5.png';
import mazdaMX52 from 'assets/images/2_mazdaMX5.png';
import mazdaMX53 from 'assets/images/3_mazdaMX5.png';

export const cars = [
  {
    id: 1,
    image: model1,
    title: 'The 2022 Mazda CX9',
    description: 'Mazda CX-9 is the flagship three-row midsize crossover SUV.',
  },
  {
    id: 2,
    image: model2,
    title: 'The 2014 Mazda 3',
    description: 'The 2014 Mazda 3 marks the third generation of the compact car favorite.',
  },
  {
    id: 3,
    image: model3,
    title: 'The 2022 Mazda 6',
    description: 'The Mazda 6 is a mid-size sedan produced by Mazda since 2002 with the 1st generation.',
  },
];

export const cars2 = [
  {
    id: 1,
    image: [mazda61, mazda62, mazda63],
    title: 'MAZDA 6',
    fuel: 'PETROL',
    color: 'red',
    salon: 'leather black',
    engine: 'Skyactiv-G',
    price: '1 238 400 грн.',
    // description: ``,
  },
  {
    id: 2,
    image: [mazdaCX301, mazdaCX302, mazdaCX303],
    title: 'MAZDA CX-30',
    fuel: 'PETROL',
    color: 'red',
    salon: 'leather black',
    engine: 'Skyactiv-G',
    price: '1 238 400 грн.',
  },
  {
    id: 3,
    image: [mazdaCX51, mazdaCX52, mazdaCX53],
    title: 'MAZDA CX-5',
    fuel: 'PETROL',
    color: 'red',
    salon: 'leather black',
    engine: 'Skyactiv-G',
    price: '1 238 400 грн.',
  },
  {
    id: 4,
    image: [mazdaCX91, mazdaCX92, mazdaCX93],
    title: 'MAZDA CX-9',
    fuel: 'PETROL',
    color: 'dark gray',
    salon: 'leather black',
    engine: 'Skyactiv-G',
    price: '1 238 400 грн.',
  },
  {
    id: 5,
    image: [mazdaMX51, mazdaMX52, mazdaMX53],
    title: 'MAZDA MX-5',
    fuel: 'PETROL',
    color: 'red',
    salon: 'leather black',
    engine: 'Skyactiv-G',
    price: '1 238 400 грн.',
  },
];
