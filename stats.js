const fs = require("fs");

const inputFile = "10000-most-common-passwords.csv";
const outputFile = "statistics.csv";
const delimiter = ",";

function charCounter() {
  const data = fs.readFileSync(inputFile, "utf-8");
  const lines = data.split("\n");
  let lengthsArray = new Array(20).fill(0);
  let statistics = "";

  for (line of lines) {
    elements = line.split(delimiter);
    lengthsArray[elements[1].length]++;
  }
  for (let i = 0; i < lengthsArray.length; i++) {
    const arrayLine = `Chars: ${i}, Count: ${lengthsArray[i]}`
    statistics += arrayLine + "\n";
  }
  console.log(lengthsArray);
  fs.writeFileSync(outputFile,statistics,"utf-8");
}

function deleteExistingOutputFile() {
  if (fs.existsSync(outputFile)) {
    fs.unlinkSync(outputFile);
  }
}

function processData() {
  const data = fs.readFileSync(inputFile, "utf-8");
  const lines = data.split(/\n/);

  for (line of lines) {
    elements = line.split(delimiter);
  }
}

// Main execution
deleteExistingOutputFile(); 
processData();
charCounter();