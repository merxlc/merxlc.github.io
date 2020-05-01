let input;
let h1;
function setup() {

  createCanvas(400, 400);

  input = createInput('en`   `ti');
  input.size(200, 20);


}

function draw() {
  background(220);
  let mo = month()
  let da = day()
  let yr = year()

  let today = new Date();
  let weekday = today.getDay();
  if (weekday == 1) {weekday = 'Monday';}
  if (weekday == 2) {weekday = 'Tuesday';}
  if (weekday == 3) {weekday = 'Wednesday';}
  if (weekday == 4) {weekday = 'Thursday';}
  if (weekday == 5) {weekday = 'Friday';}
  if (weekday == 6) {weekday = 'Saturday';}
  if (weekday == 7) {weekday = 'Sunday';}

  let hr = hour();
  let mn = minute();
  let sc = second();
  let mi = millis();
  textSize(20);
  let format = input.value()

  let segments = format.split('`')
  let finalstring = '';

  for (let i = 0; i < segments.length; i++) {
    let code = segments[i];

    if (code == 'hh') {
      let curr = str(hr)
      if (curr.length == 1) {
        finalstring += '0'+curr
      } else {
        finalstring += curr;
      }
    } else if (code == 'mm') {
      let curr = str(mn)
      if (curr.length == 1) {
        finalstring += '0'+curr
      } else {
        finalstring += curr;
      }
    } else if (code == 'ss') {
      let curr = str(sc)
      if (curr.length == 1) {
        finalstring += '0'+curr
      } else {
        finalstring += curr;
      }
    } else if (code == 'Da') {
      let curr = str(weekday)
      if (curr.length == 1) {
        finalstring += '0'+curr
      } else {
        finalstring += curr;
      }
    } else if (code == 'da') {
      let curr = str(da)
      if (curr.length == 1) {
        finalstring += '0'+curr
      } else {
        finalstring += curr;
      }
    } else if (code == 'mo') {
      let curr = str(mo)
      if (curr.length == 1) {
        finalstring += '0'+curr
      } else {
        finalstring += curr;
      }
    } else if (code == 'yr') {
      let curr = str(yr)
      if (curr.length == 1) {
        finalstring += '0'+curr
      } else {
        finalstring += curr;
      }
    } else if (code == 'en') {
      finalstring += da + '/' + mo + '/' + yr
    } else if (code == 'us') {
      finalstring += mo + '/' + da + '/' + yr
    } else if (code == 'ti') {
      finalstring += hr + ':' + mn + ':' + sc
    } else {
      finalstring += segments[i];
    }
  }


  text(finalstring, 100, 100)

}
