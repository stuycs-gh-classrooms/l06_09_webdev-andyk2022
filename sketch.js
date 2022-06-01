var arr;
var pos;
var testPos;
var endPos; //last position needed to be tested


function setup() {
  createCanvas(int(400), int(400));
  background(int(0));
  arr = randomArray(int(10));

  pos = int(0);
  testPos = pos + int(1);
  endPos = arr.length - int(1);
}

function draw() {
  background('OOOOOO');

  if (endPos == int(0)) {
    displayArray(arr, int(-1), int(-1), int(-1));
  } else {
    displayArray(arr, pos, testPos, endPos);
    if (arr[pos] > arr[testPos]) {
      swap(arr, pos, testPos);
    } else {
      pos++;
      testPos++;
    }

    if (pos == endPos) {
      pos = int(0);
      testPos = int(1);
      endPos--;
    }
  }
}

function randomArray(int num) {
  var values = new int[num];

  for (int i = int(0); i < values.length; i++) {
    values[i] = int(random(int(100), int(400)));
  } //random value loop
  return values;
} //randomArray

function displayArray(arr, int p, int tp, int sp) {
  var barWidth = width / arr.length;
  var x = 0;
  var y = 0;
  noStroke();
  for (int i = 0; i < arr.length; i++) {
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
