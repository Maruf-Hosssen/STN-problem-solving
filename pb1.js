//problem 1 :
//array filtering and mapping

let person = [
  {
    name: 'Kalam',
    age: 80,
    gender: 'Male',
  },
  {
    name: 'Kona',
    age: 20,
    gender: 'Female',
  },
  {
    name: 'Salam',
    age: 70,
    gender: 'Male',
  },
  {
    name: 'Salma',
    age: 25,
    gender: 'Female',
  },
  {
    name: 'Pollob',
    age: 30,
    gender: 'Male',
  },
];

const result = (person) => {
  const filterPerson = person.filter((female) => female.gender !== 'Female');
  const arrayOfRemainingPeopleNames = filterPerson.map((n) => {
    return n.name;
  });
  console.log(arrayOfRemainingPeopleNames);
};
result(person);
