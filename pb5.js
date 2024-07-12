//problem 5 :
//Find and modify

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

const modifyPerson = (person, name, age) => {
  person.filter((singlePerson) => {
    if (singlePerson.name === name) {
      singlePerson.age = age;
      return person;
    }
  });
  console.log(person);
};

modifyPerson(person, 'Kalam', 80);
