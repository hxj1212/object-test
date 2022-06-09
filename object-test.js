let user = {}
user.name = 'John'
user.surname = 'Mike'
console.log(user) // output  { name: 'John', surname: 'Mike' }
user.name = 'Peter'
console.log(user) // output  { name: 'Peter', surname: 'Mike' }
delete user.name
console.log(user) // output  { surname: 'Mike' }

var fruit = {
  apple: 20,
  pear: 20,
  peach: 10,
}
let total = 0
for (let key in fruit) {
  total += fruit[key]
}
console.log(total) // output 50
