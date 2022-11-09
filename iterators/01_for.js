// Good use case for loop
let arrayOfNum = [];
for (let value = 10; value <= 50; value += 10) {
  arrayOfNum.push(value);
  console.log(arrayOfNum);
}

// Bad use case for loop
/*
 * You may improperly initialized the variable
 * Using index <= array.length give last item of the array undefined
 * You may increment the variable improperly
 * This doesn't mean you can't use for loop by this method!
 * Alternative: use for-in or for-of
 */

for (let index = 0; index <= arrayOfNum.length; index++) {
  console.log(arrayOfNum[index]);
}
