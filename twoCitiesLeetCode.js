// There are 2N people a company is planning to interview. 
// The cost of flying the i-th person to city A is costs[i][0], 
// and the cost of flying the i-th person to city B is costs[i][1].

// Return the minimum cost to fly every person to a city
// such that exactly N people arrive in each city.

// Input: [[10,20],[30,200],[400,50],[30,20]]
// Output: 110
// Explanation: 
// The first person goes to city A for a cost of 10.
// The second person goes to city A for a cost of 30.
// The third person goes to city B for a cost of 50.
// The fourth person goes to city B for a cost of 20.

// The total minimum cost is 10 + 30 + 50 + 20 = 110 to have half the people interviewing in each city.



var twoCitySchedCost = function(costs) {
  costs.sort((a,b) => (Math.abs(b[0] - b[1]) - Math.abs(a[0] - a[1])));
  let t = 0, A = 0, B = 0, l = costs.length / 2;
  for (let i of costs) {
      if (i[0] < i[1]) {
          if (A < l) t += i[0], A++;
          else t += i[1], B++;
      }
      else if (i[0] > i[1]) {
          if (B < l) t += i[1], B++;
          else t += i[0], A++;
      }
      else t += i[0];
  };    
  return t;
};