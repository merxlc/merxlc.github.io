function setup() {

  createCanvas(400, 400);

}

function draw() {
  background(220);
  let format = document.getElementById("place").value;
  format = format.split('\n');

  let sections = [];


  //splits input into sections of options
  let counter = 0;
  let curr;
  for (curr of format) {
    if (curr == '[') {
      let start = counter - 1;
      let checker = ']';
      let i = start;
      while(format[i] != checker) {
        if (format[i] != checker) {
          i++
        }
      }
      let end = i;
      sections.push([start, end, format[counter-1]]);

    }
    counter ++;
  }

}
