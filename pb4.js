//problem 4

//Shorting objects

const cars = [
  {
    make: 'Toyota',
    model: 'Camry',
    year: 2020,
  },
  {
    make: 'Honda',
    model: 'Accord',
    year: 2019,
  },
  {
    make: 'Ford',
    model: 'Mustang',
    year: 2021,
  },
  {
    make: 'Chevrolet',
    model: 'Malibu',
    year: 2018,
  },
  {
    make: 'Nissan',
    model: 'Altima',
    year: 2022,
  },
];

const sortedArray = (cars) => {
  cars.sort((c, d) => {
    return c.year - d.year;
  });
  console.log(cars);
};

sortedArray(cars);
