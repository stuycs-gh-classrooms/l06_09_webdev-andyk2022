function setup() {
  createCanvas(400, 400);
  background(0);
  var arr = randomArray(10);

  var pos = 0;
  var testPos = pos + 1;
  var endPos = arr.length - 1;
}

function draw() {
  background('OOOOOO');

  if (endPos == 0) {
    displayArray(arr, -1, -1), -1);
  } else {
    displayArray(arr, pos, testPos, endPos);
    if (arr[pos] > arr[testPos]) {
      swap(arr, pos, testPos);
    } else {
      pos++;
      testPos++;
    }

    if (pos == endPos) {
      pos = 0;
      testPos = 1;
      endPos--;
    }
  }
}

function randomArray(num) {
  var values = new int[num];

  for (let i = 0; i < values.length; i++) {
    values[i] = int(random(100, 400));
  } //random value loop
  return values;
} //randomArray

function displayArray(arr, p, tp, sp) {
  var barWidth = width / arr.length;
  var x = int(0);
  var y = int(0);
  noStroke();
  for (let i = 0; i < arr.length; i++) {
    y = height - arr[i];
    if (i == p) {
      fill(230, 0, 230);
    } else if (i == tp) {
      fill(0, 230, 230);
    } else if (i == sp) {
      fill(230, 230, 0);
    } else {
      fill(255);
    }
    rect(x, y, barWidth, arr[i]);
    x += barWidth;
  }
} //displayArray
