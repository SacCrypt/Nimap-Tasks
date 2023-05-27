// Named Function

function namedFunction() {
  console.log("Named Function");
}
namedFunction();
// Anonymous Function

const lambda = function anonymousFunction() {
  console.log("Anonymous Function");
};
console.log(lambda);
//IIFE

(function () {
  console.log("I am invoked immediately");
})();
