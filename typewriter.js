const sentence = "hello there from lighthouse labs";
let secondIncrementer = 1000
for (let i = 0; i < sentence.length; i++) {
  if (i === sentence.length - 1) {
  setTimeout(() => console.log(sentence[i]), secondIncrementer);
  } else {
  setTimeout(() => process.stdout.write(sentence[i]), secondIncrementer);
  secondIncrementer += 50;
  }
};