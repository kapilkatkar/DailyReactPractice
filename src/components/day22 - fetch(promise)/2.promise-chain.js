const promise = () => {
  return new Promise((reply, reject) => {
    reply(1);
  });
};

promise()
  .then((data) => {
    return data + 10;
  })
  .then((data) => {
    console.log("LN10: ", data);
    return data + 20;
  })
  .then((data) => {
    console.log("LN15: ", data);
  });
