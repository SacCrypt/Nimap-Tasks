let iteration = 1;
const generatePromise = (iteration) => {
  return new Promise((resolve, reject) => {
    if (iteration > 3) {
      reject(`Error! Iteration more than 3`);
    }
    resolve(`Promise resolved with iteration ${iteration}`);
  });
};

generatePromise(1)
  .then((data) => {
    console.log(data);
    iteration++;
    return generatePromise(iteration);
  })
  .then((data) => {
    console.log(data);
    iteration++;
    return generatePromise(iteration);
  })
  .then((data) => {
    console.log(data);
    iteration++;
    return generatePromise(iteration);
  })
  .then((data) => {
    console.log(data);
    iteration++;
    return generatePromise(iteration);
  })
  .catch((err) => {
    console.log(err);
  });
