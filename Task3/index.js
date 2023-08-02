// Task 3: Asynchronous File Handling
// Create a Node.js script that reads a text file named "data.txt"
// and counts the number of words in it.
// The script should print the total word count to the console.

const fs = require("fs");
const requireFile = async () => {
  //read the text file....
  const data = fs.readFileSync("./data.text", "utf-8");
  //count all the word except spaces...
  let removeSpace = data.split(" ");
  let wordCount = 0;
  const len = removeSpace.length;
  for (let i = 0; i < len; i++) {
    if (removeSpace[i] != "") {
      wordCount++;
    }
  }
  return wordCount;
};
requireFile()
  .then((res) => console.log(res))
  .catch((err) => {
    console.log("some error occured");
  });
