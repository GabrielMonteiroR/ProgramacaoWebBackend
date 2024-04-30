const { fakerDE: faker } = require('@faker-js/faker');



function createRandomUser() {
  return {
    username: faker.internet.userName(),
    email: faker.internet.email(),
    birthdate: faker.date.birthdate()
  };
}

const USERS = faker.helpers.multiple(createRandomUser, {
  count: 1,
});


const mostrarPessoas = () => {
  USERS.forEach(element => {
    console.log("NOME: " + element.username + "\nEMAIL: " + element.email + "\nDATA DE NASCIMENTO: " +
      element.birthdate.getDay() + "/" + element.birthdate.getMonth() + "/" +
      element.birthdate.getFullYear());
  });
}

mostrarPessoas()