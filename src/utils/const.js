import moment from 'moment';

export const CARDS_IN_PACK = 1;

export const collectibles = [
  {
    id: 0,
    name: `Dummy`,
    src: "../img/Giraf.jpeg",
    isCollected: false,
    rarity: `blue`,
    monthNumber: 9,
    year: 2020,
  },
  {
    id: 1,
    name: `Пингвин`,
    src: `../img/Emperor_penguin.png`,
    isCollected: false,
    rarity: `blue`,
    monthNumber: 9,
    year: 2020,
  },
  {

    id: 2,
    name: `Бурый Медведь`,
    src: `../img/buryj-medved.jpg`,
    isCollected: false,
    rarity: `purple`,
    monthNumber: 9,
    year: 2020,
  },
  {

    id: 3,
    name: `Иволга`,
    src: `../img/ivolga.jpg`,
    isCollected: false,
    rarity: `blue`,
    monthNumber: 9,
    year: 2020,
  },
  {

    id: 4,
    name: `Лиса`,
    src: `../img/lisa.jpg`,
    isCollected: false,
    rarity: `blue`,
    monthNumber: 9,
    year: 2020,
  },
  {

    id: 5,
    name: `Слон`,
    src: `../img/slon.jpg`,
    isCollected: false,
    rarity: `purple`,
    isGoldBorder: true,
    monthNumber: 9,
    year: 2020,
  },
  {

    id: 6,
    name: `Воробей`,
    src: `../img/vorobey.jpg`,
    isCollected: true,
    rarity: `blue`,
    text: `Милая небольшая птичка. Перемещаются стайками по несколько особей. Благодаря небольшим размерам обладают необыкновенной верткостью и юркостью`,
    monthNumber: 9,
    year: 2020,
  },
  {

    id: 7,
    name: `Изумрудный лес`,
    src: `../img/green-les.jpg`,
    isCollected: false,
    rarity: `orange`,
    monthNumber: 9,
    year: 2020,
  },
  {

    id: 8,
    name: `Лаванда`,
    src: `../img/lavanda.jpg`,
    isCollected: false,
    rarity: `orange`,
    monthNumber: 9,
    year: 2020
  },
  {

    id: 9,
    name: `Полярное сияние`,
    src: `../img/arctic_light.jpg`,
    isCollected: false,
    rarity: `orange`,
    monthNumber: 9,
    year: 2020
  },
  {
    id: 10,
    name: `Альбатрос`,
    src: "../img/Albatros.jpg",
    isCollected: false,
    rarity: `purple`,
    monthNumber: 9,
    year: 2020
  },
  {
    id: 11,
    name: `Жираф`,
    src: "../img/Giraf.jpeg",
    isCollected: false,
    rarity: `blue`,
    monthNumber: 9,
    year: 2020,
  },

  // November

  {
    id: 12,
    name: `Альбатрос`,
    src: "../img/sokol.jpg",
    isCollected: false,
    rarity: `purple`,
    monthNumber: 10,
    year: 2020
  },
];

export const seasons = [
  {
    monthName: `Октябрь`,
    id: `october2020`,
    monthNumber: 9,
    year: 2020,
    isActive: false,
    icon: "../img/autumn.svg",
    iconName: "Убаюкивающий листопад",
    iconText: `Насладитесь осенним спокойствием и умиротворённостью`,
  },
  {
    monthName: `Ноябрь`,
    id: `november2020`,
    monthNumber: 10,
    year: 2020,
    isActive: false,
    icon: `../img/november.svg`,
    iconText: ``,
  },
  {
    monthName: `Декабрь`,
    id: `december2020`,
    monthNumber: 11,
    year: 2020,
    isActive: false,
    icon: "../img/december.svg",
    iconText: ``,
  }
];

export const tasks = [
  {
    name: 'Медитация',
    reward: `cardPack`,
    image: "../img/card-back-playing-koi.png",
    amount: 1,
    id: 0,
  },
  {
    name: 'Тренировка реальности',
    reward: `cardPack`,
    image: "../img/card-back-playing-koi.png",
    amount: 1,
    id: 1,
  },
  {
    name: 'Воздух осени',
    reward: `cardPack`,
    image: "../img/card-back-playing-koi.png",
    amount: 1,
    id: 1,
  },
];

export const packs = [
  {
    name: ``,
    monthNumber: 9,
    year: 2020,
    image: "../img/card-back-playing-koi.png",
    amount: 100,
  },
  {
    name: `gold`,
    monthNumber: null,
    year: null,
    image: "../img/card-back-golden.png",
    amount: 2,
  }
]