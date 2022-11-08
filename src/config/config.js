// Images of cars
import mazda3 from 'assets/images/mazda3.jpg';
import mazdaCX30 from 'assets/images/mazdaCX30.jpg';
import mazdaCX5 from 'assets/images/mazdaCX5.jpg';

import mazda6Red from 'assets/images/1_mazda6Red.jpg';
import mazda6Black from 'assets/images/1_mazda6Black.jpg';
import mazda6Gray from 'assets/images/1_mazda6Gray.jpg';
import mazda6White from 'assets/images/1_mazda6White.jpg';

import mazdaCX30Red from 'assets/images/1_mazdaCX30Red.jpg';
import mazdaCX30Black from 'assets/images/1_mazdaCX30Black.jpg';
import mazdaCX30Gray from 'assets/images/1_mazdaCX30Gray.jpg';
import mazdaCX30White from 'assets/images/1_mazdaCX30White.jpg';

import mazdaCX5Red from 'assets/images/1_mazdaCX5Red.jpg';
import mazdaCX5Black from 'assets/images/1_mazdaCX5Black.jpg';
import mazdaCX5Gray from 'assets/images/1_mazdaCX5Gray.jpg';
import mazdaCX5White from 'assets/images/1_mazdaCX5White.jpg';

import mazdaCX9Red from 'assets/images/1_mazdaCX9Red.jpg';
import mazdaCX9Black from 'assets/images/1_mazdaCX9Black.jpg';
import mazdaCX9Gray from 'assets/images/1_mazdaCX9Gray.jpg';
import mazdaCX9White from 'assets/images/1_mazdaCX9White.jpg';

import mazdaMX5Red from 'assets/images/1_mazdaMX5Red.jpg';
import mazdaMX5Black from 'assets/images/1_mazdaMX5Black.jpg';
import mazdaMX5Gray from 'assets/images/1_mazdaMX5Gray.jpg';
import mazdaMX5White from 'assets/images/1_mazdaMX5White.jpg';

// Images for configuration settings page
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
    image: mazda3,
    title: 'The Mazda 3 2022 ',
    description: 'Every aspect of the Mazda3 is engineered to work in harmony with you.',
  },
  {
    id: 2,
    image: mazdaCX30,
    title: 'The Mazda CX-30 2022',
    description: 'No matter where your path leads, the Mazda CX-30 with available 2.5 Turbo engine is made to help you follow it.',
  },
  {
    id: 3,
    image: mazdaCX5,
    title: 'The Mazda CX-5 2021',
    description: 'The CX-5 rises above all other compact crossovers thanks to its many transcendent traits.',
  },
];

export const carsModel = [
  {
    id: 1,
    image: mazda6Red,
    title: 'MAZDA 6',
    fuel: 'PETROL',
    color: 'red',
    salon: 'leather black',
    engine: 'Skyactiv-G',
    wheel: 'deluxe',
    price: 33625,
    description: 'The Mazda6 offers quality and refinement taken to an even higher level. Stand out on the road with the ultimate thoughtful, elegant and sophisticated exterior design. New technologies ensure the perfect operation of SKYACTIV power units, and driving dynamics have been improved thanks to increased body rigidity, control and braking systems, higher aerodynamic efficiency and reduced noise and vibration.',
  },
  {
    id: 2,
    image: mazdaCX30Red,
    title: 'MAZDA CX-30',
    fuel: 'PETROL',
    color: 'red',
    salon: 'leather black',
    engine: 'Skyactiv-G TURBO',
    wheel: 'deluxe',
    price: 30680,
    description: 'The urban jungle is a natural environment for your Mazda CX-30. You can easily drive through narrow streets and comfortably park the entire car even in conditions of limited space.',
  },
  {
    id: 3,
    image: mazdaCX5Red,
    title: 'MAZDA CX-5',
    fuel: 'PETROL',
    color: 'red',
    salon: 'leather black',
    engine: 'Skyactiv-G',
    wheel: 'standart',
    price: 32400,
    description: 'A combination of pure beauty – body and interior lines, space for the whole family, unparalleled dynamics and the latest safety solutions. No matter where you are headed, the 2022 Mazda CX-5 will be your ideal companion for both everyday trips and long trips with the whole family. Designed to inspire both passengers and passers-by. A combination of pure beauty body and interior lines, space for the whole family, unparalleled dynamics and the latest safety solutions. No matter where you are headed, the 2022 Mazda CX-5 will be your ideal companion for both everyday trips and long trips with the whole family. Designed to inspire both passengers and passers-by.',
  },
  {
    id: 4,
    image: mazdaCX9Red,
    title: 'MAZDA CX-9',
    fuel: 'PETROL',
    color: 'red',
    salon: 'leather black',
    engine: 'Skyactiv-G TURBO',
    wheel: 'standart',
    price: 47290,
    description: 'The Mazda CX-9 7-seater crossover is equally exciting to look at, sit in the cabin or travel in, and remains worthy of the highest praise thanks to its high-class design, premium interior equipment, inspired driving pleasure and innovative SKYACTIV technologies.',
  },
  {
    id: 5,
    image: mazdaMX5Red,
    title: 'MAZDA MX-5',
    fuel: 'PETROL',
    color: 'red',
    salon: 'leather black',
    engine: 'Skyactiv-G',
    wheel: 'standart',
    price: 44050,
    description: 'Collecting more than 280 awards around the world in its thirty-year history, the MX-5 has become a symbol of Mazda\'s automotive philosophy and the unconditional embodiment of the Jinba Ittai approach, a completely intuitive and natural connection between the car and the driver, which has characterized this legendary roadster since the first day of its appearance.',
  },
];

export const carColors = [
  {
    id: 1,
    colorName: 'red',
    image: red,
    price: 1100,
  },
  {
    id: 2,
    colorName: 'black',
    image: black,
    price: 2200,
  },
  {
    id: 3,
    colorName: 'white',
    image: white,
    price: 2800,
  },
  {
    id: 4,
    colorName: 'gray',
    image: gray,
    price: 3000,
  },
];

export const salonTypes = [
  {
    id: 1,
    type: 'leather black',
    image: leatherBlack,
    price: 2400,
  },
  {
    id: 2,
    type: 'leather red',
    image: leatherRed,
    price: 2000,
  },
  {
    id: 3,
    type: 'leather brown',
    image: leatherBrown,
    price: 1700,
  },
  {
    id: 4,
    type: 'textile black',
    image: textileBlack,
    price: 1000,
  },
];

export const wheelTypes = [
  {
    id: 1,
    wheel: 'premium black',
    image: premiumBlack,
    price: 2000,
  },
  {
    id: 2,
    wheel: 'premium gray',
    image: premiumGray,
    price: 1600,
  },
  {
    id: 3,
    wheel: 'deluxe',
    image: deluxe,
    price: 1850,
  },
  {
    id: 4,
    wheel: 'standart',
    image: standart,
    price: 1000,
  },
];

export const modelColors = [
  {
    id: 1,
    model: 'MAZDA 6',
    colors: {
      red: mazda6Red,
      black: mazda6Black,
      gray: mazda6Gray,
      white: mazda6White,
    },
  },
  {
    id: 2,
    model: 'MAZDA CX-30',
    colors: {
      red: mazdaCX30Red,
      black: mazdaCX30Black,
      gray: mazdaCX30Gray,
      white: mazdaCX30White,
    },
  },
  {
    id: 3,
    model: 'MAZDA CX-5',
    colors: {
      red: mazdaCX5Red,
      black: mazdaCX5Black,
      gray: mazdaCX5Gray,
      white: mazdaCX5White,
    },
  },
  {
    id: 4,
    model: 'MAZDA CX-9',
    colors: {
      red: mazdaCX9Red,
      black: mazdaCX9Black,
      gray: mazdaCX9Gray,
      white: mazdaCX9White,
    },
  },
  {
    id: 5,
    model: 'MAZDA MX-5',
    colors: {
      red: mazdaMX5Red,
      black: mazdaMX5Black,
      gray: mazdaMX5Gray,
      white: mazdaMX5White,
    },
  },
];
