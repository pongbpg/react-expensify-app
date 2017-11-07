// const person = {
//     name: 'Pong',
//     age: 26,
//     location: {
//         city: 'Thailand',
//         temp: 32
//     }
// };
// const { name: firstName = 'Anonymous', age } = person;
// console.log(`${firstName} is ${age}.`)

// const { city, temp: temparature } = person.location;;
// console.log(`It's a ${temparature} is ${city}`);

const address = ['Bangkok', 'JJ', 'Silom'];
const [street, city, state, zip] = address;
console.log(`You are in ${address[1]}`)
console.log(street, city, state, zip);