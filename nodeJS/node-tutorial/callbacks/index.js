const fs = reqire("fs");

function printPerson(name, callbackFn) {
  console.log(name);
  callbackFn();
}

function printAddress() {
  console.log("Address: 123 Main St, Cityville");
}

printPerson("John Doe", printAddress);

fs.readFile("input.txt", "utf8", (err, data) => {
  if (err) {
    console.error("Error reading file", err);
    return;
  }

  console.log(data);
});
