import {
  proj1_2,
  proj2_1,
  proj3,
  delivery,
  design,
  development,
  kamel,
  expanses,
} from './images';

const obj = {
  name: 'Kamel Amen',
  picture: kamel,
  position: `Front-end / UI Developer`,
  information:
    'I enjoy converting complex and hard ideas into simple, modern and responsive websites. with lots of modern and flexible methods, technologies and a good working plan.',
};

const data = [
  {
    id: 1,
    name: 'Development',
    info: 'CLEAN AND MODERN WEBSITES, WITH GOOD PERFORMANCE, FAST AS POSSIBLE AND MANY OTHER ADVANTAGES',
    src: development,
  },
  {
    id: 2,
    name: 'Design',
    info: 'GOOD AND MODERN DESIGNS WITH ANIMATION AND LOTS OF EFFECTS WHICH DEPEND ON THE REQUESTS FROM USERS',
    src: design,
  },
  {
    id: 3,
    name: 'Expanses',
    info: 'CHEAP PRICES COMPARING TO THE WORK AND TIME SPEND ON CREATING THE WEBSITE',
    src: expanses,
  },
  {
    id: 4,
    name: 'Delivery',
    info: 'THE DELIVERY OF THE WORK WILL ALWAYS BE ON TIME OR BEFORE, NO LATE DELIVERIES',
    src: delivery,
  },
];

const skillsData = [
  {
    id: 1,
    name: 'HTML',
    percentage: '90',
    color: '#04fc43',
    num: 90,
  },
  {
    id: 2,
    name: 'CSS',
    percentage: '85',
    color: '#06ccff',
    num: 85,
  },
  {
    id: 3,
    name: 'JS',
    percentage: '75',
    color: '#fee800',
    num: 80,
  },
  {
    id: 4,
    name: 'SASS',
    percentage: '90',
    color: '#ff00be',
    num: 90,
  },
  {
    id: 5,
    name: 'BOOTSTRAP',
    percentage: '85',
    color: '#d72f01',
    num: 85,
  },
  {
    id: 6,
    name: 'REACT',
    percentage: '75',
    color: '#f2eaed',
    num: 75,
  },
  {
    id: 7,
    name: 'REACT HOOKS',
    percentage: '70',
    color: '#720017',
    num: 70,
  },
  {
    id: 8,
    name: 'GIT',
    percentage: '80',
    color: '#d9ac2a',
    num: 80,
  },
  {
    id: 9,
    name: 'JQUERY',
    percentage: '65',
    color: '#0abda0',
    num: 65,
  },
  {
    id: 10,
    name: 'GOOGLING',
    percentage: '90',
    color: '#bed905',
    num: 90,
  },
];

const portfolio = [
  {
    id: 1,
    name: "Bakery's House",
    imgSrc: proj1_2,
    projInfo:
      'Are you smelling what i am smelling. YES baked stuff, here is the place for that. You can choose from many baked and delicious products then buy it from your shopping cart, enjoy.',
    projLink: 'https://bakeryshop32.netlify.app/',
    btnText: 'Take a Look',
  },
  {
    id: 2,
    name: 'Just Play',
    imgSrc: proj2_1,
    projInfo:
      'Are you bored, this is the solution!! Just Play is the place to throw the boring away with more than 5 games and lots of animation and difficulty levels, enjoy.',
    projLink: 'https://kamel-amen.github.io/Just-Play/',
    btnText: 'Take a Look',
  },
  {
    id: 3,
    name: 'Budget',
    imgSrc: proj3,
    projInfo:
      'Wanna calculate your budget and expanses here is the solution, Budget calculator which calculates the expanses and your budget then give you the remain money, enjoy.',
    projLink: 'https://kamel-amen.github.io/budget/',
    btnText: 'Take a Look',
  },
];

export { data, obj, skillsData, portfolio };
