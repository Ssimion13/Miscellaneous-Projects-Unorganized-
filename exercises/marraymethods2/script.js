/* function sortedDogOwners(arr) {
  hasDog = arr.filter(x => x.pets.indexOf('dog') !== -1);

    return hasDog.sort(function(a,b){
      return a.age - b.age;
    });
  }

var DogOwners = [
    {
        firstName: "Sarah",
        lastName: "Palin",
        age: 47,
        pets: ["dog", "cat"]
    },
    {
        firstName: "Frank",
        lastName: "Zappa",
        age: 12,
        pets: ["dog"]
    },
    {
        firstName: "Rick",
        lastName: "Sanchez",
        age: 78,
        pets: ["cat", "parrot"]
    },
    {
        firstName: "Morty",
        lastName: "Smith",
        age: 13,
        pets: ["cat", "parrot", "dog"]
    },
    {
        firstName: "Kyle",
        lastName: "Mooney",
        age: 27,
        pets: ["dog"]
    }
];

console.log(sortedDogOwners(DogOwners));

*/



function arbitraryPractice(arr) {

    return arr.filter(person => person.age >20)
              .filter(person => person.pets.some(person => person.type === "dog"))
              .filter(person => person.pets.every(pet => pet.nickNames !== []))
              .map(person => person.pets)
              .reduce((arr,pet) => [...arr, ...pet])
              .reduce((arr,pet) => [...arr,  `<li> ${pet.name} </li}`], [] );
}


var peopleArray = [
    {
        firstName: "Sarah",
        lastName: "Palin",
        age: 47,
        pets: [
            {
                name: "Alfred",
                type: "dog",
                nickNames: ["Lil Alfred", "Alfy", "Alfinator"]
            },
            {
                name: "Charles",
                type: "cat",
                nickNames: ["Charley"]
            },
            {
                name: "Bark Obama",
                type: "dog",
                nickNames: ["Barack", "Mr. President"]
            },
            {
                name: "Christopher George Latore Wallace",
                type: "dog",
                nickNames: ["Notorious D.I.G.", "Diggie Smalls"]
            }

        ]
    },
    {
        firstName: "Frank",
        lastName: "Zappa",
        age: 12,
        pets: [
            {
                name: "Howard",
                type: "dog",
                nickNames: []
            },
            {
                name: "Bear",
                type: "dog",
                nickNames: []
            }
        ]
    },
    {
        firstName: "Rick",
        lastName: "Sanchez",
        age: 78,
        pets: [
            {
                name: "Bird Person",
                type: "bird",
                nickNames: ["Phoenixperson"]
            },
            {
                name: "Krombopulos Michael",
                type: "Gromflomite",
                nickNames: ["Assassin man"]
            },
            {
                name: "Squanchy",
                type: "Cat-person",
                nickNames: ["Squanch", "Smarf", "Thunder Cat"]
            }

        ]
    },
    {
        firstName: "Morty",
        lastName: "Smith",
        age: 23,
        pets: [
            {
                name: "Morty Jr.",
                type: "Gazorpazorp",
                nickNames: ["Gwendolyn Jr."]
            },
            {
                name: "Snuffels",
                type: "dog",
                nickNames: ["Snowball"]
            }

        ]
    }
];

console.log(arbitraryPractice(peopleArray));

//should return

['<li>Alfred</li>',
 '<li>Charles</li>',
 '<li>Bark Obama</li>',
 '<li>Christopher George Latore Wallace</li>',
 '<li>Morty Jr.</li>',
 '<li>Snuffels</li>']
