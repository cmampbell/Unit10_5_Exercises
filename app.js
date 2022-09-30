// function createInstructor(firstName, lastName){
//     return {
//       firstName: firstName,
//       lastName: lastName
//     }
//   }

  //Write ES2015 Version

function createInstructor(firstName, lastName){
    return {
        firstName,
        lastName
    }
}

// var favoriteNumber = 42;

// var instructor = {
//   firstName: "Colt"
// }

// instructor[favoriteNumber] = "That is my favorite!"

//write ES2015 Version

const instructor = {
    firstName: "Colt",
    [favoriteNumber]: "That is my favorite!"
};

// var instructor = {
//     firstName: "Colt",
//     sayHi: function(){
//       return "Hi!";
//     },
//     sayBye: function(){
//       return this.firstName + " says bye!";
//     }
//   }

const instructorMethods = {
    firstName: "Colt",
    sayHi(){
      return "Hi!";
    },
    sayBye(){
      return this.firstName + " says bye!";
    }
}

const createAnimal = (species, verb, noise) => ({
    species,
    [verb](){
        return noise;
    }
})