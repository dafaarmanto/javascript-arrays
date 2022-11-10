const ids = [1, 2, 3];

const getById = (id) => {
  return new Promise((res) => {
    setTimeout(() => {
      console.log(`Got id: ${id}`);
      res(id);
    }, 1000);
  });
};

ids.reduce(async (promise, id) => {
  await promise;

  return getById(id);
}, Promise.resolve());
