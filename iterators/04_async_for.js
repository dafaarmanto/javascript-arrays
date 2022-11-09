const getById = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(id);
      resolve(id);
    }, 1000);
  });
};

// Wait for each item before printing the next result
(async () => {
  const ids = [1, 2, 3, 4, 5];
  for (const id of ids) {
    await getById(id);
  }
})();
