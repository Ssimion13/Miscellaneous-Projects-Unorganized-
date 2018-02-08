/*
function total(arr){
  return arr.reduce(function(a,b){
    return a + b;
  }
)
}

console.log(total([1,2,3]));


function total(arr){
  return arr.reduce(function(a,b){
    return String(a) + String(b);
  }
)
}

console.log(total([1,2,3]));

var voters = [
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Phil' , age: 21, voted: true},
    {name:'Ed' , age:55, voted:true},
    {name:'Tami' , age: 54, voted:true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false}
  ];

  function totalVoters(arr){
    return arr.reduce(function(acc,val){
      if(val.voted){
        acc ++;
      }
     return acc;
    }, 0);
  }

    console.log(totalVoters(voters));



    function shoppingSpree(arr) {
      return arr.reduce(function(acc,val){
        return  acc + val.price;
      }, 0);
    }

    var wishlist = [
        { title: "Tesla Model S", price: 90000 },
        { title: "4 carat diamond ring", price: 45000 },
        { title: "Fancy hacky Sack", price: 5 },
        { title: "Gold fidgit spinner", price: 2000 },
        { title: "A second Tesla Model S", price: 90000 }
    ];

    console.log(shoppingSpree(wishlist)) // 227005




function flatten(arr){
  return arr.reduce(function(acc,val){
    return acc.concat(val);
  }, [])
}
var arrays = [
    ["1", "2", "3"],
    [true],
    [4, 5, 6]
];

console.log(flatten(arrays)) // ["1", "2", "3", true, 4, 5, 6];

*/


var voters = [
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Phil' , age: 21, voted: true},
    {name:'Ed' , age:55, voted:true},
    {name:'Tami' , age: 54, voted:true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false}
];

/*Include how many of the potential voters were in the ages 18-25, how many from 26-35, how many from 36-55,
 and how many of each of those age ranges actually voted. The resulting object containing this data should have 6 properties. */


function voterResults(arr) {
  return arr.reduce(function(acc,val){
    if(val.age >= 18 && val.age <=25){
      acc.youth++;
      if(val.voted){
        acc.youngvotes++;
      }
    }
    if(val.age >= 26 && val.age <=35){
    acc.mids++;
    if(val.voted){
      acc.midVotes++;
    }
  }
    if(val.age >= 36 && val.age <=55){
      acc.olds++;
      if(val.voted){
        acc.oldVotes++;
      }
    }
  return acc;
  }, {youngvotes: 0, youth: 0, midVotes: 0, mids: 0, oldVotes: 0, olds:0});
}






console.log(voterResults(voters)) // Returned value shown below:
/*
{ youngVotes: 1,
  youth: 4,
  midVotes: 3,
  mids: 4,
  oldVotes: 3,
  olds: 4
}
*/
