const runPromise = () => {
  const p = new Promise((reply, reject) => {
    reject({ message: "Error" });
  });
  return p;
};

runPromise()
  .then((data) => {
    console.log("3 success : ", data);
  })
  .catch((err) => {
    console.log("3 error : ", err);
  });

console.log("1. promises started");

const runPromise2 = () => {
  const p = new Promise((reply, reject) => {
    reply({ message: "success" });
  });
  return p;
};

runPromise2()
  .then((data) => {
    console.log("4 success : ", data);
  })
  .then((err) => {
    console.log("4 err : ", err);
  });

console.log("2. Promise Completed");
