const promise = () => {
  return new Promise((reply, reject) => {
    reply(1);
  });
};

promise()
  .then((data) => {
    console.log("LN9: Data: ", data);
    throw data + 10;
  })
  .catch((err) => console.log("Err LN12: ", err))
  .then((data) => {
    console.log("LN13: Data: ", data);
    return data + 100;
  })
  .then((data) => {
    console.log("LN15: ", data);
  })
  .catch((err) => {
    console.log("LN18 Err: ", err);
  });
