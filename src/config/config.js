// Cars of cars
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

// Image for configuration settings page
import red from 'assets/images/red.webp';
import black from 'assets/images/black.webp';
import white from 'assets/images/white.webp';
import gray from 'assets/images/darkGray.webp';

import leatherBlack from 'assets/images/leatherBlackCombi.png';
import leatherRed from 'assets/images/leatherRed.jpg';
import leatherBrown from 'assets/images/leatherBrown.png';
import textileBlack from 'assets/images/textileBlack.png';

import premiumBlack from 'assets/images/alloyWheel1.png';
import premiumGray from 'assets/images/alloyWheel2.png';
import deluxe from 'assets/images/alloyWheel3.jpg';
import standart from 'assets/images/alloyWheel4.jpg';

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

export const carsModel = [
  {
    id: 1,
    image: [mazda61, mazda62, mazda63],
    title: 'MAZDA 6',
    fuel: 'PETROL',
    color: 'red',
    salon: 'leather black',
    engine: 'Skyactiv-G',
    alloyWheel: 'standart',
    price: 33625,
    description: 'The Mazda6 offers quality and refinement taken to an even higher level. Stand out on the road with the ultimate thoughtful, elegant and sophisticated exterior design. New technologies ensure the perfect operation of SKYACTIV power units, and driving dynamics have been improved thanks to increased body rigidity, control and braking systems, higher aerodynamic efficiency and reduced noise and vibration.',
  },
  {
    id: 2,
    image: [mazdaCX301, mazdaCX302, mazdaCX303],
    title: 'MAZDA CX-30',
    fuel: 'PETROL',
    color: 'red',
    salon: 'leather black',
    engine: 'Skyactiv-G TURBO',
    alloyWheel: 'standart',
    price: 30680,
    description: 'The urban jungle is a natural environment for your Mazda CX-30. You can easily drive through narrow streets and comfortably park the entire car even in conditions of limited space.',
  },
  {
    id: 3,
    image: [mazdaCX51, mazdaCX52, mazdaCX53],
    title: 'MAZDA CX-5',
    fuel: 'PETROL',
    color: 'red',
    salon: 'leather black',
    engine: 'Skyactiv-G',
    alloyWheel: 'standart',
    price: 32400,
    description: 'A combination of pure beauty – body and interior lines, space for the whole family, unparalleled dynamics and the latest safety solutions. No matter where you are headed, the 2022 Mazda CX-5 will be your ideal companion for both everyday trips and long trips with the whole family. Designed to inspire both passengers and passers-by. A combination of pure beauty body and interior lines, space for the whole family, unparalleled dynamics and the latest safety solutions. No matter where you are headed, the 2022 Mazda CX-5 will be your ideal companion for both everyday trips and long trips with the whole family. Designed to inspire both passengers and passers-by.',
  },
  {
    id: 4,
    image: [mazdaCX91, mazdaCX92, mazdaCX93],
    title: 'MAZDA CX-9',
    fuel: 'PETROL',
    color: 'dark gray',
    salon: 'leather black',
    engine: 'Skyactiv-G TURBO',
    alloyWheel: 'standart',
    price: 47290,
    description: 'The Mazda CX-9 7-seater crossover is equally exciting to look at, sit in the cabin or travel in, and remains worthy of the highest praise thanks to its high-class design, premium interior equipment, inspired driving pleasure and innovative SKYACTIV technologies.',
  },
  {
    id: 5,
    image: [mazdaMX51, mazdaMX52, mazdaMX53],
    title: 'MAZDA MX-5',
    fuel: 'PETROL',
    color: 'red',
    salon: 'leather black',
    engine: 'Skyactiv-G',
    alloyWheel: 'standart',
    price: 44050,
    description: 'Collecting more than 280 awards around the world in its thirty-year history, the MX-5 has become a symbol of Mazda\'s automotive philosophy and the unconditional embodiment of the Jinba Ittai approach, a completely intuitive and natural connection between the car and the driver, which has characterized this legendary roadster since the first day of its appearance.',
  },
];

export const carColors = [
  {
    id: 1,
    color: 'red',
    image: red,
  },
  {
    id: 2,
    color: 'black',
    image: black,
  },
  {
    id: 3,
    color: 'white',
    image: white,
  },
  {
    id: 4,
    color: 'gray',
    image: gray,
  },
];

export const salonTypes = [
  {
    id: 1,
    type: 'leather black',
    image: leatherBlack,
  },
  {
    id: 2,
    type: 'leather red',
    image: leatherRed,
  },
  {
    id: 3,
    type: 'leather brown',
    image: leatherBrown,
  },
  {
    id: 4,
    type: 'textile black',
    image: textileBlack,
  },
];

export const wheelTypes = [
  {
    id: 1,
    type: 'premium black',
    image: premiumBlack,
  },
  {
    id: 2,
    type: 'premium gray',
    image: premiumGray,
  },
  {
    id: 3,
    type: 'deluxe',
    image: deluxe,
  },
  {
    id: 4,
    type: 'standart',
    image: standart,
  },
];
