// console.log("CONNECTED");

// const firstObj = {};

// const user = {
//   username: 'biz.markie', 
//   password: 'abc123',
//   lovesJavascript: true, 
//   favoriteNumber: 42,
// }

// DOT NOTATION
//Get values out of an object
// console.log(user.lovesJavascript);
// console.log(user.username);

// BRACKET NOTATION 
// const password = 'password';
// console.log(user[password]); 
// console.log(user['username']); //Define the object, and inside the bracket and a string, number, or variable within the brackets.
// console.log(user['favoriteNumber']);
// console.log(user.favoriteNumber);

// ASSIGNING VALUES to an OBJECT

const newUser = {
  isNew: true,
}

// newUser.username = 'fresh.prince'; //dot notaion
// newUser['password'] = 'abcd1234'; //bracket notation
// console.log(newUser);

const newObject = {
  username: 'Mitchell',
  sayHello: function () {
    console.log(`${this.username} says Hello!`);
  }
}

// newObject.username = 'Crumbley'
// newObject.sayHello();

// ITERATE OVER AN OBJECT

const userTwo = {
  username: 'Trinity',
  password: 'xyz0987',
  lovesJavascript: true,
  favoriteNumber: 12,
}

//FOR IN LOOP
for (let key in userTwo){
  console.log(key) //Gives us the keys
  console.log(userTwo[key]); //Gives us the values of the keys. DOT notation does not work.
}
