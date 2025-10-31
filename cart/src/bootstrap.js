import faker from 'faker'

const message =`<div>You have ${faker.random.number()} item` 
console.log("This is now cart")
document.querySelector('#dev-cart').innerHTML