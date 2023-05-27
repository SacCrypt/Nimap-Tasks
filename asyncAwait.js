console.log("Before Calling the Function");
const asyncFunction = async () => {
  const response = await fetch("https://google.com");
  console.log(response);
};
asyncFunction();
console.log("Should be printed before response object");
