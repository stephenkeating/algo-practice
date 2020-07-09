// https://leetcode.com/discuss/interview-question/394347/

// find middle of arr
// initialize refills, con1, and con2 to zero
// iterate from left to middle
  //  if plant is plus container is less than max, add value of plant to container
  //  else increment refills, set container to plant
// check for middle plant
  // same logic but check both containers
// return refills

let wateringFlowers = function(plants, container1, container2) {
  let mid = Math.floor(plants.length / 2);
  let refills = 2;
  let con1 = 0;
  let con2 = 0;

  // left to middle
  for (let i = 0; i < mid; i++) {
    if (con1 + plants[i] <= container1) {
      con1 += plants[i];
    } else {
      console.log('left refill')
      refills++;
      con1 = plants[i];
    }
    console.log('con1', con1)
  }

  // right to middle
  for (let i = plants.length - 1; i > mid; i--) {
    if (con2 + plants[i] <= container2) {
      con2 += plants[i];
    } else {
      console.log('right refill')
      refills++;
      con2 = plants[i];
    }
    console.log('con2', con2)
  }

  // if plants was odd, check both containers. else just check con2
  if (plants.length % 2 !== 0) {
    console.log('final if')
    if ((container1 - con1) + (container2 - con2) < plants[mid]) {
      refills++
    }
  } else {
    console.log('final else')
    if (con2 + plants[mid] <= container2) {console.log('no final refill 2')}
    refills++;
  }

  return refills;
};

let plants = [2, 4, 5, 1, 2]
let container1 = 5
let container2 = 7

wateringFlowers(plants, container1, container2)