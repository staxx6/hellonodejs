fs.readFile(fname, (err, data) => {
  if(err) {
    console.log("error reading: " + fname + err.code);
  } else {
    console.log(data.toString());
  }
});

// read a part from file

fs.open(fname, "r", (err, fd) => {
  if(err) {
    console.log("error reading: " + fname + err.code);
  } else {
    let buf = new Buffer(15);
    let offset = 0, length = 15, postion = 100;
    fs.read(fd, buf, offset, length, position, (err, numByts, buf) => {
      
    }
  }
});
