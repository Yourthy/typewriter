const sentence = "hello there from lighthouse labs";
let ms = 1000;

for (const char of sentence) {
  setTimeout(() => {
    process.stdout.write(char);
  }, ms);
  ms += 50;
}

setTimeout(() => {
  process.stdout.write("\n");
}, ms);
