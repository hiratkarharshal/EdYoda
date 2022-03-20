var person = "micheal"

var people = [["mike", "paul"],
["tom", "robin"],
["jae", "paul"],
["paul", "micheal"],
["robin", "ross"]]

for (var i = 0; i < people.length; i++) {

      if (people[i][0] == person) {
            findg(people[i][1]);
      }
}

function findg(father) {
      for (var j = 0; j < people.length; j++) {

            if (people[j][0] == father) {
                  console.log(people[j][1]);
            }

      }
}     